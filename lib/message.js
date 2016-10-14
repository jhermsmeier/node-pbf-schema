/**
 * Message
 * @constructor
 * @return {Message}
 */
function Message() {

  if( !(this instanceof Message) )
    return new Message()

  /** @type {String} Message name */
  this.name = ''
  /** @type {Array} List of enums */
  this.enums = []
  /** @type {Array} List of messages */
  this.messages = []
  /** @type {Array} List of fields */
  this.fields = []
  /** @type {Array} List of reserved field tags / names */
  this.reservedFields = []

}

Message.Field = require( './field' )

/**
 * Message prototype
 * @type {Object}
 * @ignore
 */
Message.prototype = {

  constructor: Message,

  fromJSON: function( json ) {
    throw new Error( 'Not implemented' )
  },

  toJSON: function() {
    throw new Error( 'Not implemented' )
  },

  toString: function() {
    throw new Error( 'Not implemented' )
  },

}

// Exports
module.exports = Message
