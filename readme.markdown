# cli-tree

Object tree viewer for the CLI

## Installation

```shell
$ npm install cli-tree
```

## Example

```javascript
var tree = require('cli-tree');

var objct = {
  propA: "aaaaaaa",
  propB: "bbbbbbb",
  propC: {
    propE: "eeeeee",
    propF: {
      propG: {
        propI: "iiiiii"
      },
      propH: "hhhhhh"
    }
  },
  propD: "dddddd",
  objName: "testObject"
}

tree(object);
/*
  [testObject]
  ├─── propA
  ├─── propB
  ├─── propC
    ├─── propE
      ├─── propF
      ├─── propG
        ├─── propI
      ├─── propH
  ├─── propD
*/
```

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
