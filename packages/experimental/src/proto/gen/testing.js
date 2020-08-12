/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.dxos = (function() {

    /**
     * Namespace dxos.
     * @exports dxos
     * @namespace
     */
    var dxos = {};

    dxos.echo = (function() {

        /**
         * Namespace echo.
         * @memberof dxos
         * @namespace
         */
        var echo = {};

        echo.testing = (function() {

            /**
             * Namespace testing.
             * @memberof dxos.echo
             * @namespace
             */
            var testing = {};

            testing.FeedEnvelope = (function() {

                /**
                 * Properties of a FeedEnvelope.
                 * @memberof dxos.echo.testing
                 * @interface IFeedEnvelope
                 * @property {google.protobuf.IAny|null} [payload] FeedEnvelope payload
                 */

                /**
                 * Constructs a new FeedEnvelope.
                 * @memberof dxos.echo.testing
                 * @classdesc Represents a FeedEnvelope.
                 * @implements IFeedEnvelope
                 * @constructor
                 * @param {dxos.echo.testing.IFeedEnvelope=} [properties] Properties to set
                 */
                function FeedEnvelope(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FeedEnvelope payload.
                 * @member {google.protobuf.IAny|null|undefined} payload
                 * @memberof dxos.echo.testing.FeedEnvelope
                 * @instance
                 */
                FeedEnvelope.prototype.payload = null;

                /**
                 * Creates a new FeedEnvelope instance using the specified properties.
                 * @function create
                 * @memberof dxos.echo.testing.FeedEnvelope
                 * @static
                 * @param {dxos.echo.testing.IFeedEnvelope=} [properties] Properties to set
                 * @returns {dxos.echo.testing.FeedEnvelope} FeedEnvelope instance
                 */
                FeedEnvelope.create = function create(properties) {
                    return new FeedEnvelope(properties);
                };

                /**
                 * Encodes the specified FeedEnvelope message. Does not implicitly {@link dxos.echo.testing.FeedEnvelope.verify|verify} messages.
                 * @function encode
                 * @memberof dxos.echo.testing.FeedEnvelope
                 * @static
                 * @param {dxos.echo.testing.IFeedEnvelope} message FeedEnvelope message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FeedEnvelope.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                        $root.google.protobuf.Any.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified FeedEnvelope message, length delimited. Does not implicitly {@link dxos.echo.testing.FeedEnvelope.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof dxos.echo.testing.FeedEnvelope
                 * @static
                 * @param {dxos.echo.testing.IFeedEnvelope} message FeedEnvelope message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FeedEnvelope.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FeedEnvelope message from the specified reader or buffer.
                 * @function decode
                 * @memberof dxos.echo.testing.FeedEnvelope
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {dxos.echo.testing.FeedEnvelope} FeedEnvelope
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FeedEnvelope.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dxos.echo.testing.FeedEnvelope();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.payload = $root.google.protobuf.Any.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FeedEnvelope message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof dxos.echo.testing.FeedEnvelope
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {dxos.echo.testing.FeedEnvelope} FeedEnvelope
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FeedEnvelope.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FeedEnvelope message.
                 * @function verify
                 * @memberof dxos.echo.testing.FeedEnvelope
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FeedEnvelope.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.payload != null && message.hasOwnProperty("payload")) {
                        var error = $root.google.protobuf.Any.verify(message.payload);
                        if (error)
                            return "payload." + error;
                    }
                    return null;
                };

                /**
                 * Creates a FeedEnvelope message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof dxos.echo.testing.FeedEnvelope
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {dxos.echo.testing.FeedEnvelope} FeedEnvelope
                 */
                FeedEnvelope.fromObject = function fromObject(object) {
                    if (object instanceof $root.dxos.echo.testing.FeedEnvelope)
                        return object;
                    var message = new $root.dxos.echo.testing.FeedEnvelope();
                    if (object.payload != null) {
                        if (typeof object.payload !== "object")
                            throw TypeError(".dxos.echo.testing.FeedEnvelope.payload: object expected");
                        message.payload = $root.google.protobuf.Any.fromObject(object.payload);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a FeedEnvelope message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof dxos.echo.testing.FeedEnvelope
                 * @static
                 * @param {dxos.echo.testing.FeedEnvelope} message FeedEnvelope
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FeedEnvelope.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.payload = null;
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        object.payload = $root.google.protobuf.Any.toObject(message.payload, options);
                    return object;
                };

                /**
                 * Converts this FeedEnvelope to JSON.
                 * @function toJSON
                 * @memberof dxos.echo.testing.FeedEnvelope
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FeedEnvelope.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return FeedEnvelope;
            })();

            testing.FeedMessage = (function() {

                /**
                 * Properties of a FeedMessage.
                 * @memberof dxos.echo.testing
                 * @interface IFeedMessage
                 * @property {google.protobuf.IAny|null} [payload] FeedMessage payload
                 * @property {Uint8Array|null} [feedKey] FeedMessage feedKey
                 * @property {Uint8Array|null} [identityKey] FeedMessage identityKey
                 */

                /**
                 * Constructs a new FeedMessage.
                 * @memberof dxos.echo.testing
                 * @classdesc Represents a FeedMessage.
                 * @implements IFeedMessage
                 * @constructor
                 * @param {dxos.echo.testing.IFeedMessage=} [properties] Properties to set
                 */
                function FeedMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FeedMessage payload.
                 * @member {google.protobuf.IAny|null|undefined} payload
                 * @memberof dxos.echo.testing.FeedMessage
                 * @instance
                 */
                FeedMessage.prototype.payload = null;

                /**
                 * FeedMessage feedKey.
                 * @member {Uint8Array} feedKey
                 * @memberof dxos.echo.testing.FeedMessage
                 * @instance
                 */
                FeedMessage.prototype.feedKey = $util.newBuffer([]);

                /**
                 * FeedMessage identityKey.
                 * @member {Uint8Array} identityKey
                 * @memberof dxos.echo.testing.FeedMessage
                 * @instance
                 */
                FeedMessage.prototype.identityKey = $util.newBuffer([]);

                /**
                 * Creates a new FeedMessage instance using the specified properties.
                 * @function create
                 * @memberof dxos.echo.testing.FeedMessage
                 * @static
                 * @param {dxos.echo.testing.IFeedMessage=} [properties] Properties to set
                 * @returns {dxos.echo.testing.FeedMessage} FeedMessage instance
                 */
                FeedMessage.create = function create(properties) {
                    return new FeedMessage(properties);
                };

                /**
                 * Encodes the specified FeedMessage message. Does not implicitly {@link dxos.echo.testing.FeedMessage.verify|verify} messages.
                 * @function encode
                 * @memberof dxos.echo.testing.FeedMessage
                 * @static
                 * @param {dxos.echo.testing.IFeedMessage} message FeedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FeedMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                        $root.google.protobuf.Any.encode(message.payload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.feedKey != null && Object.hasOwnProperty.call(message, "feedKey"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.feedKey);
                    if (message.identityKey != null && Object.hasOwnProperty.call(message, "identityKey"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.identityKey);
                    return writer;
                };

                /**
                 * Encodes the specified FeedMessage message, length delimited. Does not implicitly {@link dxos.echo.testing.FeedMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof dxos.echo.testing.FeedMessage
                 * @static
                 * @param {dxos.echo.testing.IFeedMessage} message FeedMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FeedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FeedMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof dxos.echo.testing.FeedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {dxos.echo.testing.FeedMessage} FeedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FeedMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dxos.echo.testing.FeedMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.payload = $root.google.protobuf.Any.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.feedKey = reader.bytes();
                            break;
                        case 3:
                            message.identityKey = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FeedMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof dxos.echo.testing.FeedMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {dxos.echo.testing.FeedMessage} FeedMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FeedMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FeedMessage message.
                 * @function verify
                 * @memberof dxos.echo.testing.FeedMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FeedMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.payload != null && message.hasOwnProperty("payload")) {
                        var error = $root.google.protobuf.Any.verify(message.payload);
                        if (error)
                            return "payload." + error;
                    }
                    if (message.feedKey != null && message.hasOwnProperty("feedKey"))
                        if (!(message.feedKey && typeof message.feedKey.length === "number" || $util.isString(message.feedKey)))
                            return "feedKey: buffer expected";
                    if (message.identityKey != null && message.hasOwnProperty("identityKey"))
                        if (!(message.identityKey && typeof message.identityKey.length === "number" || $util.isString(message.identityKey)))
                            return "identityKey: buffer expected";
                    return null;
                };

                /**
                 * Creates a FeedMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof dxos.echo.testing.FeedMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {dxos.echo.testing.FeedMessage} FeedMessage
                 */
                FeedMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.dxos.echo.testing.FeedMessage)
                        return object;
                    var message = new $root.dxos.echo.testing.FeedMessage();
                    if (object.payload != null) {
                        if (typeof object.payload !== "object")
                            throw TypeError(".dxos.echo.testing.FeedMessage.payload: object expected");
                        message.payload = $root.google.protobuf.Any.fromObject(object.payload);
                    }
                    if (object.feedKey != null)
                        if (typeof object.feedKey === "string")
                            $util.base64.decode(object.feedKey, message.feedKey = $util.newBuffer($util.base64.length(object.feedKey)), 0);
                        else if (object.feedKey.length)
                            message.feedKey = object.feedKey;
                    if (object.identityKey != null)
                        if (typeof object.identityKey === "string")
                            $util.base64.decode(object.identityKey, message.identityKey = $util.newBuffer($util.base64.length(object.identityKey)), 0);
                        else if (object.identityKey.length)
                            message.identityKey = object.identityKey;
                    return message;
                };

                /**
                 * Creates a plain object from a FeedMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof dxos.echo.testing.FeedMessage
                 * @static
                 * @param {dxos.echo.testing.FeedMessage} message FeedMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FeedMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.payload = null;
                        if (options.bytes === String)
                            object.feedKey = "";
                        else {
                            object.feedKey = [];
                            if (options.bytes !== Array)
                                object.feedKey = $util.newBuffer(object.feedKey);
                        }
                        if (options.bytes === String)
                            object.identityKey = "";
                        else {
                            object.identityKey = [];
                            if (options.bytes !== Array)
                                object.identityKey = $util.newBuffer(object.identityKey);
                        }
                    }
                    if (message.payload != null && message.hasOwnProperty("payload"))
                        object.payload = $root.google.protobuf.Any.toObject(message.payload, options);
                    if (message.feedKey != null && message.hasOwnProperty("feedKey"))
                        object.feedKey = options.bytes === String ? $util.base64.encode(message.feedKey, 0, message.feedKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.feedKey) : message.feedKey;
                    if (message.identityKey != null && message.hasOwnProperty("identityKey"))
                        object.identityKey = options.bytes === String ? $util.base64.encode(message.identityKey, 0, message.identityKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.identityKey) : message.identityKey;
                    return object;
                };

                /**
                 * Converts this FeedMessage to JSON.
                 * @function toJSON
                 * @memberof dxos.echo.testing.FeedMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FeedMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return FeedMessage;
            })();

            testing.FeedGenesis = (function() {

                /**
                 * Properties of a FeedGenesis.
                 * @memberof dxos.echo.testing
                 * @interface IFeedGenesis
                 * @property {dxos.echo.testing.IPartyGenesis|null} [partyGenesis] FeedGenesis partyGenesis
                 */

                /**
                 * Constructs a new FeedGenesis.
                 * @memberof dxos.echo.testing
                 * @classdesc Represents a FeedGenesis.
                 * @implements IFeedGenesis
                 * @constructor
                 * @param {dxos.echo.testing.IFeedGenesis=} [properties] Properties to set
                 */
                function FeedGenesis(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FeedGenesis partyGenesis.
                 * @member {dxos.echo.testing.IPartyGenesis|null|undefined} partyGenesis
                 * @memberof dxos.echo.testing.FeedGenesis
                 * @instance
                 */
                FeedGenesis.prototype.partyGenesis = null;

                /**
                 * Creates a new FeedGenesis instance using the specified properties.
                 * @function create
                 * @memberof dxos.echo.testing.FeedGenesis
                 * @static
                 * @param {dxos.echo.testing.IFeedGenesis=} [properties] Properties to set
                 * @returns {dxos.echo.testing.FeedGenesis} FeedGenesis instance
                 */
                FeedGenesis.create = function create(properties) {
                    return new FeedGenesis(properties);
                };

                /**
                 * Encodes the specified FeedGenesis message. Does not implicitly {@link dxos.echo.testing.FeedGenesis.verify|verify} messages.
                 * @function encode
                 * @memberof dxos.echo.testing.FeedGenesis
                 * @static
                 * @param {dxos.echo.testing.IFeedGenesis} message FeedGenesis message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FeedGenesis.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.partyGenesis != null && Object.hasOwnProperty.call(message, "partyGenesis"))
                        $root.dxos.echo.testing.PartyGenesis.encode(message.partyGenesis, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified FeedGenesis message, length delimited. Does not implicitly {@link dxos.echo.testing.FeedGenesis.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof dxos.echo.testing.FeedGenesis
                 * @static
                 * @param {dxos.echo.testing.IFeedGenesis} message FeedGenesis message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FeedGenesis.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FeedGenesis message from the specified reader or buffer.
                 * @function decode
                 * @memberof dxos.echo.testing.FeedGenesis
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {dxos.echo.testing.FeedGenesis} FeedGenesis
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FeedGenesis.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dxos.echo.testing.FeedGenesis();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.partyGenesis = $root.dxos.echo.testing.PartyGenesis.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FeedGenesis message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof dxos.echo.testing.FeedGenesis
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {dxos.echo.testing.FeedGenesis} FeedGenesis
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FeedGenesis.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FeedGenesis message.
                 * @function verify
                 * @memberof dxos.echo.testing.FeedGenesis
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FeedGenesis.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.partyGenesis != null && message.hasOwnProperty("partyGenesis")) {
                        var error = $root.dxos.echo.testing.PartyGenesis.verify(message.partyGenesis);
                        if (error)
                            return "partyGenesis." + error;
                    }
                    return null;
                };

                /**
                 * Creates a FeedGenesis message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof dxos.echo.testing.FeedGenesis
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {dxos.echo.testing.FeedGenesis} FeedGenesis
                 */
                FeedGenesis.fromObject = function fromObject(object) {
                    if (object instanceof $root.dxos.echo.testing.FeedGenesis)
                        return object;
                    var message = new $root.dxos.echo.testing.FeedGenesis();
                    if (object.partyGenesis != null) {
                        if (typeof object.partyGenesis !== "object")
                            throw TypeError(".dxos.echo.testing.FeedGenesis.partyGenesis: object expected");
                        message.partyGenesis = $root.dxos.echo.testing.PartyGenesis.fromObject(object.partyGenesis);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a FeedGenesis message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof dxos.echo.testing.FeedGenesis
                 * @static
                 * @param {dxos.echo.testing.FeedGenesis} message FeedGenesis
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FeedGenesis.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.partyGenesis = null;
                    if (message.partyGenesis != null && message.hasOwnProperty("partyGenesis"))
                        object.partyGenesis = $root.dxos.echo.testing.PartyGenesis.toObject(message.partyGenesis, options);
                    return object;
                };

                /**
                 * Converts this FeedGenesis to JSON.
                 * @function toJSON
                 * @memberof dxos.echo.testing.FeedGenesis
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FeedGenesis.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return FeedGenesis;
            })();

            testing.PartyGenesis = (function() {

                /**
                 * Properties of a PartyGenesis.
                 * @memberof dxos.echo.testing
                 * @interface IPartyGenesis
                 * @property {Uint8Array|null} [feedKey] PartyGenesis feedKey
                 */

                /**
                 * Constructs a new PartyGenesis.
                 * @memberof dxos.echo.testing
                 * @classdesc Represents a PartyGenesis.
                 * @implements IPartyGenesis
                 * @constructor
                 * @param {dxos.echo.testing.IPartyGenesis=} [properties] Properties to set
                 */
                function PartyGenesis(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PartyGenesis feedKey.
                 * @member {Uint8Array} feedKey
                 * @memberof dxos.echo.testing.PartyGenesis
                 * @instance
                 */
                PartyGenesis.prototype.feedKey = $util.newBuffer([]);

                /**
                 * Creates a new PartyGenesis instance using the specified properties.
                 * @function create
                 * @memberof dxos.echo.testing.PartyGenesis
                 * @static
                 * @param {dxos.echo.testing.IPartyGenesis=} [properties] Properties to set
                 * @returns {dxos.echo.testing.PartyGenesis} PartyGenesis instance
                 */
                PartyGenesis.create = function create(properties) {
                    return new PartyGenesis(properties);
                };

                /**
                 * Encodes the specified PartyGenesis message. Does not implicitly {@link dxos.echo.testing.PartyGenesis.verify|verify} messages.
                 * @function encode
                 * @memberof dxos.echo.testing.PartyGenesis
                 * @static
                 * @param {dxos.echo.testing.IPartyGenesis} message PartyGenesis message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PartyGenesis.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.feedKey != null && Object.hasOwnProperty.call(message, "feedKey"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.feedKey);
                    return writer;
                };

                /**
                 * Encodes the specified PartyGenesis message, length delimited. Does not implicitly {@link dxos.echo.testing.PartyGenesis.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof dxos.echo.testing.PartyGenesis
                 * @static
                 * @param {dxos.echo.testing.IPartyGenesis} message PartyGenesis message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PartyGenesis.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PartyGenesis message from the specified reader or buffer.
                 * @function decode
                 * @memberof dxos.echo.testing.PartyGenesis
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {dxos.echo.testing.PartyGenesis} PartyGenesis
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PartyGenesis.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dxos.echo.testing.PartyGenesis();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.feedKey = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PartyGenesis message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof dxos.echo.testing.PartyGenesis
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {dxos.echo.testing.PartyGenesis} PartyGenesis
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PartyGenesis.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PartyGenesis message.
                 * @function verify
                 * @memberof dxos.echo.testing.PartyGenesis
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PartyGenesis.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.feedKey != null && message.hasOwnProperty("feedKey"))
                        if (!(message.feedKey && typeof message.feedKey.length === "number" || $util.isString(message.feedKey)))
                            return "feedKey: buffer expected";
                    return null;
                };

                /**
                 * Creates a PartyGenesis message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof dxos.echo.testing.PartyGenesis
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {dxos.echo.testing.PartyGenesis} PartyGenesis
                 */
                PartyGenesis.fromObject = function fromObject(object) {
                    if (object instanceof $root.dxos.echo.testing.PartyGenesis)
                        return object;
                    var message = new $root.dxos.echo.testing.PartyGenesis();
                    if (object.feedKey != null)
                        if (typeof object.feedKey === "string")
                            $util.base64.decode(object.feedKey, message.feedKey = $util.newBuffer($util.base64.length(object.feedKey)), 0);
                        else if (object.feedKey.length)
                            message.feedKey = object.feedKey;
                    return message;
                };

                /**
                 * Creates a plain object from a PartyGenesis message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof dxos.echo.testing.PartyGenesis
                 * @static
                 * @param {dxos.echo.testing.PartyGenesis} message PartyGenesis
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PartyGenesis.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.feedKey = "";
                        else {
                            object.feedKey = [];
                            if (options.bytes !== Array)
                                object.feedKey = $util.newBuffer(object.feedKey);
                        }
                    if (message.feedKey != null && message.hasOwnProperty("feedKey"))
                        object.feedKey = options.bytes === String ? $util.base64.encode(message.feedKey, 0, message.feedKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.feedKey) : message.feedKey;
                    return object;
                };

                /**
                 * Converts this PartyGenesis to JSON.
                 * @function toJSON
                 * @memberof dxos.echo.testing.PartyGenesis
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PartyGenesis.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PartyGenesis;
            })();

            testing.PartyAdmit = (function() {

                /**
                 * Properties of a PartyAdmit.
                 * @memberof dxos.echo.testing
                 * @interface IPartyAdmit
                 * @property {Uint8Array|null} [feedKey] PartyAdmit feedKey
                 */

                /**
                 * Constructs a new PartyAdmit.
                 * @memberof dxos.echo.testing
                 * @classdesc Represents a PartyAdmit.
                 * @implements IPartyAdmit
                 * @constructor
                 * @param {dxos.echo.testing.IPartyAdmit=} [properties] Properties to set
                 */
                function PartyAdmit(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PartyAdmit feedKey.
                 * @member {Uint8Array} feedKey
                 * @memberof dxos.echo.testing.PartyAdmit
                 * @instance
                 */
                PartyAdmit.prototype.feedKey = $util.newBuffer([]);

                /**
                 * Creates a new PartyAdmit instance using the specified properties.
                 * @function create
                 * @memberof dxos.echo.testing.PartyAdmit
                 * @static
                 * @param {dxos.echo.testing.IPartyAdmit=} [properties] Properties to set
                 * @returns {dxos.echo.testing.PartyAdmit} PartyAdmit instance
                 */
                PartyAdmit.create = function create(properties) {
                    return new PartyAdmit(properties);
                };

                /**
                 * Encodes the specified PartyAdmit message. Does not implicitly {@link dxos.echo.testing.PartyAdmit.verify|verify} messages.
                 * @function encode
                 * @memberof dxos.echo.testing.PartyAdmit
                 * @static
                 * @param {dxos.echo.testing.IPartyAdmit} message PartyAdmit message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PartyAdmit.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.feedKey != null && Object.hasOwnProperty.call(message, "feedKey"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.feedKey);
                    return writer;
                };

                /**
                 * Encodes the specified PartyAdmit message, length delimited. Does not implicitly {@link dxos.echo.testing.PartyAdmit.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof dxos.echo.testing.PartyAdmit
                 * @static
                 * @param {dxos.echo.testing.IPartyAdmit} message PartyAdmit message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PartyAdmit.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PartyAdmit message from the specified reader or buffer.
                 * @function decode
                 * @memberof dxos.echo.testing.PartyAdmit
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {dxos.echo.testing.PartyAdmit} PartyAdmit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PartyAdmit.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dxos.echo.testing.PartyAdmit();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.feedKey = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PartyAdmit message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof dxos.echo.testing.PartyAdmit
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {dxos.echo.testing.PartyAdmit} PartyAdmit
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PartyAdmit.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PartyAdmit message.
                 * @function verify
                 * @memberof dxos.echo.testing.PartyAdmit
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PartyAdmit.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.feedKey != null && message.hasOwnProperty("feedKey"))
                        if (!(message.feedKey && typeof message.feedKey.length === "number" || $util.isString(message.feedKey)))
                            return "feedKey: buffer expected";
                    return null;
                };

                /**
                 * Creates a PartyAdmit message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof dxos.echo.testing.PartyAdmit
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {dxos.echo.testing.PartyAdmit} PartyAdmit
                 */
                PartyAdmit.fromObject = function fromObject(object) {
                    if (object instanceof $root.dxos.echo.testing.PartyAdmit)
                        return object;
                    var message = new $root.dxos.echo.testing.PartyAdmit();
                    if (object.feedKey != null)
                        if (typeof object.feedKey === "string")
                            $util.base64.decode(object.feedKey, message.feedKey = $util.newBuffer($util.base64.length(object.feedKey)), 0);
                        else if (object.feedKey.length)
                            message.feedKey = object.feedKey;
                    return message;
                };

                /**
                 * Creates a plain object from a PartyAdmit message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof dxos.echo.testing.PartyAdmit
                 * @static
                 * @param {dxos.echo.testing.PartyAdmit} message PartyAdmit
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PartyAdmit.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.feedKey = "";
                        else {
                            object.feedKey = [];
                            if (options.bytes !== Array)
                                object.feedKey = $util.newBuffer(object.feedKey);
                        }
                    if (message.feedKey != null && message.hasOwnProperty("feedKey"))
                        object.feedKey = options.bytes === String ? $util.base64.encode(message.feedKey, 0, message.feedKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.feedKey) : message.feedKey;
                    return object;
                };

                /**
                 * Converts this PartyAdmit to JSON.
                 * @function toJSON
                 * @memberof dxos.echo.testing.PartyAdmit
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PartyAdmit.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PartyAdmit;
            })();

            testing.PartyEject = (function() {

                /**
                 * Properties of a PartyEject.
                 * @memberof dxos.echo.testing
                 * @interface IPartyEject
                 * @property {Uint8Array|null} [feedKey] PartyEject feedKey
                 */

                /**
                 * Constructs a new PartyEject.
                 * @memberof dxos.echo.testing
                 * @classdesc Represents a PartyEject.
                 * @implements IPartyEject
                 * @constructor
                 * @param {dxos.echo.testing.IPartyEject=} [properties] Properties to set
                 */
                function PartyEject(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PartyEject feedKey.
                 * @member {Uint8Array} feedKey
                 * @memberof dxos.echo.testing.PartyEject
                 * @instance
                 */
                PartyEject.prototype.feedKey = $util.newBuffer([]);

                /**
                 * Creates a new PartyEject instance using the specified properties.
                 * @function create
                 * @memberof dxos.echo.testing.PartyEject
                 * @static
                 * @param {dxos.echo.testing.IPartyEject=} [properties] Properties to set
                 * @returns {dxos.echo.testing.PartyEject} PartyEject instance
                 */
                PartyEject.create = function create(properties) {
                    return new PartyEject(properties);
                };

                /**
                 * Encodes the specified PartyEject message. Does not implicitly {@link dxos.echo.testing.PartyEject.verify|verify} messages.
                 * @function encode
                 * @memberof dxos.echo.testing.PartyEject
                 * @static
                 * @param {dxos.echo.testing.IPartyEject} message PartyEject message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PartyEject.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.feedKey != null && Object.hasOwnProperty.call(message, "feedKey"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.feedKey);
                    return writer;
                };

                /**
                 * Encodes the specified PartyEject message, length delimited. Does not implicitly {@link dxos.echo.testing.PartyEject.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof dxos.echo.testing.PartyEject
                 * @static
                 * @param {dxos.echo.testing.IPartyEject} message PartyEject message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PartyEject.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PartyEject message from the specified reader or buffer.
                 * @function decode
                 * @memberof dxos.echo.testing.PartyEject
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {dxos.echo.testing.PartyEject} PartyEject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PartyEject.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dxos.echo.testing.PartyEject();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.feedKey = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PartyEject message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof dxos.echo.testing.PartyEject
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {dxos.echo.testing.PartyEject} PartyEject
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PartyEject.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PartyEject message.
                 * @function verify
                 * @memberof dxos.echo.testing.PartyEject
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PartyEject.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.feedKey != null && message.hasOwnProperty("feedKey"))
                        if (!(message.feedKey && typeof message.feedKey.length === "number" || $util.isString(message.feedKey)))
                            return "feedKey: buffer expected";
                    return null;
                };

                /**
                 * Creates a PartyEject message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof dxos.echo.testing.PartyEject
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {dxos.echo.testing.PartyEject} PartyEject
                 */
                PartyEject.fromObject = function fromObject(object) {
                    if (object instanceof $root.dxos.echo.testing.PartyEject)
                        return object;
                    var message = new $root.dxos.echo.testing.PartyEject();
                    if (object.feedKey != null)
                        if (typeof object.feedKey === "string")
                            $util.base64.decode(object.feedKey, message.feedKey = $util.newBuffer($util.base64.length(object.feedKey)), 0);
                        else if (object.feedKey.length)
                            message.feedKey = object.feedKey;
                    return message;
                };

                /**
                 * Creates a plain object from a PartyEject message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof dxos.echo.testing.PartyEject
                 * @static
                 * @param {dxos.echo.testing.PartyEject} message PartyEject
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PartyEject.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.feedKey = "";
                        else {
                            object.feedKey = [];
                            if (options.bytes !== Array)
                                object.feedKey = $util.newBuffer(object.feedKey);
                        }
                    if (message.feedKey != null && message.hasOwnProperty("feedKey"))
                        object.feedKey = options.bytes === String ? $util.base64.encode(message.feedKey, 0, message.feedKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.feedKey) : message.feedKey;
                    return object;
                };

                /**
                 * Converts this PartyEject to JSON.
                 * @function toJSON
                 * @memberof dxos.echo.testing.PartyEject
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PartyEject.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PartyEject;
            })();

            testing.VectorTimestamp = (function() {

                /**
                 * Properties of a VectorTimestamp.
                 * @memberof dxos.echo.testing
                 * @interface IVectorTimestamp
                 * @property {Array.<dxos.echo.testing.VectorTimestamp.IFeed>|null} [timestamp] VectorTimestamp timestamp
                 */

                /**
                 * Constructs a new VectorTimestamp.
                 * @memberof dxos.echo.testing
                 * @classdesc Represents a VectorTimestamp.
                 * @implements IVectorTimestamp
                 * @constructor
                 * @param {dxos.echo.testing.IVectorTimestamp=} [properties] Properties to set
                 */
                function VectorTimestamp(properties) {
                    this.timestamp = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * VectorTimestamp timestamp.
                 * @member {Array.<dxos.echo.testing.VectorTimestamp.IFeed>} timestamp
                 * @memberof dxos.echo.testing.VectorTimestamp
                 * @instance
                 */
                VectorTimestamp.prototype.timestamp = $util.emptyArray;

                /**
                 * Creates a new VectorTimestamp instance using the specified properties.
                 * @function create
                 * @memberof dxos.echo.testing.VectorTimestamp
                 * @static
                 * @param {dxos.echo.testing.IVectorTimestamp=} [properties] Properties to set
                 * @returns {dxos.echo.testing.VectorTimestamp} VectorTimestamp instance
                 */
                VectorTimestamp.create = function create(properties) {
                    return new VectorTimestamp(properties);
                };

                /**
                 * Encodes the specified VectorTimestamp message. Does not implicitly {@link dxos.echo.testing.VectorTimestamp.verify|verify} messages.
                 * @function encode
                 * @memberof dxos.echo.testing.VectorTimestamp
                 * @static
                 * @param {dxos.echo.testing.IVectorTimestamp} message VectorTimestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                VectorTimestamp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.timestamp != null && message.timestamp.length)
                        for (var i = 0; i < message.timestamp.length; ++i)
                            $root.dxos.echo.testing.VectorTimestamp.Feed.encode(message.timestamp[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified VectorTimestamp message, length delimited. Does not implicitly {@link dxos.echo.testing.VectorTimestamp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof dxos.echo.testing.VectorTimestamp
                 * @static
                 * @param {dxos.echo.testing.IVectorTimestamp} message VectorTimestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                VectorTimestamp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a VectorTimestamp message from the specified reader or buffer.
                 * @function decode
                 * @memberof dxos.echo.testing.VectorTimestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {dxos.echo.testing.VectorTimestamp} VectorTimestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                VectorTimestamp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dxos.echo.testing.VectorTimestamp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.timestamp && message.timestamp.length))
                                message.timestamp = [];
                            message.timestamp.push($root.dxos.echo.testing.VectorTimestamp.Feed.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a VectorTimestamp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof dxos.echo.testing.VectorTimestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {dxos.echo.testing.VectorTimestamp} VectorTimestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                VectorTimestamp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a VectorTimestamp message.
                 * @function verify
                 * @memberof dxos.echo.testing.VectorTimestamp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                VectorTimestamp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                        if (!Array.isArray(message.timestamp))
                            return "timestamp: array expected";
                        for (var i = 0; i < message.timestamp.length; ++i) {
                            var error = $root.dxos.echo.testing.VectorTimestamp.Feed.verify(message.timestamp[i]);
                            if (error)
                                return "timestamp." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a VectorTimestamp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof dxos.echo.testing.VectorTimestamp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {dxos.echo.testing.VectorTimestamp} VectorTimestamp
                 */
                VectorTimestamp.fromObject = function fromObject(object) {
                    if (object instanceof $root.dxos.echo.testing.VectorTimestamp)
                        return object;
                    var message = new $root.dxos.echo.testing.VectorTimestamp();
                    if (object.timestamp) {
                        if (!Array.isArray(object.timestamp))
                            throw TypeError(".dxos.echo.testing.VectorTimestamp.timestamp: array expected");
                        message.timestamp = [];
                        for (var i = 0; i < object.timestamp.length; ++i) {
                            if (typeof object.timestamp[i] !== "object")
                                throw TypeError(".dxos.echo.testing.VectorTimestamp.timestamp: object expected");
                            message.timestamp[i] = $root.dxos.echo.testing.VectorTimestamp.Feed.fromObject(object.timestamp[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a VectorTimestamp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof dxos.echo.testing.VectorTimestamp
                 * @static
                 * @param {dxos.echo.testing.VectorTimestamp} message VectorTimestamp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                VectorTimestamp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.timestamp = [];
                    if (message.timestamp && message.timestamp.length) {
                        object.timestamp = [];
                        for (var j = 0; j < message.timestamp.length; ++j)
                            object.timestamp[j] = $root.dxos.echo.testing.VectorTimestamp.Feed.toObject(message.timestamp[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this VectorTimestamp to JSON.
                 * @function toJSON
                 * @memberof dxos.echo.testing.VectorTimestamp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                VectorTimestamp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                VectorTimestamp.Feed = (function() {

                    /**
                     * Properties of a Feed.
                     * @memberof dxos.echo.testing.VectorTimestamp
                     * @interface IFeed
                     * @property {Uint8Array|null} [feedKey] Feed feedKey
                     * @property {number|null} [feedIndex] Feed feedIndex
                     * @property {number|null} [seq] Feed seq
                     */

                    /**
                     * Constructs a new Feed.
                     * @memberof dxos.echo.testing.VectorTimestamp
                     * @classdesc Represents a Feed.
                     * @implements IFeed
                     * @constructor
                     * @param {dxos.echo.testing.VectorTimestamp.IFeed=} [properties] Properties to set
                     */
                    function Feed(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Feed feedKey.
                     * @member {Uint8Array} feedKey
                     * @memberof dxos.echo.testing.VectorTimestamp.Feed
                     * @instance
                     */
                    Feed.prototype.feedKey = $util.newBuffer([]);

                    /**
                     * Feed feedIndex.
                     * @member {number} feedIndex
                     * @memberof dxos.echo.testing.VectorTimestamp.Feed
                     * @instance
                     */
                    Feed.prototype.feedIndex = 0;

                    /**
                     * Feed seq.
                     * @member {number} seq
                     * @memberof dxos.echo.testing.VectorTimestamp.Feed
                     * @instance
                     */
                    Feed.prototype.seq = 0;

                    /**
                     * Creates a new Feed instance using the specified properties.
                     * @function create
                     * @memberof dxos.echo.testing.VectorTimestamp.Feed
                     * @static
                     * @param {dxos.echo.testing.VectorTimestamp.IFeed=} [properties] Properties to set
                     * @returns {dxos.echo.testing.VectorTimestamp.Feed} Feed instance
                     */
                    Feed.create = function create(properties) {
                        return new Feed(properties);
                    };

                    /**
                     * Encodes the specified Feed message. Does not implicitly {@link dxos.echo.testing.VectorTimestamp.Feed.verify|verify} messages.
                     * @function encode
                     * @memberof dxos.echo.testing.VectorTimestamp.Feed
                     * @static
                     * @param {dxos.echo.testing.VectorTimestamp.IFeed} message Feed message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Feed.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.feedKey != null && Object.hasOwnProperty.call(message, "feedKey"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.feedKey);
                        if (message.feedIndex != null && Object.hasOwnProperty.call(message, "feedIndex"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.feedIndex);
                        if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.seq);
                        return writer;
                    };

                    /**
                     * Encodes the specified Feed message, length delimited. Does not implicitly {@link dxos.echo.testing.VectorTimestamp.Feed.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof dxos.echo.testing.VectorTimestamp.Feed
                     * @static
                     * @param {dxos.echo.testing.VectorTimestamp.IFeed} message Feed message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Feed.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Feed message from the specified reader or buffer.
                     * @function decode
                     * @memberof dxos.echo.testing.VectorTimestamp.Feed
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {dxos.echo.testing.VectorTimestamp.Feed} Feed
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Feed.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dxos.echo.testing.VectorTimestamp.Feed();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.feedKey = reader.bytes();
                                break;
                            case 2:
                                message.feedIndex = reader.int32();
                                break;
                            case 3:
                                message.seq = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Feed message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof dxos.echo.testing.VectorTimestamp.Feed
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {dxos.echo.testing.VectorTimestamp.Feed} Feed
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Feed.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Feed message.
                     * @function verify
                     * @memberof dxos.echo.testing.VectorTimestamp.Feed
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Feed.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.feedKey != null && message.hasOwnProperty("feedKey"))
                            if (!(message.feedKey && typeof message.feedKey.length === "number" || $util.isString(message.feedKey)))
                                return "feedKey: buffer expected";
                        if (message.feedIndex != null && message.hasOwnProperty("feedIndex"))
                            if (!$util.isInteger(message.feedIndex))
                                return "feedIndex: integer expected";
                        if (message.seq != null && message.hasOwnProperty("seq"))
                            if (!$util.isInteger(message.seq))
                                return "seq: integer expected";
                        return null;
                    };

                    /**
                     * Creates a Feed message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof dxos.echo.testing.VectorTimestamp.Feed
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {dxos.echo.testing.VectorTimestamp.Feed} Feed
                     */
                    Feed.fromObject = function fromObject(object) {
                        if (object instanceof $root.dxos.echo.testing.VectorTimestamp.Feed)
                            return object;
                        var message = new $root.dxos.echo.testing.VectorTimestamp.Feed();
                        if (object.feedKey != null)
                            if (typeof object.feedKey === "string")
                                $util.base64.decode(object.feedKey, message.feedKey = $util.newBuffer($util.base64.length(object.feedKey)), 0);
                            else if (object.feedKey.length)
                                message.feedKey = object.feedKey;
                        if (object.feedIndex != null)
                            message.feedIndex = object.feedIndex | 0;
                        if (object.seq != null)
                            message.seq = object.seq | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Feed message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof dxos.echo.testing.VectorTimestamp.Feed
                     * @static
                     * @param {dxos.echo.testing.VectorTimestamp.Feed} message Feed
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Feed.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.feedKey = "";
                            else {
                                object.feedKey = [];
                                if (options.bytes !== Array)
                                    object.feedKey = $util.newBuffer(object.feedKey);
                            }
                            object.feedIndex = 0;
                            object.seq = 0;
                        }
                        if (message.feedKey != null && message.hasOwnProperty("feedKey"))
                            object.feedKey = options.bytes === String ? $util.base64.encode(message.feedKey, 0, message.feedKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.feedKey) : message.feedKey;
                        if (message.feedIndex != null && message.hasOwnProperty("feedIndex"))
                            object.feedIndex = message.feedIndex;
                        if (message.seq != null && message.hasOwnProperty("seq"))
                            object.seq = message.seq;
                        return object;
                    };

                    /**
                     * Converts this Feed to JSON.
                     * @function toJSON
                     * @memberof dxos.echo.testing.VectorTimestamp.Feed
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Feed.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Feed;
                })();

                return VectorTimestamp;
            })();

            testing.ItemEnvelope = (function() {

                /**
                 * Properties of an ItemEnvelope.
                 * @memberof dxos.echo.testing
                 * @interface IItemEnvelope
                 * @property {string|null} [itemId] ItemEnvelope itemId
                 * @property {dxos.echo.testing.IVectorTimestamp|null} [timestamp] ItemEnvelope timestamp
                 * @property {dxos.echo.testing.IItemGenesis|null} [genesis] ItemEnvelope genesis
                 * @property {google.protobuf.IAny|null} [operation] ItemEnvelope operation
                 */

                /**
                 * Constructs a new ItemEnvelope.
                 * @memberof dxos.echo.testing
                 * @classdesc Represents an ItemEnvelope.
                 * @implements IItemEnvelope
                 * @constructor
                 * @param {dxos.echo.testing.IItemEnvelope=} [properties] Properties to set
                 */
                function ItemEnvelope(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ItemEnvelope itemId.
                 * @member {string} itemId
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @instance
                 */
                ItemEnvelope.prototype.itemId = "";

                /**
                 * ItemEnvelope timestamp.
                 * @member {dxos.echo.testing.IVectorTimestamp|null|undefined} timestamp
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @instance
                 */
                ItemEnvelope.prototype.timestamp = null;

                /**
                 * ItemEnvelope genesis.
                 * @member {dxos.echo.testing.IItemGenesis|null|undefined} genesis
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @instance
                 */
                ItemEnvelope.prototype.genesis = null;

                /**
                 * ItemEnvelope operation.
                 * @member {google.protobuf.IAny|null|undefined} operation
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @instance
                 */
                ItemEnvelope.prototype.operation = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * ItemEnvelope action.
                 * @member {"genesis"|"operation"|undefined} action
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @instance
                 */
                Object.defineProperty(ItemEnvelope.prototype, "action", {
                    get: $util.oneOfGetter($oneOfFields = ["genesis", "operation"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ItemEnvelope instance using the specified properties.
                 * @function create
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @static
                 * @param {dxos.echo.testing.IItemEnvelope=} [properties] Properties to set
                 * @returns {dxos.echo.testing.ItemEnvelope} ItemEnvelope instance
                 */
                ItemEnvelope.create = function create(properties) {
                    return new ItemEnvelope(properties);
                };

                /**
                 * Encodes the specified ItemEnvelope message. Does not implicitly {@link dxos.echo.testing.ItemEnvelope.verify|verify} messages.
                 * @function encode
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @static
                 * @param {dxos.echo.testing.IItemEnvelope} message ItemEnvelope message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ItemEnvelope.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemId);
                    if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                        $root.dxos.echo.testing.VectorTimestamp.encode(message.timestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.genesis != null && Object.hasOwnProperty.call(message, "genesis"))
                        $root.dxos.echo.testing.ItemGenesis.encode(message.genesis, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.operation != null && Object.hasOwnProperty.call(message, "operation"))
                        $root.google.protobuf.Any.encode(message.operation, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ItemEnvelope message, length delimited. Does not implicitly {@link dxos.echo.testing.ItemEnvelope.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @static
                 * @param {dxos.echo.testing.IItemEnvelope} message ItemEnvelope message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ItemEnvelope.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ItemEnvelope message from the specified reader or buffer.
                 * @function decode
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {dxos.echo.testing.ItemEnvelope} ItemEnvelope
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ItemEnvelope.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dxos.echo.testing.ItemEnvelope();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.itemId = reader.string();
                            break;
                        case 2:
                            message.timestamp = $root.dxos.echo.testing.VectorTimestamp.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.genesis = $root.dxos.echo.testing.ItemGenesis.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.operation = $root.google.protobuf.Any.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ItemEnvelope message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {dxos.echo.testing.ItemEnvelope} ItemEnvelope
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ItemEnvelope.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ItemEnvelope message.
                 * @function verify
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ItemEnvelope.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.itemId != null && message.hasOwnProperty("itemId"))
                        if (!$util.isString(message.itemId))
                            return "itemId: string expected";
                    if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                        var error = $root.dxos.echo.testing.VectorTimestamp.verify(message.timestamp);
                        if (error)
                            return "timestamp." + error;
                    }
                    if (message.genesis != null && message.hasOwnProperty("genesis")) {
                        properties.action = 1;
                        {
                            var error = $root.dxos.echo.testing.ItemGenesis.verify(message.genesis);
                            if (error)
                                return "genesis." + error;
                        }
                    }
                    if (message.operation != null && message.hasOwnProperty("operation")) {
                        if (properties.action === 1)
                            return "action: multiple values";
                        properties.action = 1;
                        {
                            var error = $root.google.protobuf.Any.verify(message.operation);
                            if (error)
                                return "operation." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an ItemEnvelope message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {dxos.echo.testing.ItemEnvelope} ItemEnvelope
                 */
                ItemEnvelope.fromObject = function fromObject(object) {
                    if (object instanceof $root.dxos.echo.testing.ItemEnvelope)
                        return object;
                    var message = new $root.dxos.echo.testing.ItemEnvelope();
                    if (object.itemId != null)
                        message.itemId = String(object.itemId);
                    if (object.timestamp != null) {
                        if (typeof object.timestamp !== "object")
                            throw TypeError(".dxos.echo.testing.ItemEnvelope.timestamp: object expected");
                        message.timestamp = $root.dxos.echo.testing.VectorTimestamp.fromObject(object.timestamp);
                    }
                    if (object.genesis != null) {
                        if (typeof object.genesis !== "object")
                            throw TypeError(".dxos.echo.testing.ItemEnvelope.genesis: object expected");
                        message.genesis = $root.dxos.echo.testing.ItemGenesis.fromObject(object.genesis);
                    }
                    if (object.operation != null) {
                        if (typeof object.operation !== "object")
                            throw TypeError(".dxos.echo.testing.ItemEnvelope.operation: object expected");
                        message.operation = $root.google.protobuf.Any.fromObject(object.operation);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an ItemEnvelope message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @static
                 * @param {dxos.echo.testing.ItemEnvelope} message ItemEnvelope
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ItemEnvelope.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.itemId = "";
                        object.timestamp = null;
                    }
                    if (message.itemId != null && message.hasOwnProperty("itemId"))
                        object.itemId = message.itemId;
                    if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                        object.timestamp = $root.dxos.echo.testing.VectorTimestamp.toObject(message.timestamp, options);
                    if (message.genesis != null && message.hasOwnProperty("genesis")) {
                        object.genesis = $root.dxos.echo.testing.ItemGenesis.toObject(message.genesis, options);
                        if (options.oneofs)
                            object.action = "genesis";
                    }
                    if (message.operation != null && message.hasOwnProperty("operation")) {
                        object.operation = $root.google.protobuf.Any.toObject(message.operation, options);
                        if (options.oneofs)
                            object.action = "operation";
                    }
                    return object;
                };

                /**
                 * Converts this ItemEnvelope to JSON.
                 * @function toJSON
                 * @memberof dxos.echo.testing.ItemEnvelope
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ItemEnvelope.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ItemEnvelope;
            })();

            testing.ItemGenesis = (function() {

                /**
                 * Properties of an ItemGenesis.
                 * @memberof dxos.echo.testing
                 * @interface IItemGenesis
                 * @property {string|null} [itemType] ItemGenesis itemType
                 * @property {string|null} [modelType] ItemGenesis modelType
                 * @property {string|null} [modelVersion] ItemGenesis modelVersion
                 */

                /**
                 * Constructs a new ItemGenesis.
                 * @memberof dxos.echo.testing
                 * @classdesc Represents an ItemGenesis.
                 * @implements IItemGenesis
                 * @constructor
                 * @param {dxos.echo.testing.IItemGenesis=} [properties] Properties to set
                 */
                function ItemGenesis(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ItemGenesis itemType.
                 * @member {string} itemType
                 * @memberof dxos.echo.testing.ItemGenesis
                 * @instance
                 */
                ItemGenesis.prototype.itemType = "";

                /**
                 * ItemGenesis modelType.
                 * @member {string} modelType
                 * @memberof dxos.echo.testing.ItemGenesis
                 * @instance
                 */
                ItemGenesis.prototype.modelType = "";

                /**
                 * ItemGenesis modelVersion.
                 * @member {string} modelVersion
                 * @memberof dxos.echo.testing.ItemGenesis
                 * @instance
                 */
                ItemGenesis.prototype.modelVersion = "";

                /**
                 * Creates a new ItemGenesis instance using the specified properties.
                 * @function create
                 * @memberof dxos.echo.testing.ItemGenesis
                 * @static
                 * @param {dxos.echo.testing.IItemGenesis=} [properties] Properties to set
                 * @returns {dxos.echo.testing.ItemGenesis} ItemGenesis instance
                 */
                ItemGenesis.create = function create(properties) {
                    return new ItemGenesis(properties);
                };

                /**
                 * Encodes the specified ItemGenesis message. Does not implicitly {@link dxos.echo.testing.ItemGenesis.verify|verify} messages.
                 * @function encode
                 * @memberof dxos.echo.testing.ItemGenesis
                 * @static
                 * @param {dxos.echo.testing.IItemGenesis} message ItemGenesis message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ItemGenesis.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.itemType != null && Object.hasOwnProperty.call(message, "itemType"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.itemType);
                    if (message.modelType != null && Object.hasOwnProperty.call(message, "modelType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.modelType);
                    if (message.modelVersion != null && Object.hasOwnProperty.call(message, "modelVersion"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.modelVersion);
                    return writer;
                };

                /**
                 * Encodes the specified ItemGenesis message, length delimited. Does not implicitly {@link dxos.echo.testing.ItemGenesis.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof dxos.echo.testing.ItemGenesis
                 * @static
                 * @param {dxos.echo.testing.IItemGenesis} message ItemGenesis message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ItemGenesis.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ItemGenesis message from the specified reader or buffer.
                 * @function decode
                 * @memberof dxos.echo.testing.ItemGenesis
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {dxos.echo.testing.ItemGenesis} ItemGenesis
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ItemGenesis.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dxos.echo.testing.ItemGenesis();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.itemType = reader.string();
                            break;
                        case 2:
                            message.modelType = reader.string();
                            break;
                        case 3:
                            message.modelVersion = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ItemGenesis message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof dxos.echo.testing.ItemGenesis
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {dxos.echo.testing.ItemGenesis} ItemGenesis
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ItemGenesis.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ItemGenesis message.
                 * @function verify
                 * @memberof dxos.echo.testing.ItemGenesis
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ItemGenesis.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.itemType != null && message.hasOwnProperty("itemType"))
                        if (!$util.isString(message.itemType))
                            return "itemType: string expected";
                    if (message.modelType != null && message.hasOwnProperty("modelType"))
                        if (!$util.isString(message.modelType))
                            return "modelType: string expected";
                    if (message.modelVersion != null && message.hasOwnProperty("modelVersion"))
                        if (!$util.isString(message.modelVersion))
                            return "modelVersion: string expected";
                    return null;
                };

                /**
                 * Creates an ItemGenesis message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof dxos.echo.testing.ItemGenesis
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {dxos.echo.testing.ItemGenesis} ItemGenesis
                 */
                ItemGenesis.fromObject = function fromObject(object) {
                    if (object instanceof $root.dxos.echo.testing.ItemGenesis)
                        return object;
                    var message = new $root.dxos.echo.testing.ItemGenesis();
                    if (object.itemType != null)
                        message.itemType = String(object.itemType);
                    if (object.modelType != null)
                        message.modelType = String(object.modelType);
                    if (object.modelVersion != null)
                        message.modelVersion = String(object.modelVersion);
                    return message;
                };

                /**
                 * Creates a plain object from an ItemGenesis message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof dxos.echo.testing.ItemGenesis
                 * @static
                 * @param {dxos.echo.testing.ItemGenesis} message ItemGenesis
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ItemGenesis.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.itemType = "";
                        object.modelType = "";
                        object.modelVersion = "";
                    }
                    if (message.itemType != null && message.hasOwnProperty("itemType"))
                        object.itemType = message.itemType;
                    if (message.modelType != null && message.hasOwnProperty("modelType"))
                        object.modelType = message.modelType;
                    if (message.modelVersion != null && message.hasOwnProperty("modelVersion"))
                        object.modelVersion = message.modelVersion;
                    return object;
                };

                /**
                 * Converts this ItemGenesis to JSON.
                 * @function toJSON
                 * @memberof dxos.echo.testing.ItemGenesis
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ItemGenesis.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ItemGenesis;
            })();

            testing.TestItemMutation = (function() {

                /**
                 * Properties of a TestItemMutation.
                 * @memberof dxos.echo.testing
                 * @interface ITestItemMutation
                 * @property {string|null} [key] TestItemMutation key
                 * @property {string|null} [value] TestItemMutation value
                 */

                /**
                 * Constructs a new TestItemMutation.
                 * @memberof dxos.echo.testing
                 * @classdesc Represents a TestItemMutation.
                 * @implements ITestItemMutation
                 * @constructor
                 * @param {dxos.echo.testing.ITestItemMutation=} [properties] Properties to set
                 */
                function TestItemMutation(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TestItemMutation key.
                 * @member {string} key
                 * @memberof dxos.echo.testing.TestItemMutation
                 * @instance
                 */
                TestItemMutation.prototype.key = "";

                /**
                 * TestItemMutation value.
                 * @member {string} value
                 * @memberof dxos.echo.testing.TestItemMutation
                 * @instance
                 */
                TestItemMutation.prototype.value = "";

                /**
                 * Creates a new TestItemMutation instance using the specified properties.
                 * @function create
                 * @memberof dxos.echo.testing.TestItemMutation
                 * @static
                 * @param {dxos.echo.testing.ITestItemMutation=} [properties] Properties to set
                 * @returns {dxos.echo.testing.TestItemMutation} TestItemMutation instance
                 */
                TestItemMutation.create = function create(properties) {
                    return new TestItemMutation(properties);
                };

                /**
                 * Encodes the specified TestItemMutation message. Does not implicitly {@link dxos.echo.testing.TestItemMutation.verify|verify} messages.
                 * @function encode
                 * @memberof dxos.echo.testing.TestItemMutation
                 * @static
                 * @param {dxos.echo.testing.ITestItemMutation} message TestItemMutation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TestItemMutation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                    return writer;
                };

                /**
                 * Encodes the specified TestItemMutation message, length delimited. Does not implicitly {@link dxos.echo.testing.TestItemMutation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof dxos.echo.testing.TestItemMutation
                 * @static
                 * @param {dxos.echo.testing.ITestItemMutation} message TestItemMutation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TestItemMutation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TestItemMutation message from the specified reader or buffer.
                 * @function decode
                 * @memberof dxos.echo.testing.TestItemMutation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {dxos.echo.testing.TestItemMutation} TestItemMutation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TestItemMutation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dxos.echo.testing.TestItemMutation();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.key = reader.string();
                            break;
                        case 2:
                            message.value = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TestItemMutation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof dxos.echo.testing.TestItemMutation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {dxos.echo.testing.TestItemMutation} TestItemMutation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TestItemMutation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TestItemMutation message.
                 * @function verify
                 * @memberof dxos.echo.testing.TestItemMutation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TestItemMutation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.key != null && message.hasOwnProperty("key"))
                        if (!$util.isString(message.key))
                            return "key: string expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isString(message.value))
                            return "value: string expected";
                    return null;
                };

                /**
                 * Creates a TestItemMutation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof dxos.echo.testing.TestItemMutation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {dxos.echo.testing.TestItemMutation} TestItemMutation
                 */
                TestItemMutation.fromObject = function fromObject(object) {
                    if (object instanceof $root.dxos.echo.testing.TestItemMutation)
                        return object;
                    var message = new $root.dxos.echo.testing.TestItemMutation();
                    if (object.key != null)
                        message.key = String(object.key);
                    if (object.value != null)
                        message.value = String(object.value);
                    return message;
                };

                /**
                 * Creates a plain object from a TestItemMutation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof dxos.echo.testing.TestItemMutation
                 * @static
                 * @param {dxos.echo.testing.TestItemMutation} message TestItemMutation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TestItemMutation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.key = "";
                        object.value = "";
                    }
                    if (message.key != null && message.hasOwnProperty("key"))
                        object.key = message.key;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };

                /**
                 * Converts this TestItemMutation to JSON.
                 * @function toJSON
                 * @memberof dxos.echo.testing.TestItemMutation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TestItemMutation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TestItemMutation;
            })();

            testing.TestMessage = (function() {

                /**
                 * Properties of a TestMessage.
                 * @memberof dxos.echo.testing
                 * @interface ITestMessage
                 * @property {number|null} [value] TestMessage value
                 */

                /**
                 * Constructs a new TestMessage.
                 * @memberof dxos.echo.testing
                 * @classdesc Represents a TestMessage.
                 * @implements ITestMessage
                 * @constructor
                 * @param {dxos.echo.testing.ITestMessage=} [properties] Properties to set
                 */
                function TestMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TestMessage value.
                 * @member {number} value
                 * @memberof dxos.echo.testing.TestMessage
                 * @instance
                 */
                TestMessage.prototype.value = 0;

                /**
                 * Creates a new TestMessage instance using the specified properties.
                 * @function create
                 * @memberof dxos.echo.testing.TestMessage
                 * @static
                 * @param {dxos.echo.testing.ITestMessage=} [properties] Properties to set
                 * @returns {dxos.echo.testing.TestMessage} TestMessage instance
                 */
                TestMessage.create = function create(properties) {
                    return new TestMessage(properties);
                };

                /**
                 * Encodes the specified TestMessage message. Does not implicitly {@link dxos.echo.testing.TestMessage.verify|verify} messages.
                 * @function encode
                 * @memberof dxos.echo.testing.TestMessage
                 * @static
                 * @param {dxos.echo.testing.ITestMessage} message TestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TestMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                    return writer;
                };

                /**
                 * Encodes the specified TestMessage message, length delimited. Does not implicitly {@link dxos.echo.testing.TestMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof dxos.echo.testing.TestMessage
                 * @static
                 * @param {dxos.echo.testing.ITestMessage} message TestMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TestMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TestMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof dxos.echo.testing.TestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {dxos.echo.testing.TestMessage} TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TestMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dxos.echo.testing.TestMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TestMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof dxos.echo.testing.TestMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {dxos.echo.testing.TestMessage} TestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TestMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TestMessage message.
                 * @function verify
                 * @memberof dxos.echo.testing.TestMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TestMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value))
                            return "value: integer expected";
                    return null;
                };

                /**
                 * Creates a TestMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof dxos.echo.testing.TestMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {dxos.echo.testing.TestMessage} TestMessage
                 */
                TestMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.dxos.echo.testing.TestMessage)
                        return object;
                    var message = new $root.dxos.echo.testing.TestMessage();
                    if (object.value != null)
                        message.value = object.value | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a TestMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof dxos.echo.testing.TestMessage
                 * @static
                 * @param {dxos.echo.testing.TestMessage} message TestMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TestMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };

                /**
                 * Converts this TestMessage to JSON.
                 * @function toJSON
                 * @memberof dxos.echo.testing.TestMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TestMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TestMessage;
            })();

            return testing;
        })();

        return echo;
    })();

    return dxos;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
