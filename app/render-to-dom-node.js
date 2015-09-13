var React = require('react/addons');
module.exports = function(jsx){
  return React.findDOMNode(React.addons.TestUtils.renderIntoDocument(jsx));
}
