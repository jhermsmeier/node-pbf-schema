/**
 * Message
 * @constructor
 * @return {Message}
 */
function Message() {

  if( !(this instanceof Message) )
    return new Message()

}

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
