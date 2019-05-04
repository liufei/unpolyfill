# unpolyfill

> `react-app-polyfill` replacement with IE9+ support.

## Why

`react-app-polyfill` doesn't support IE9. The fetch polyfill it used is `whatwg-fetch` which is IE10+ only.

## Usage

### Import as ES6 module

Install `unpolyfill` as a dependency.

```sh
npm install --save unpolyfill
```

Import `unpolyfill` at the entry of application.

```js
import 'unpolyfill'
```

### Import via script

Put this line before bundle.

```html
<script src="https://unpkg.com/unpolyfill"></script>
```

## Features

### Official

_Partially adapted from react-app-polyfill [readme](https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill#supporting-internet-explorer)_

1. `Promise` (for `async` / `await` support)
1. `window.fetch` (a Promise-based way to make web requests in the browser)
1. `Object.assign` (a helper required for Object Spread, i.e. `{ ...a, ...b }`)
1. `Symbol` (a built-in object used by `for...of` syntax and friends)
1. `Array.from` (a built-in static method used by array spread, i.e. `[...arr]`)
1. `Map`
1. `Set`
1. `requestAnimationFrame`

### Bonus

1. `URLSearchParams`

## Dependencies

- [promise-polyfill](https://www.npmjs.com/package/promise-polyfill) for `Promise`
- [unfetch](https://www.npmjs.com/package/unfetch) for `window.fetch`
- [object-assign](https://www.npmjs.com/package/object-assign) for `Object.assign`
- [core-js](https://www.npmjs.com/package/core-js) for `Symbol` `Array.from` `Map` `Set` `URLSearchParams`
- [raf](https://www.npmjs.com/package/raf) for `requestAnimationFrame`
