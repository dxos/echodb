//
// Copyright 2020 DXOS.org
//

import assert from 'assert';
import pify from 'pify';

import { keyToString } from '@dxos/crypto';
import { schema, PartyKey, PartySnapshot } from '@dxos/echo-protocol';
import { Storage } from '@dxos/random-access-multi-storage';

/**
 * Stores party snapshots. Takes any `random-access-storage` compatible backend.
 *
 * Passing `ram` as a backend will make all of files temporary, effectively disabling snapshots.
 */
export class SnapshotStore {
  constructor (
    private readonly _backend: Storage
  ) {}

  async load (partyKey: PartyKey): Promise<PartySnapshot | undefined> {
    const file = this._backend(keyToString(partyKey));

    try {
      const { size } = await pify(file.stat.bind(file))();
      if (size === 0) {
        return undefined;
      }

      const data = await pify(file.read.bind(file))(0, size);
      return schema.getCodecForType('dxos.echo.snapshot.PartySnapshot').decode(data);
    } catch (err) {
      if (err.code === 'ENOENT') {
        return undefined;
      } else {
        throw err;
      }
    } finally {
      await pify(file.close.bind(file))();
    }
  }

  async save (snapshot: PartySnapshot) {
    assert(snapshot.partyKey);
    const file = this._backend(keyToString(snapshot.partyKey), { truncate: true, size: 0 });

    try {
      const data = schema.getCodecForType('dxos.echo.snapshot.PartySnapshot').encode(snapshot);
      await pify(file.write.bind(file))(0, data);
    } finally {
      await pify(file.close.bind(file))();
    }
  }
}
