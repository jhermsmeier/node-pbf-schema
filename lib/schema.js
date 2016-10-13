/**
 * ProtocolBufferSchema
 * @constructor
 * @return {ProtocolBufferSchema}
 */
function ProtocolBufferSchema() {

  if( !(this instanceof ProtocolBufferSchema) )
    return new ProtocolBufferSchema()

  this.syntax = 3
  this.package = null
  this.options = {}
  this.enums = []
  this.messages = []

}

ProtocolBufferSchema.parse = function( value ) {
  return new ProtocolBufferSchema().parse( value )
}

/**
 * ProtocolBufferSchema prototype
 * @type {Object}
 */
ProtocolBufferSchema.prototype = {

  constructor: ProtocolBufferSchema,

  parse: function() {
    throw new Error( 'Not implemented' )
    return this
  },

  toJSON: function() {
    throw new Error( 'Not implemented' )
  },

  toString: function() {
    throw new Error( 'Not implemented' )
  },

}

// Exports
module.exports = ProtocolBufferSchema
