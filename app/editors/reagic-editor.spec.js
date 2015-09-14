var React = require("react");
var renderToDOMNode = require("../render-to-dom-node.js");
var ReagicEditor = require("./reagic-editor.js");

class EditorExample extends ReagicEditor {
    renderEditor(){
        return <input></input>
    }
}

describe("ReagicEditor", function(){
    var data,
        domNode,
        onChange,
        schema;

    beforeEach(function(){
        data = "hi";
        schema = {
            title: "Greeting",
            validators: [
                function(value){
                    return value !== "";
                }
            ]
        };

        domNode = renderToDOMNode(
            <EditorExample data={data} schema={schema} onChange={function(){
                onChange.apply(this, arguments);
            }}/>
        );
    });

    it("Renders the label with the field title", function(){
        expect(domNode.querySelector("label").innerHTML).toContain(schema.title);
    });

    it("Correctly shows that a field without any validators is valid", function(){
        expect(domNode.querySelector("label").innerHTML).toContain("Looks good");
    });

    it("Shows 'Fix this' if a value isn't valid", function(){
        onChange = function(newData, info){
            expect(domNode.querySelector("label").innerHTML).toContain("Fix this");
            done();
        }

        var input = domNode.querySelector("input");
        input.value = "";
        React.addons.TestUtils.Simulate.change(input);
    });
})
