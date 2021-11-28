[![npm][npm]][npm-url]
[![node][node]][node-url]
[![size][size]][size-url]

# call-later

> Defer a task to execute it asynchronously.


## Install


### Local

npm:

```sh
$ npm install --save call-later
```

yarn:

```sh
$ yarn add call-later
```

### Global

npm:

```sh
$ npm install -g call-later
```

yarn:

```sh
$ yarn add global call-later
```


### Browser

```html
<script src="call-later.js"></script>
```

## Support
> Support all major browsers and nodejs.

## Usage

#### Using commonjs

```js
const callLater = require('call-later');

callLater(() => {
    // ...
});
```

#### Using es6 or typescript

```js
import callLater from 'call-later';

callLater(() => {
    // ...
});
```

#### Using global

```html
<script>
    callLater(() => {
        // ...
    });
</script>
```

## License

[MIT © Porky Ke](./LICENSE)

[npm]: https://img.shields.io/npm/v/call-later.svg
[npm-url]: https://npmjs.com/package/call-later
[node]: https://img.shields.io/node/v/call-later.svg
[node-url]: https://nodejs.org
[size]: https://packagephobia.now.sh/badge?p=call-later
[size-url]: https://packagephobia.now.sh/result?p=call-later
