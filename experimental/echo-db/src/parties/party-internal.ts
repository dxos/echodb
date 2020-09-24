//
// Copyright 2020 DXOS.org
//

import assert from 'assert';

import { KeyRecord, Keyring } from '@dxos/credentials';
import { ItemID, ItemType, PartyKey } from '@dxos/experimental-echo-protocol';
import { Model, ModelConstructor, ModelFactory } from '@dxos/experimental-model-factory';
import { ObjectModel } from '@dxos/experimental-object-model';
import { NetworkManager } from '@dxos/network-manager';

import {
  GreetingResponder, InvitationDescriptor, InvitationDescriptorType, InvitationDetails
} from '../invitations';
import { createItemDemuxer, Item, ItemFilter, ItemManager } from '../items';
import { ReplicationAdapter } from '../replication';
import { ResultSet } from '../result';
import { PartyProcessor } from './party-processor';
import { Pipeline } from './pipeline';

// TODO(burdon): Format?
export const PARTY_ITEM_TYPE = 'wrn://dxos.org/item/party';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PartyFilter {}

/**
 * A Party represents a shared dataset containing queryable Items that are constructed from an ordered stream
 * of mutations.
 */
export class PartyInternal {
  private _itemManager: ItemManager | undefined;
  private _itemDemuxer: NodeJS.WritableStream | undefined;
  private _unsubscribePipelineErrors: (() => void) | undefined;

  /**
   * The Party is constructed by the `Database` object.
   */
  constructor (
    private readonly _modelFactory: ModelFactory,
    private readonly _partyProcessor: PartyProcessor,
    private readonly _pipeline: Pipeline,
    private readonly _keyring: Keyring,
    private readonly _identityKeypair: KeyRecord,
    private readonly _networkManager: NetworkManager,
    private readonly _replicator: ReplicationAdapter
  ) {
    assert(this._modelFactory);
    assert(this._partyProcessor);
    assert(this._pipeline);
    assert(this._keyring);
    assert(this._identityKeypair);
  }

  get key (): PartyKey {
    return this._pipeline.partyKey;
  }

  get isOpen (): boolean {
    return !!this._itemManager;
  }

  /**
   * Opens the pipeline and connects the streams.
   */
  async open () {
    if (this._itemManager) {
      return this;
    }

    // TODO(burdon): Support read-only parties.
    const [readStream, writeStream] = await this._pipeline.open();

    // Connect to the downstream item demuxer.
    this._itemManager = new ItemManager(this.key, this._modelFactory, writeStream);
    this._itemDemuxer = createItemDemuxer(this._itemManager);
    readStream.pipe(this._itemDemuxer);

    // Replication.
    this._replicator.start();

    // TODO(burdon): Propagate errors.
    this._unsubscribePipelineErrors = this._pipeline.errors.on(err => console.error(err));

    return this;
  }

  /**
   * Closes the pipeline and streams.
   */
  async close () {
    if (!this._itemManager) {
      return this;
    }

    this._replicator.stop();

    // Disconnect the read stream.
    this._pipeline.inboundEchoStream?.unpipe(this._itemDemuxer);

    this._itemManager = undefined;
    this._itemDemuxer = undefined;

    // TODO(burdon): Create test to ensure everything closes cleanly.
    await this._pipeline.close();

    this._unsubscribePipelineErrors!();

    return this;
  }

  /**
   * Creates a new item with the given queryable type and model.
   * @param {ModelType} model
   * @param {ItemType} [itemType]
   */
  // TODO(burdon): Get modelType from somewhere other than ObjectModel.meta.type.
  // TODO(burdon): Pass in { type, parent } as options.
  async createItem <M extends Model<any>> (model: ModelConstructor<M>, itemType?: ItemType | undefined): Promise<Item<M>> {
    assert(this._itemManager);
    assert(model?.meta?.type);

    return this._itemManager.createItem(model.meta.type, itemType);
  }

  /**
   * Queries for a set of Items matching the optional filter.
   * @param filter
   */
  queryItems (filter?: ItemFilter): ResultSet<Item<any>> {
    assert(this._itemManager, 'ItemManger is missing.');

    return this._itemManager.queryItems(filter);
  }

  /**
   * Creates an invition for a remote peer.
   */
  async createInvitation (inviteDetails: InvitationDetails) {
    assert(this._pipeline.outboundHaloStream);
    assert(this._networkManager);

    const responder = new GreetingResponder(
      this.key, // TODO(burdon): Change order.
      this._keyring,
      this._networkManager,
      this._pipeline.outboundHaloStream,
      () => this._partyProcessor.feedKeys, // TODO(burdon): This can be accessed directly from partyProcessor!
      this._identityKeypair // TODO(burdon): Move to keyring?
    );

    const { secretValidator, secretProvider } = inviteDetails;

    const swarmKey = await responder.start();
    const invitation = await responder.invite(secretValidator, secretProvider/* onFinish, expiration */);

    return new InvitationDescriptor(InvitationDescriptorType.INTERACTIVE, swarmKey, invitation);
  }

  /**
   * Returns a special Item that is used by the Party to manage its properties.
   */
  async getPropertiestItem (): Promise<Item<ObjectModel>> {
    assert(this._itemManager);
    const { value: items } = await this._itemManager?.queryItems({ type: PARTY_ITEM_TYPE });
    assert(items.length === 1);
    return items[0];
  }

  /**
   * Retrieves a item from the index.
   * @param itemId
   */
  getItem (itemId: ItemID): Item<any> | undefined {
    return this._itemManager?.getItem(itemId);
  }
}
