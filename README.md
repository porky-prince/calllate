[![npm][npm]][npm-url]
[![node][node]][node-url]
[![size][size]][size-url]

# calllate

> Defer a task to execute it asynchronously.


## Install


### Local

npm:

```sh
$ npm install --save calllate
```

yarn:

```sh
$ yarn add calllate
```

### Global

npm:

```sh
$ npm install -g calllate
```

yarn:

```sh
$ yarn add global calllate
```


### Browser

```html
<script src="calllate.js"></script>
```

## Support
> Support all major browsers and nodejs.

## Usage

#### Using commonjs

```js
const callLate = require('calllate');

callLate(() => {
    // ...
});
```

#### Using es6 or typescript

```js
import callLate from 'calllate';

callLate(() => {
    // ...
});
```

#### Using global

```html
<script>
    callLate(() => {
        // ...
    });
</script>
```

## License

[MIT © Porky Ke](./LICENSE)

[npm]: https://img.shields.io/npm/v/calllate.svg
[npm-url]: https://npmjs.com/package/calllate
[node]: https://img.shields.io/node/v/calllate.svg
[node-url]: https://nodejs.org
[size]: https://packagephobia.now.sh/badge?p=calllate
[size-url]: https://packagephobia.now.sh/result?p=calllate
