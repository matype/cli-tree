
module.exports = function (obj) {
  var chars = {
    'hr': '─',
    'node': '├',
    'last-node': '└'
  }

  return expand(obj)
};

var node = []
var objNode = []

function expand (obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (isObject(obj[prop])) expand(obj[prop])
      else node.push(prop)
    }
  }
  return node
}

function isObject (val) {
  if (typeof val === 'object' && Array.isArray(val) === false) return true
  return false
}
