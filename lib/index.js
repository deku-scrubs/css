/**
 * Modules
 */

var is = require('@weo-edu/is')

/**
 * Libs
 */

var hyphenate = require('./hyphenate')
var stringifyValue = require('./stringifyValue')


/**
 * Expose style
 */

module.exports = style

/**
 * Stringify `styl` object
 *
 * @param {Object} styl
 * @return {String} 
 */

function style (styl) {
  return Object.keys(styl).map(function(styleKey) {
    var styleVal = styl[styleKey]
    if (!is.null(styleVal)) {
      return hyphenate(styleKey) + ':' + stringifyValue(styleKey, styleVal)
    } else {
      return null
    }
  }).filter(Boolean).join(';') || null
}
