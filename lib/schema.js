/**
 * ProtocolBufferSchema
 * @constructor
 * @return {ProtocolBufferSchema}
 */
function ProtocolBufferSchema() {

  if( !(this instanceof ProtocolBufferSchema) )
    return new ProtocolBufferSchema()

  /** @type {Number} Syntax version */
  this.syntax = 3
  /** @type {(String|null)} Package namespace */
  this.package = null
  /** @type {Object} Imports list */
  this.imports = {}
  /** @type {Object} Options */
  this.options = {}
  /** @type {Array} Enums */
  this.enums = []
  /** @type {Array} Messages */
  this.messages = []

}

ProtocolBufferSchema.Enum = require( './enum' )
ProtocolBufferSchema.Message = require( './message' )

ProtocolBufferSchema.parse = function( value ) {
  return new ProtocolBufferSchema().parse( value )
}

ProtocolBufferSchema.fromJSON = function( json ) {

  var data = typeof json === 'string' ?
    JSON.parse( json ) : json

  throw new Error( 'Not implemented' )

}

ProtocolBufferSchema.stringify = function( schema, version ) {
  return schema.toString( version )
}

/**
 * ProtocolBufferSchema prototype
 * @type {Object}
 */
ProtocolBufferSchema.prototype = {

  constructor: ProtocolBufferSchema,

  parse: function( value ) {
    throw new Error( 'Not implemented' )
    return this
  },

  fromJSON: function( json ) {
    throw new Error( 'Not implemented' )
  },

  toJSON: function() {
    throw new Error( 'Not implemented' )
  },

  toString: function( version ) {
    throw new Error( 'Not implemented' )
  },

}

// Exports
module.exports = ProtocolBufferSchema
