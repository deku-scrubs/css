
/**
 * Modules
 */

var autoprefix = require('@weo-edu/autoprefix')
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
};

autoprefix(unitless)

/**
 * Expose
 */

module.exports = stringifyValue


/**
 * Stringify `styleVal` based on `styleKey`
 * @param  {String} styleKey
 * @param  {Any} styleVal
 * @return {String}
 */
function stringifyValue (styleKey, styleVal) {
  if (is.null(styleVal) || is.boolean(styleVal) || styleVal === '') {
    return ''
  }

  if (is.nan(styleVal) || styleVal === 0 || isUnitless(styleVal) {
    return '' + styleVal
  }

  if (is.string(styleVal)) {
    styleVal = styleVal.trim()
  }

  return styleVal + 'px'
}



function isUnitless(styleKey) {
  return unitless[styleKey]
}