//
// Copyright 2020 DXOS.org
//

import assert from 'assert';

import { humanize } from '@dxos/crypto';

import { createItemDemuxer, Item, ItemFilter, ItemManager, ItemType } from '../items';
import { ResultSet } from '../result';
import { ModelFactory, ModelType } from '../models';
import { Pipeline } from './pipeline';
import { PartyKey } from './types';

/**
 * Party.
 */
export class Party {
  private readonly _pipeline: Pipeline;
  private readonly _modelFactory: ModelFactory;

  private _itemManager: ItemManager | undefined;
  private _itemDemuxer: NodeJS.WritableStream | undefined;

  /**
   * @param pipeline
   * @param modelFactory
   */
  constructor (pipeline: Pipeline, modelFactory: ModelFactory) {
    assert(pipeline);
    assert(modelFactory);
    this._pipeline = pipeline;
    this._modelFactory = modelFactory;
  }

  toString () {
    return `Party(${JSON.stringify({ key: humanize(this.key) })})`;
  }

  get key (): PartyKey {
    return this._pipeline.key;
  }

  /**
   * Opens the pipeline.
   */
  async open () {
    if (this._itemManager) {
      return this;
    }

    // TODO(burdon): Support read-only parties.
    const { readStream, writeStream } = await this._pipeline.open();
    this._itemManager = new ItemManager(this._modelFactory, writeStream);
    this._itemDemuxer = createItemDemuxer(this._itemManager);

    // Connect to the downstream item demuxer.
    readStream.pipe(this._itemDemuxer);

    return this;
  }

  /**
   * Closes the pipeline.
   */
  async close () {
    if (!this._itemManager) {
      return this;
    }

    // Disconnect the read stream.
    this._pipeline.readStream?.unpipe(this._itemDemuxer);

    this._itemManager = undefined;
    this._itemDemuxer = undefined;

    await this._pipeline.close();

    return this;
  }

  async createItem (itemType: ItemType, modelType: ModelType): Promise<Item> {
    assert(this._itemManager);
    return this._itemManager.createItem(itemType, modelType);
  }

  async queryItems (filter?: ItemFilter): Promise<ResultSet<Item>> {
    assert(this._itemManager);
    return this._itemManager.queryItems(filter);
  }
}
