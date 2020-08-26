//
// Copyright 2020 DXOS.org
//

import assert from 'assert';

import { IHaloStream } from '@dxos/experimental-echo-protocol';
import { jsonReplacer } from '@dxos/experimental-util';

import { PartyProcessor } from './party-processor';

/**
 * Party processor for testing.
 */
export class TestPartyProcessor extends PartyProcessor {
  async _processMessage (message: IHaloStream): Promise<void> {
    const { data: { genesis, admit } } = message;

    //
    // Party genesis.
    //
    if (genesis) {
      const { partyKey, feedKey } = genesis;
      assert(partyKey);
      assert(feedKey);
      assert(Buffer.compare(partyKey, this._partyKey) === 0);
      this._addFeedKey(feedKey);
      return;
    }

    //
    // Admit feed.
    //
    if (admit) {
      const { partyKey, feedKey } = admit;
      assert(partyKey);
      assert(feedKey);
      assert(Buffer.compare(partyKey, this._partyKey) === 0);
      this._addFeedKey(feedKey);
      return;
    }

    throw new Error(`Invalid message: ${JSON.stringify(message, jsonReplacer)}`);
  }
}
