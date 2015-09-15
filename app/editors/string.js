var React = require("react");
var ReagicEditor = require("./reagic-editor.js");

class reactComponent extends ReagicEditor {
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

module.exports = {
    name: "string",
    shouldBeUsedForData: function(data){
        return typeof data === "string";
    },
    reactComponent: reactComponent
}
