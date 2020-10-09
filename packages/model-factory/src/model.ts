//
// Copyright 2020 DXOS.org
//

import assert from 'assert';
import pify from 'pify';

import { Event } from '@dxos/async';
import { FeedMeta, ItemID, MutationMeta } from '@dxos/echo-protocol';
import { createWritable } from '@dxos/util';

import { ModelMessage, ModelMeta } from './types';

/**
 * Abstract base class for Models.
 * Models define a root message type, which is contained in the partent Item's message envelope.
 */
export abstract class Model<T, U = void> {
  protected readonly _modelUpdate = new Event<this>();
  private readonly _processor: NodeJS.WritableStream;

  private readonly _meta: ModelMeta;
  private readonly _itemId: ItemID;
  private readonly _writeStream?: NodeJS.WritableStream;

  /**
   * @param meta
   * @param itemId Parent item.
   * @param writeStream Output mutation stream (unless read-only).
   */
  constructor (meta: ModelMeta, itemId: ItemID, writeStream?: NodeJS.WritableStream) {
    assert(meta);
    assert(itemId);
    this._meta = meta;
    this._itemId = itemId;
    this._writeStream = writeStream;

    // Create the input mutation stream.
    this._processor = createWritable<ModelMessage<T>>(async message => {
      const { meta, mutation } = message;
      assert(meta);
      assert(mutation);

      await this.processMessage(meta, mutation);
    });
  }

  get itemId (): ItemID {
    return this._itemId;
  }

  get readOnly (): boolean {
    return this._writeStream === undefined;
  }

  // TODO(burdon): Rename.
  get processor (): NodeJS.WritableStream {
    return this._processor;
  }

  subscribe (listener: (result: this) => void) {
    return this._modelUpdate.on(listener);
  }

  /**
   * Writes the raw mutation to the output stream.
   * @param mutation
   */
  protected async write (mutation: T): Promise<void> {
    if (!this._writeStream) {
      throw new Error(`Read-only model: ${this._itemId}`);
    }

    await pify(this._writeStream.write.bind(this._writeStream))(mutation);
  }

  async processMessage (meta: MutationMeta, message: T): Promise<void> {
    const modified = await this._processMessage(meta, message);
    if (modified) {
      this._modelUpdate.emit(this);
    }
  }

  /**
   * Process the message.
   * @abstract
   * @param {Object} meta
   * @param {Object} message
   */
  async abstract _processMessage (meta: MutationMeta, message: T): Promise<boolean>;
}
