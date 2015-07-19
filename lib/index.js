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

  var str = Object.keys(styl)
    .map(function (prop) {
      return stringifyStatement(prop, styl[prop])
    })
    .filter(Boolean)
    .join('')

  return str || null
}

/**
* Stringify a `prop` and `val` into a single statement
*
* @param   {String} prop
 * @param  {String|Number} val
 * @return {String}
 */
function stringifyStatement (prop, val) {
  if (!is.null(val)) {
    return hyphenate(prop) + ':' + stringifyValue(prop, val) + ';'
  }
}
