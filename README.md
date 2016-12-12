[![Build Status](https://travis-ci.org/mightyiam/regalia-reverse.svg?branch=master)](https://travis-ci.org/mightyiam/regalia-reverse) [![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

# regalia-reverse

Reverses [regalia](https://www.npmjs.com/package/regalia) trees back to input format.

## Usage

### Example

```js
const reverse = require('regalia-reverse')

reverse({ foo: Symbol('foo') }) // [ 'foo' ]
```

### API

#### `regaliaReverse(regaliaTree)`

- 'regaliaTree':
  A [regalia](https://www.npmjs.com/package/regalia) tree.

Returns a regalia input tree.
