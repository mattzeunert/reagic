var React = require("react");
var renderToDOMNode = require("../render-to-dom-node.js");
var ReagicEditor = require("./reagic-editor.js");

class EditorExample extends ReagicEditor {
    renderEditor(){
        return <input onChange={() => this.onChange()} ref="input"></input>
    }
    readData(value){
        var newData = React.findDOMNode(this.refs.input).value;
        return newData;
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

        this.renderDomNodeWithData = function(data){
            return renderToDOMNode(
                <EditorExample data={data} schema={schema} onChange={function(){
                    onChange.apply(this, arguments);
                }}/>
            );
        }

        domNode = this.renderDomNodeWithData(data);
    });

    it("Renders the label with the field title", function(){
        expect(domNode.querySelector("label").innerHTML).toContain(schema.title);
    });

    it("Correctly shows that a field without any validators is valid", function(){
        expect(domNode.querySelector("label").innerHTML).toContain("Looks good");
    });

    it("Shows 'Fix this' in indicator if a value isn't valid", function(){
        domNode = this.renderDomNodeWithData("");
        expect(domNode.querySelector("label").innerHTML).toContain("Fix this");
    });
})