## `pitch`

In music.kit a pitch it's a note, an interval or a pitch class. It allows us
to work with this elements in an uniform way.

All the function in this module are valid for notes, or intervals



### Examples

```js
var pitch = require('music.pitch')
pitch.height('C2') // => 24
pitch.height('5P') // => 7
```



## `pitch.coord`

Convert a note or interval string to a [pitch in coord notation]()

### Parameters

* `pitch` **`String`** the note or interval to parse


### Examples

```js
pitch.coord('C2') // => [0, 2, null]
pitch.coord('5P') // => [1, 0]
```

Returns `Array` the pitch in array notation


## `pitch.height`



### Parameters

* `pitch` **`String or Array`** the pitch to get the height from



Returns `Integer` the height of -1 if not valid note


## `pitch.operation`

Decorate a function to work with pitches in coord notation






## `pitch.pitch`

Get a pitch from a string

### Parameters

* `source` **`String`** the string


### Examples

```js
var pitch = require('music.pitch')
pitch('c2') // => 'C2'
pitch('2') // => '2M'
pitch('blah') // => null
```

Returns `String` the pitch or null if not a valid pitch


## `pitch.simplify`

Simplifies a pitch. If its a note, it returns its pitch class. If its an
interval it returns the simplified interval

### Parameters

* `pitch` **`String or Array`** the pitch


### Examples

```js
var simplify = require('music.kit/pitch.simplify')
simplify('C#4') // => 'C#'
simplify('9m') // => '2m'
```

Returns  the simplified pitch


## `pitch.str`

Convert a pitch in coordinate notation to string. It deals with notes, pitch
classes and intervals.

### Parameters

* `pitch` **`Array`** the pitch in array notation


### Examples

```js
var pitch = require('music.pitch')
// pitch class
pitch.str([0]) // => 'C'
// interval
pitch.str([0, 0]) // => '1P'
// note
pitch.str([0, 2, 4]) // => 'C2/4'
```
```js
// require the funistron only
var str = require('music.pitch/str')
```

Returns `String` the pitch string


