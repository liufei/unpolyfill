# unpolyfill

> Bare minimum react app polyfill in 9.6 KB

## Usage

### CDN Links

```html
<script crossorigin src="https://unpkg.com/unpolyfill"></script>
```

### Toolchains

1. install as a dependency
    ```sh
    yarn add unpolyfill
    ```

2. import at the entry of application
    ```js
    import 'unpolyfill'
    ```

## Features

1. `Promise` (represents the eventual completion or failure of an asynchronous operation, and its resulting value)
1. `window.fetch` (provides an interface for fetching resources)
1. `Map` (holds key-value pairs and remembers the original insertion order of the keys)
1. `Set` (lets you store unique values of any type, whether primitive values or object references)
1. `window.requestAnimationFrame` (tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint)

## Polyfill

- [promise-polyfill](https://www.npmjs.com/package/promise-polyfill) for `Promise`
- [unfetch](https://www.npmjs.com/package/unfetch) for `window.fetch`
- [core-js](https://www.npmjs.com/package/core-js) for `Map` and `Set`
- [raf](https://www.npmjs.com/package/raf) for `window.requestAnimationFrame`
