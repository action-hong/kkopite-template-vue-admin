const viewGenerator = require('./plop-templates/view/prompt')
const componentGenerator = require('./plop-templates/component/prompt')
const storeGenerator = require('./plop-templates/store/prompt.js')
const tableGenerator = require('./plop-templates/table/prompt.js')
const tableDetailGenerator = require('./plop-templates/table-and-detail/prompt.js')

module.exports = function(plop) {
  plop.setGenerator('table(split detail)', tableDetailGenerator)
  plop.setGenerator('table', tableGenerator)
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('store', storeGenerator)
}
