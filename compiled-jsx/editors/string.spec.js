var React = require("react");
var StringEditor = require("./string.js").reactComponent;
var React = require('react/addons');

describe("String Editor", function(){
    it("Renders something", function(){
        React.addons.TestUtils.renderIntoDocument(React.createElement(StringEditor, null));
    });
});
