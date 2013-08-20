# Meteor Glob

Meteor wrapped library [node-glob](https://github.com/isaacs/node-glob) into a synchronous API, using Futures.

## Installation

You need at least version 0.6.5 of Meteor.

Meteor Glob can be installed with [Meteorite](https://github.com/oortcloud/meteorite/). From inside a Meteorite-managed app:

``` sh
$ mrt add glob
```

## API

### Glob(pattern, [options], cb)

* `pattern` {String} Pattern to be matched
* `options` {Object}
