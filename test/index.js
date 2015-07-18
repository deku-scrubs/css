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

  it('should work with arrays', function() {
    var styl = [
      {
        width: '10px',
        color: 'white'
      },
      {
        color: 'red'
      }
    ]

    assert.equal(style(styl), 'width:10px;color:red;')
  })
})
