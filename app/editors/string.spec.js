var React = require("react");
var StringEditor = require("./string.js").reactComponent;
var React = require('react/addons');

describe("String Editor", function(){
    it("Renders something", function(){
        var data = {
            greeting: "hi"
        };
        var schema = {
            greeting: {
                title: "Greeting"
            }
        }

        var domNode = React.addons.TestUtils.renderIntoDocument(<StringEditor />).getDOMNode();
        expect(domNode.outerHTML).toBe("whatever");

    });
});
