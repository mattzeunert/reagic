import React from "react";
var isNumeric  = require("../validators/is-numeric.js");
var ReagicEditor = require("./reagic-editor.js");

class reactComponent extends ReagicEditor {
    render(){
        var validationMessage = this.checkValueIsValid(this.props.data) ? "Valid" : "Invalid";

        return <div className="reagic-generic">
            <label>{this.props.schema.title}</label>
            {validationMessage}
            <input
                type="text"
                value={this.props.data}
                onChange={() => this.onChange()}
                ref="input"></input>
        </div>
    }
    onChange(){
        var onChangeHandler = this.props.onChange;
        var newData = React.findDOMNode(this.refs.input).value;
        if (isNumeric()(newData)) {
            newData = parseFloat(newData);
        }
        onChangeHandler(newData, {
            isValid: this.checkValueIsValid(newData)
        });
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
