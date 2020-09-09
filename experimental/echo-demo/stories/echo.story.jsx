//
// Copyright 2020 DXOS.org
//

import debug from 'debug';
import React, { useEffect, useRef, useState } from 'react';
import ram from 'random-access-memory';

import useResizeAware from 'react-resize-aware';
import { withKnobs, button, number } from '@storybook/addon-knobs';

import {
  FullScreen,
  Grid,
  SVG,
  useGrid,
} from '@dxos/gem-core';

import {
  Markers
} from '@dxos/gem-spore';

import { randomBytes } from '@dxos/crypto';
import { FeedStore } from '@dxos/feed-store';
import { codec, createReplicatorFactory, Database, PartyManager } from '@dxos/experimental-echo-db';
import { ObjectModel } from '@dxos/experimental-object-model';
import { ModelFactory } from '@dxos/experimental-model-factory';
import { NetworkManager, SwarmProvider } from '@dxos/network-manager';

import { EchoContext, EchoGraph } from '../src';

const log = debug('dxos:echo:demo');
debug.enable('dxos:echo:demo, dxos:*:error');

export default {
  title: 'Demo',
  decorators: [withKnobs]
};

const createDatabase = () => {
  const feedStore = new FeedStore(ram, { feedOptions: { valueEncoding: codec } });

  const modelFactory = new ModelFactory()
    .registerModel(ObjectModel.meta, ObjectModel);

  const networkManager = new NetworkManager(feedStore, new SwarmProvider());
  const partyManager = new PartyManager(
    feedStore,
    modelFactory,
    createReplicatorFactory(networkManager, feedStore, randomBytes())
  );

  return new Database(partyManager);
};

export const withDatabase = () => {
  const n = number('Datatbases', 2, { min: 1, max: 8 });

  const [peers, setPeers] = useState([]);
  useEffect(() => {
    // TODO(burdon): Reuse existing.
    const peers = [...new Array(n)].map((_, i) => ({
      id: `${i + 1}`,
      database: createDatabase()
    }));

    setPeers(peers);
  }, [n]);

  return (
    <Test peers={peers} radius={200} />
  );
};

const Test = ({ peers, showGrid = true }) => {
  const [resizeListener, size] = useResizeAware();
  const { width, height } = size;
  const grid = useGrid({ width, height });

  // Click to invite.
  const handleInvite = async (peer, node) => {
    const party = await peer.database.getParty(node.partyKey);
    await Promise.all(peers.map(async p => {
      if (p.id !== peer.id) {
        log(`Inviting ${peer.id} => ${p.id} [${String(party)}]`);

        // Invite party.
        const invitation = party.createInvitation();
        log('Invitation request:', invitation.request);

        // Response.
        const responder = await p.database.joinParty(invitation.request);
        log('Invitation response:', responder.response);
        await invitation.finalize(responder.response);

        // Invited
        const remoteParty = responder.party;
        await remoteParty.open();
        log('Invited Party:', String(remoteParty));

        // TODO(burdon): Bugs after creating multiple parties.

        // events.js:46 MaxListenersExceededWarning: Possible EventEmitter memory leak detected.
        // 11 feed listeners added. Use emitter.setMaxListeners() to increase limit
        //     at _addListener (http://localhost:9001/vendors~main.3e634c573a17f55911d9.bundle.js:265267:15)
        //     at FeedStore.addListener (http://localhost:9001/vendors~main.3e634c573a17f55911d9.bundle.js:265283:10)
        //     at PartyManager.open (http://localhost:9001/main.3e634c573a17f55911d9.bundle.js:5135:25)
        //     at async Database.open (http://localhost:9001/main.3e634c573a17f55911d9.bundle.js:4448:9)
        //     at async Database.createParty (http://localhost:9001/main.3e634c573a17f55911d9.bundle.js:4463:9)
        //     at async http://localhost:9001/main.3e634c573a17f55911d9.bundle.js:11284:25

        // events.js:46 MaxListenersExceededWarning: Possible EventEmitter memory leak detected.
        // 11 feed listeners added. Use emitter.setMaxListeners() to increase limit
        //     at _addListener (http://localhost:9001/vendors~main.1409ee48732d4f30e02a.bundle.js:265267:15)
        //     at FeedStore.addListener (http://localhost:9001/vendors~main.1409ee48732d4f30e02a.bundle.js:265283:10)
        //     at Object.createOrderedFeedStream (http://localhost:9001/main.1409ee48732d4f30e02a.bundle.js:5982:15)
        //     at http://localhost:9001/main.1409ee48732d4f30e02a.bundle.js:5235:71
      }
    }));
  };

  const radius = Math.min(grid.size.width, grid.size.height) / 3;
  const scale = { x: grid.size.width / 4, y: grid.size.height / 3 };
  const da = (Math.PI * 2) / (peers.length);

  return (
    <FullScreen>
      {resizeListener}
      <SVG width={width} height={height}>
        {showGrid && (
          <Grid grid={grid} />
        )}

        <Markers />

        {peers.map((peer, i) => {
          const { id, database } = peer;
          const delta = (peers.length === 1) ? { x: 0, y: 0 } : {
            x: Math.sin(i * da + da / 2) * scale.x,
            y: Math.cos(i * da + da / 2) * scale.y
          };

          return (
            <EchoContext.Provider key={id} value={{ database }}>
              <EchoGraph
                id={id}
                grid={grid}
                delta={delta}
                radius={radius}
                onSelect={node => node.type === 'party' && handleInvite(peer, node)}
              />
              <div>INFO</div>
            </EchoContext.Provider>
          );
        })}
      </SVG>
    </FullScreen>
  );
};
