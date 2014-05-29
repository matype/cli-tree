
var inspector = require('obj-inspector')

module.exports = function (obj) {

  // console.log(allNodeList(obj))
  inspect(obj)
  console.log(depthOf(obj))

  // return lastNodeList(obj)
};

var chars = {
  'hr': '├──',
  'node': '├',
  'last-node': '└'
}

function inspect (obj) {
  var ret = []

  inspector(obj)
  var depth = 0;
  function walk (obj) {
    for (var prop in obj) {
      if (!isObject(obj[prop])) {
        console.log(chars['hr']+prop)
      }
      else console.log('  '+ chars['node'] + prop)
      // if (isObject(prop)) console.log(prop)
      ret.push(prop)
      if (isObject(obj[prop])) walk(obj[prop])
    }
    return ret
  }

  return walk(obj)
}

function depthOf (object) {
  var level = 1;
  var key;
  for(key in object) {
    if (!object.hasOwnProperty(key)) continue;

    if(typeof object[key] == 'object'){
      var depth = depthOf(object[key]) + 1;
      level = Math.max(depth, level);
    }
  }
  return level;
}

function lastNodeList (obj) {
  var nodes = []

  function node (obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (isObject(obj[prop])) node(obj[prop])
          else nodes.push(prop)
      }
    }
    return nodes
  }

  return node(obj)
}

function allNodeList (obj) {
  var ret = []

  function walk (obj) {
    for (var prop in obj) {
      ret.push(prop)
      if (isObject(obj[prop])) walk(obj[prop])
    }
    return ret
  }

  return walk(obj)
}

function isObject (val) {
  if (typeof val === 'object' && Array.isArray(val) === false) return true
  return false
}
