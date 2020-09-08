//
// Copyright 2020 DXOS.org
//

import assert from 'assert';

import { humanize } from '@dxos/crypto';
import { FeedKey, ItemType, PartyKey } from '@dxos/experimental-echo-protocol';
import { ModelFactory, ModelType, ModelConstructor, Model } from '@dxos/experimental-model-factory';
import { ObjectModel } from '@dxos/experimental-object-model';

import { createItemDemuxer, Item, ItemFilter, ItemManager } from '../items';
import { Invitation, InvitationRequest } from '../invitation';
import { ResultSet } from '../result';
import { PartyProcessor } from './party-processor';
import { Pipeline } from './pipeline';

export const PARTY_ITEM_TYPE = 'wrn://dxos.org/item/party';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PartyFilter {}

/**
 * A Party represents a shared dataset containing queryable Items that are constructed from an ordered stream
 * of mutations.
 */
export class Party {
  private _itemManager: ItemManager | undefined;
  private _itemDemuxer: NodeJS.WritableStream | undefined;
  private _unsubscribePipeline: (() => void) | undefined;

  /**
   * The Party is constructed by the `Database` object.
   * @param {ModelFactory} modelFactory
   * @param {Pipeline} pipeline
   */
  constructor (
    // TODO(burdon): Do not inline.
    private readonly _modelFactory: ModelFactory,
    private readonly _pipeline: Pipeline,
    private readonly _partyProcessor: PartyProcessor
  ) {
    assert(this._modelFactory);
    assert(this._pipeline);
    assert(this._partyProcessor);
  }

  toString () {
    return `Party(${JSON.stringify({ key: humanize(this.key), open: this.isOpen })})`;
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
    this._itemManager = new ItemManager(this._modelFactory, writeStream);
    this._itemDemuxer = createItemDemuxer(this._itemManager);
    readStream.pipe(this._itemDemuxer);

    // TODO(burdon): Propagate errors.
    this._unsubscribePipeline = this._pipeline.errors.on(err => console.error(err));

    return this;
  }

  /**
   * Closes the pipeline and streams.
   */
  async close () {
    if (!this._itemManager) {
      return this;
    }

    // Disconnect the read stream.
    this._pipeline.readStream?.unpipe(this._itemDemuxer);

    this._itemManager = undefined;
    this._itemDemuxer = undefined;

    // TODO(burdon): Create test to ensure everything closes cleanly.
    await this._pipeline.close();

    this._unsubscribePipeline!();

    return this;
  }

  /**
   * Sets a party property.
   * @param {string} key
   * @param value
   */
  async setProperty (key: string, value: any): Promise<Party> {
    const item = await this._getPropertiestItem();
    await (item.model as ObjectModel).setProperty(key, value);
    return this;
  }

  /**
   * Returns a party property value.
   * @param key
   */
  async getProperty (key: string): Promise<any> {
    const item = await this._getPropertiestItem();
    return await (item.model as ObjectModel).getProperty(key);
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
  async queryItems (filter?: ItemFilter): Promise<ResultSet<Item<any>>> {
    assert(this._itemManager);
    return this._itemManager.queryItems(filter);
  }

  /**
   * Creates an invition for a remote peer.
   */
  createInvitation (): Invitation {
    const request: InvitationRequest = {
      partyKey: this.key,
      feeds: this._pipeline.memberFeeds
    };

    assert(this._pipeline.writeStream);
    return new Invitation(this._pipeline.writeStream, request);
  }

  /**
   * Returns a special Item that is used by the Party to manage its properties.
   */
  async _getPropertiestItem (): Promise<Item<ObjectModel>> {
    assert(this._itemManager);
    const { value: items } = await this._itemManager?.queryItems({ type: PARTY_ITEM_TYPE });
    assert(items.length === 1);
    return items[0];
  }
}
