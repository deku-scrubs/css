/**
 * Modules
 */

var autoprefix = require('@weo-edu/autoprefix')

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

// add vendor prefixes
autoprefix(unitless)

/**
 * Expose isUnitless
 */

module.exports = isUnitless

/**
 * Check if style has units
 *
 * @param {String} prop
 * @return {Boolean}
 */

function isUnitless (prop) {
  return unitless[prop]
}
