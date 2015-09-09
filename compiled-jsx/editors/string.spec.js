var React = require("react");
var StringEditor = require("./string.js").reactComponent;
var React = require('react/addons');

describe("String Editor", function(){
    it("Renders something", function(){
        var data = "hi";
        var schema = {
            title: "Greeting"
        };

        var domNode = React.addons.TestUtils.renderIntoDocument(
            React.createElement(StringEditor, {data: data, schema: schema})
        ).getDOMNode();
        expect(domNode.outerHTML).toBe("whatever");

    });
});
