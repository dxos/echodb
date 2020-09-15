//
// Copyright 2020 DXOS.org
//

import assert from 'assert';
import debug from 'debug';

import { Event, Lock } from '@dxos/async';
import { keyToString } from '@dxos/crypto';
import { FeedKey, PartyKey, PublicKey } from '@dxos/experimental-echo-protocol';
import { ComplexMap } from '@dxos/experimental-util';

import { FeedStoreAdapter } from '../feed-store-adapter';
import { SecretProvider } from '../invitations/common';
import { InvitationDescriptor } from '../invitations/invitation-descriptor';
import { IdentityManager } from './identity-manager';
import { Party } from './party';
import { PartyFactory } from './party-factory';

const log = debug('dxos:echo:party-manager');

/**
 * Manages the life-cycle of parties.
 */
export class PartyManager {
  // Map of parties by party key.
  private readonly _parties = new ComplexMap<PublicKey, Party>(keyToString);

  private _halo?: Party = undefined;

  private readonly _lock = new Lock();

  // External event listener.
  // TODO(burdon): Wrap with subscribe.
  readonly update = new Event<Party>();

  constructor (
    private readonly _identityManager: IdentityManager,
    private readonly _feedStore: FeedStoreAdapter,
    private readonly _partyFactory: PartyFactory
  ) { }

  get parties (): Party[] {
    return Array.from(this._parties.values());
  }

  async open () {
    return this._lock.executeSynchronized(async () => {
      await this._feedStore.open();

      // Iterate descriptors and pre-create Party objects.
      for (const partyKey of this._feedStore.enumerateParties()) {
        if (Buffer.compare(partyKey, this._identityManager.identityKey.publicKey) === 0) {
          this._halo = await this._partyFactory.constructParty(partyKey, []);
          this.update.emit(this._halo);
        } else if (!this._parties.has(partyKey)) {
          const party = await this._partyFactory.constructParty(partyKey, []);
          this._parties.set(party.key, party);
          this.update.emit(party);
        }
      }
    });
  }

  async close () {
    await this._feedStore.close();
  }

  /**
   * Creates a new party, writing its genesis block to the stream.
   */
  async createParty (): Promise<Party> {
    return this._lock.executeSynchronized(async () => {
      const party = await this._partyFactory.createParty();
      this._parties.set(party.key, party);
      this.update.emit(party);
      return party;
    });
  }

  /**
   * Construct a party object and start replicating with the remote peer that created that party.
   * @param partyKey
   * @param feeds Set of feeds belonging to that party
   */
  async addParty (partyKey: PartyKey, feeds: FeedKey[]) {
    return this._lock.executeSynchronized(async () => {
      log(`Adding party partyKey=${keyToString(partyKey)} feeds=${feeds.map(keyToString)}`);
      assert(!this._parties.has(partyKey));
      const { party } = await this._partyFactory.addParty(partyKey, feeds);
      this._parties.set(party.key, party);
      this.update.emit(party);
    });
  }

  async joinParty (invitationDescriptor: InvitationDescriptor, secretProvider: SecretProvider) {
    return this._lock.executeSynchronized(async () => {
      const party = await this._partyFactory.joinParty(invitationDescriptor, secretProvider);
      this._parties.set(party.key, party);
      this.update.emit(party);
      return party;
    });
  }
}
