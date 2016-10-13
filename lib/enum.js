/**
 * Enum
 * @constructor
 * @return {Enum}
 */
function Enum() {

  if( !(this instanceof Enum) )
    return new Enum()

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

  toString: function() {
    throw new Error( 'Not implemented' )
  },

}

// Exports
module.exports = Enum
