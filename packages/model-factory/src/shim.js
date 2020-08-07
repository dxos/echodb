//
// Copyright 2020 DXOS.org
//

// TODO(telackey): This entire file should be removed when we unify the ModelMessage and related Protobuf
// types, currently defined in echo-db/src/proto/model.proto, with @dxos/model-factory.
// Trying to use them directly as-is would create circular dependency, since echo-db imports Model.

import assert from 'assert';

/**
 * @callback AppendHandler
 * @param {IModelMessage} data
 * @return {IModelMessage}
 */

/**
 * Is this a valid Any?
 * @param {Any} value
 */
const validAny = (value) => {
  return !!(value && value.__type_url);
};

/**
 * Is this a valid FeedInfo?
 * @param {FeedInfo} value
 * @return {boolean}
 */
const validFeedInfo = (value) => {
  return !!(value && Buffer.isBuffer(value.key));
};

/**
 * Is this a valid CredentialsInfo?
 * @param {CredentialsInfo} value
 * @return {boolean}
 */
const validCredentialsInfo = (value) => {
  return !!(value && Buffer.isBuffer(value.owner));
};

/**
 * Create an {IModelMessage} for {Any} data.
 * @param {Any} data
 * @param {FeedInfo} [feedInfo]
 * @param {CredentialsInfo} [credentialsInfo]
 * @return {IModelMessage}
 */
// TODO(telackey):  We should be using the echo-db version of this, but that would create a circular dependency.
export const createModelMessage = (data, feedInfo, credentialsInfo) => {
  assert(validAny(data));
  if (feedInfo) {
    assert(validFeedInfo(feedInfo));
  }
  if (credentialsInfo) {
    assert(validCredentialsInfo(credentialsInfo));
  }
  return { data, feed: feedInfo, credentials: credentialsInfo };
};
