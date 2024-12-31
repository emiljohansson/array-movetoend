# array-movetoend [![Build Status](https://travis-ci.org/emiljohansson/array-movetoend.svg?branch=master)](https://travis-ci.org/emiljohansson/array-movetoend)

> Moves an item the `array` at `index` to the end of the `array`.

## Install

```
$ npm install --save array-movetoend
```

## Usage

```js
var moveToEnd = require('array-movetoend');
moveToEnd([1, 2, 3, 4], 1)
// => [1, 3, 4, 2]
```

## API

### moveToEnd(array, index)

Returns the modified array.

#### array

Type: `array`

The array to modify.

#### index

Type: `index`

Position where the item is.

## License

MIT © Emil Johansson
