'use strict'

if (typeof Promise === 'undefined') {
  window.Promise = require('promise-polyfill').default
}

if (typeof window !== 'undefined') {
  require('unfetch/polyfill')
}

Object.assign = require('object-assign')

require('core-js/features/symbol')
require('core-js/features/array/from')
require('core-js/features/map')
require('core-js/features/set')
require('core-js/features/url-search-params')
require('raf').polyfill(window)
