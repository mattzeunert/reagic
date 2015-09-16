import React from "react";
var isNumeric  = require("../validators/is-numeric.js");
var ReagicEditor = require("./reagic-editor.js");

class NumberEditor extends ReagicEditor {
    static automaticallyUseForData(data){
        return typeof data === "number";
    }
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

NumberEditor.dataType = "number";
NumberEditor.defaultValidators = [isNumeric()];

module.exports = NumberEditor;
