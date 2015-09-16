import React from "react";
var isNumeric  = require("../validators/is-numeric.js");
var ReagicEditor = require("./reagic-editor.js");

class reactComponent extends ReagicEditor {
    renderEditor(){
        return  <input
                    type="text"
                    value={this.props.data}
                    onChange={() => this.onChange()}
                    ref="input"></input>
    }
    readData(){
        var newData = React.findDOMNode(this.refs.input).value;
        if (isNumeric()(newData).isValid) {
            newData = parseFloat(newData);
        }
        return newData;
    }
}

module.exports = {
    name: "number",
    defaultValidators: [isNumeric()],
    shouldBeUsedForData: function(data){
        return typeof data === "number";
    },
    reactComponent: reactComponent
}
