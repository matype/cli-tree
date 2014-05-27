
module.exports = function (obj) {
  var chars = {
    'hr': '─',
    'node': '├',
    'last-node': '└'
  }

  console.log(allNodeList(obj))

  return lastNodeList(obj)
};

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
