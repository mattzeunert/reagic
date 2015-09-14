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
    onChange(){
        var onChangeHandler = this.props.onChange;
        var newData = React.findDOMNode(this.refs.input).value;
        onChangeHandler(newData, {isValid: this.checkValueIsValid(newData)});
    }
}

module.exports = {
    name: "string",
    shouldBeUsedForData: function(data){
        return typeof data === "string";
    },
    reactComponent: reactComponent
}
