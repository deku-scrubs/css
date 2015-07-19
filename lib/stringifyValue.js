
/**
 * Modules
 */

var autoprefix = require('@deku-scrubs/autoprefix')
var is = require('@weo-edu/is')

/**
 * Vars
 */

var unitless = {
  boxFlex: true,
  boxFlexGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
}

autoprefix(unitless)

/**
 * Expose
 */

module.exports = stringifyValue

/**
 * Stringify `val` based on `prop`
 * @param  {String} prop
 * @param  {Any} val
 * @return {String}
 */
function stringifyValue (prop, val) {
  if (is.null(val) || is.boolean(val) || val === '') {
    return ''
  }

  if (isNaN(val) || val === 0 || isUnitless(prop)) {
    return '' + val
  }

  if (is.string(val)) {
    val = val.trim()
  }

  return val + 'px'
}

function isUnitless (prop) {
  return unitless[prop]
}
