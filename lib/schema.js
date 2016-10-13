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
