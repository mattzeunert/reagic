var React = require("react");
var ReagicEditor = require("./reagic-editor.js");

class StringEditor extends ReagicEditor {
    static automaticallyUseForData(data){
        return typeof data === "string";
    }
    renderEditor(){
        return <input
                type="text"
                value={this.props.data}
                onChange={() => this.onChange()}
                ref="input"></input>
    }
    readData(){
        var newData = React.findDOMNode(this.refs.input).value;
        return newData;

    }
}

StringEditor.dataType = "string";


module.exports = StringEditor;
