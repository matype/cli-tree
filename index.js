
module.exports = function (obj) {
  if (obj.objName) console.log('[' + obj.objName + ']')

  var chars = {
    'hr': '├───',
    'node': '├',
    'last-node': '└'
  }

  var objDepth = depthOf(obj)

  function walk (obj) {
    for (var prop in obj) {
      if (prop === 'objName') continue;
      for (var i = 0; i <= objDepth; i++) {
        if (depthOf(obj) === objDepth - i) {
          console.log(Array(i+1).join('  ') + chars['hr'] + ' ' + prop)
        }
      }

      if (isObject(obj[prop])) walk(obj[prop])
    }
  }

  walk(obj)
};

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
