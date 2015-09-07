# basic-model [![Build Status](https://travis-ci.org/maggialejandro/basic-model.svg?branch=master)](https://travis-ci.org/maggialejandro/basic-model)

> Basic model written using Babel.


## Install

```
$ npm install basic-model --save
```

### Usage

```js
import Model from "basic-model";

class Person extend Model {
  constructor(attributes){
    super(attributes);
  }

  sayMyName(){
    console.log(`Hello, my name is ${this.get('name')}`);
  }
}

```

## How to run locally installed gulp

```
$ node_modules/gulp/bin/gulp.js
```

## License

MIT license; see [LICENSE](./LICENSE).

(c) 2015 by Alejandro Maggi
