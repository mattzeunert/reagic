var React = require("react");
var StringEditor = require("./string.js");
var renderToDOMNode = require("../render-to-dom-node.js");

describe("String Editor", function(){
    var data,
        domNode,
        onChange,
        schema;

    beforeEach(function(){
        data = "hi";
        schema = {
            title: "Greeting"
        };

        domNode = renderToDOMNode(
            <StringEditor data={data} schema={schema} onChange={function(){
                onChange.apply(this, arguments);
            }}/>
        );
    });

    it("Renders label and input field", function(){
        expect(domNode.querySelector("input").value).toBe(data);
    });

    it("Calls onChange with new data when the value is edited", function(done){
        onChange = function(newData, info){
            expect(newData).toBe("New Greeting");
            expect(info.isValid).toBe(true);
            done();
        }

        var input = domNode.querySelector("input");
        input.value = "New Greeting";
        React.addons.TestUtils.Simulate.change(input);
    });
});
