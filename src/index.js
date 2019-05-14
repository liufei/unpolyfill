import Promise from 'promise-polyfill'
import setAsap from 'setasap'
import Finally from 'promise-polyfill/src/finally'
import fetch from 'unfetch'
import objectAssign from 'object-assign'
import 'core-js/features/symbol'
import 'core-js/features/array/from'
import 'core-js/features/map'
import 'core-js/features/set'
import 'core-js/features/url-search-params'
import raf from 'raf'

if (typeof window.Promise === 'undefined') {
  Promise._immediateFn = setAsap
  Promise._unhandledRejectionFn = function(error) {
    throw error
  }
  window.Promise = Promise
}

if (typeof window.Promise.prototype['finally'] === 'undefined') {
  window.Promise.prototype['finally'] = Finally
}

if (typeof window.fetch === 'undefined') {
  window.fetch = fetch
}

Object.assign = objectAssign

if (typeof window !== 'undefined') {
  raf.polyfill(window)
}
