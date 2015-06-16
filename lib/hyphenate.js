/**
 * Vars
 */

var upperCasePattern = /([A-Z])/g

/**
 * Expose hyphenate
 */

module.exports = hyphenate

/**
 * Hyphenate string
 * @param  {String} camelCaseStr
 * @return {String}
 */

function hyphenate(camelCaseStr) {
  return camelCaseStr.replace(upperCasePattern, '-$1').toLowerCase()
}