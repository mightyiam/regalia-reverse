const traverse = require('traverse')

const regaliaReverse = (regaliaTree) => {
  return traverse(regaliaTree).map(function (node) {
    if (this.isLeaf) return node
    const keys = Object.keys(node)
    if (typeof node[keys[0]] === 'symbol') {
      return keys
    }
  })
}

module.exports = regaliaReverse
