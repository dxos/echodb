import { Model } from '@dxos/data-client';

/**
 * Partially ordered model accepts messages in a sequence of messageId and previousMessageId, allowing non-unique previousMessageIds
 */
export class PartiallyOrderedModel extends Model {
  _messageQueue = [];

  _seenIds = new Set([0]);
  _maxSeenId = 0;

  async processMessages (messages) {
    const messagesWithOrdering = messages
      .filter(
        m => m.messageId !== null && m.messageId !== undefined &&
        m.previousMessageId !== null && m.previousMessageId !== undefined
      );
    this._messageQueue.push(...messagesWithOrdering);
    this.tryApplyQueue();
    this.emit('update', this);
  }

  async tryApplyQueue () {
    const toApply = [];
    while (this._messageQueue.length > 0) {
      const nextMessageCandidates = this._messageQueue
        .filter(m => this._seenIds.has(m.previousMessageId))
        .sort((a, b) => this.compareCandidates(a, b));

      if (nextMessageCandidates.length === 0) {
        break; // no messages from the queue could be applied at this time
      }

      toApply.push(...nextMessageCandidates);

      // ...and discards the rest
      this._messageQueue = this._messageQueue.filter(m => !this._seenIds.has(m.previousMessageId));

      nextMessageCandidates.forEach(m => this._seenIds.add(m.messageId));
    }
    await this.onUpdate(toApply);
  }

  /**
   * @Virtual
   * Comparer used to sort messages forking from a single parent
   * @param  {object} a
   * @param  {object} b
   */
  compareCandidates (a, b) {
    return -1;
  }

  /**
   * @param {object} message
   */
  async onUpdate (messages) {
    throw new Error(`Not processed: ${messages.length}`);
  }

  static createGenesisMessage (message) {
    return {
      ...message,
      messageId: 1,
      previousMessageId: 0
    };
  }

  appendMessage (message) {
    super.appendMessage({
      ...message,
      messageId: this._maxSeenId + 1,
      previousMessageId: this._maxSeenId
    });
  }
}

export class DefaultPartiallyOrderedModel extends PartiallyOrderedModel {
  _messages = [];

  get messages () {
    return this._messages;
  }

  onUpdate (messages) {
    this._messages = [...this._messages, ...messages];
  }
}
