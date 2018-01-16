# @unction/arrayify


![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> ValueType => [ValueType] | ArrayType

Takes a value and turns it into an array of that value, unless the value is already an array.

``` javascript
arrayify("a")
```

returns

``` javascript
["a"]
```

``` javascript
arrayify(["a"])
```

returns

``` javascript
["a"]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/arrayify.svg?maxAge=2592000&style=flat-square

[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/arrayify.svg?maxAge=2592000&style=flat-square
