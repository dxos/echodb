//
// Copyright 2020 DXOS.org
//

import debug from 'debug';

import { humanize } from '@dxos/crypto';

import { Database, Party, Query } from './database';

const log = debug('dxos:echo:testing');
debug.enable('dxos:echo:*');

describe('api tests', () => {
  test('api', async () => {
    const db = new Database();

    const parties = await db.queryParties({ open: true });
    log('Parties:', parties.value.map(party => humanize(party.key)));
    expect(parties.value).toHaveLength(0);

    parties.on('update', async (parties: Query<Party>) => {
      log('Parties:', parties.value.map(party => humanize(party.key)));
      expect(parties.value).toHaveLength(1);
      parties.value.map(async party => {
        const items = await party.queryItems();
        items.value.forEach(item => {
          log('Item:', JSON.stringify({ type: item.type, id: item.id }));
        });

        const result = await party.queryItems({ type: 'document' });
        expect(result.value).toHaveLength(2);
      });
    });

    const party = await db.createParty();
    log('Created:', humanize(party.key));

    await party.createItem('document');
    await party.createItem('document');
    await party.createItem('canvas');
  });
});
