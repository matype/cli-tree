
var tree = require('./index')

var obj = {
  a: "beep",
  b: "boop",
  c: {
    e: "piyo",
    f: {
      g: {
        i: "foo"
      },
      h: "bar"
    }
  },
  d: "hoge",
  objName: "testObject"
}

tree(obj)
