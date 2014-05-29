
var tree = require('./index')

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

tree(objct)
