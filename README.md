node-environ
============

> Define, validate and parse your environment variables.

## Get started

```js
const environ = require('environ');
const { isDivisibleBy, isInt } = require('validator');

// Custom validation functions
const isPositiveInt = _ => isInt(_, { min: 0 })
const isDivisibleBy3 = _ => isDivisibleBy(_, 3)

// Coercion functions
const toInt = str => parseInt(str, 10)

exports.SOME_INT = environ("SOME_INT")
  .required()
  .validate(isPositiveInt)
  .validate(isDivisibleBy3)
  .parse(toInt)
```
