/**
 * Field
 * @constructor
 * @return {Field}
 */
function Field() {

  if( !(this instanceof Field) )
    return new Field()

  /** @type {String} Field name */
  this.name = ''
  /** @type {String} Type name */
  this.type = ''
  /** @type {Number} Tag ID */
  this.tag = 0
  /** @type {Boolean} Whether the field is non-optional */
  this.required = false
  /** @type {Boolean} Whether the field is repeated */
  this.repeated = false
  /** @type {Object} Field options */
  this.options = {}

}

/**
 * Field prototype
 * @type {Object}
 * @ignore
 */
Field.prototype = {

  constructor: Field,

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
module.exports = Field
