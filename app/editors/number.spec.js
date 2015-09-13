var React = require("react");
var NumberEditor = require("./number.js").reactComponent;
var renderToDOMNode = require("../render-to-dom-node.js");

describe("Number Editor", function(){
    var data,
        domNode,
        onChange,
        schema;

    beforeEach(function(){
        data = 58;
        schema = {
            title: "Age"
        };

        domNode = renderToDOMNode(
            <NumberEditor data={data} schema={schema} onChange={function(){
                onChange.apply(this, arguments);
            }}/>
        );
    });

    it("Renders label and input field", function(){
        expect(domNode.querySelector("input").value).toBe(data.toString());
        expect(domNode.querySelector("label").innerHTML).toBe(schema.title);
    });

    it("Calls onChange with new data when the value is edited", function(done){
        onChange = function(data){
            expect(data).toBe(66);
            done();
        }

        var input = domNode.querySelector("input");
        input.value = 66;
        React.addons.TestUtils.Simulate.change(input);
    });

    it("Detects an empty fields as an invalid value", function(done){
        onChange = function(data, info){
            expect(data).toBe("");
            expect(info.isValid).toBe(true);
            done();
        }

        var input = domNode.querySelector("input");
        input.value = "";
        React.addons.TestUtils.Simulate.change(input);
    });
});
