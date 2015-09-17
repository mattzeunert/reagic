var React = require("react");
var NumberEditor = require("./number.js");
var renderToDOMNode = require("../render-to-dom-node.js");
var isNumeric = require("../validators/is-numeric.js");

describe("Number Editor", function(){
    var data,
        domNode,
        onChange,
        schema;

    beforeEach(function(){
        data = 58;
        schema = {
            title: "Age",
            validators: [isNumeric()]
        };

        domNode = renderToDOMNode(
            <NumberEditor data={data} schema={schema} onChange={function(){
                onChange.apply(this, arguments);
            }}/>
        );
    });

    it("Renders label and input field", function(){
        expect(domNode.querySelector("input").value).toBe(data.toString());
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
            expect(info.isValid).toBe(false);
            done();
        }

        var input = domNode.querySelector("input");
        input.value = "";
        React.addons.TestUtils.Simulate.change(input);
    });

    it("Reports a number ending on a decimal point as a string", function(done){
        onChange = function(data, info){
            expect(data).toBe("44.");
            expect(info.isValid).toBe(false);
            done();
        }

        var input = domNode.querySelector("input");
        input.value = "44.";
        React.addons.TestUtils.Simulate.change(input);
    });
});
