[![npm][npm]][npm-url]
[![node][node]][node-url]
[![size][size]][size-url]

# calllater

> Defer a task to execute it asynchronously.


## Install


### Local

npm:

```sh
$ npm install --save calllater
```

yarn:

```sh
$ yarn add calllater
```

### Global

npm:

```sh
$ npm install -g calllater
```

yarn:

```sh
$ yarn add global calllater
```


### Browser

```html
<script src="calllater.js"></script>
```

## Support
> Support all major browsers and nodejs.

## Usage

#### Using commonjs

```js
const callLater = require('calllater');

callLater(() => {
    // ...
});
```

#### Using es6 or typescript

```js
import callLater from 'calllater';

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

[npm]: https://img.shields.io/npm/v/calllater.svg
[npm-url]: https://npmjs.com/package/calllater
[node]: https://img.shields.io/node/v/calllater.svg
[node-url]: https://nodejs.org
[size]: https://packagephobia.now.sh/badge?p=calllater
[size-url]: https://packagephobia.now.sh/result?p=calllater
