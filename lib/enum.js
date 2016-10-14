/**
 * Enum
 * @constructor
 * @return {Enum}
 */
function Enum() {

  if( !(this instanceof Enum) )
    return new Enum()

  /** @type {String} Enum name */
  this.name = ''
  /** @type {Object} Options */
  this.options = {}
  /** @type {Object} Enum value map */
  this.values = {}

}

/**
 * Enum prototype
 * @type {Object}
 * @ignore
 */
Enum.prototype = {

  constructor: Enum,

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
module.exports = Enum
