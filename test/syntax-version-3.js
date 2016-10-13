var assert = require( 'assert' )
var fs = require( 'fs' )
var Schema = require( '..' )

suite( 'Protocol Buffer Schema', function() {

  suite( 'Version 3', function() {

    var schemaFile = null
    var schema = null

    suiteSetup( 'read file', function() {
      schemaFile = fs.readFileSync( __dirname + '/schemata/version-3.proto', 'utf8' )
    })

    test( 'parse', function() {
      schema = Schema.parse( schemaFile )
    })

    test( 'correct syntax version', function() {
      assert.strictEqual( schema.syntax, 3 )
    })

  })

})
