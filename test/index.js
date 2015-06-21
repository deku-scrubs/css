var style = require('..')
var assert = require('assert')

describe('style', function () {
  it('should return stringified styl', function () {
    var styl = {
      marginLeft: '10px',
      flex: 1
    }

    assert.equal(style(styl), "margin-left:10px;flex:1;")
  })
})
