import React from "react";

class ReagicEditor extends React.Component {
    render (){
        var validationMessage = this.checkValueIsValid(this.props.data) ? "Looks good" : "Fix this";
        console.log("VALIDATION", this.props.data, this.checkValueIsValid(this.props.data), validationMessage)
        return <div className="reagic-generic">
            <label>
                {this.props.schema.title}
                <span className="reagic-generic__validity-indicator">{validationMessage}</span>
            </label>
            {this.renderEditor()}
        </div>
    }
    checkValueIsValid (value){
        var validationResult = this.validateValue(value);
        console.log("validated value", value, "and got", validationResult)
        return validationResult.isValid;
    }
    validateValue (value){
        var validators = this.props.schema.validators;
        if (validators === undefined){
            validators = [];
        }
        console.log(validators);

        for (var i=0; i<validators.length; i++){
            var validatorFunction = validators[i];
            if (!validatorFunction(value)) {
                return {
                    isValid: false
                }
            }
        }
        return {isValid: true};
    }
    onChange(){
        var onChangeHandler = this.props.onChange;
        var newData = this.readData();
        onChangeHandler(newData, {isValid: this.checkValueIsValid(newData)});
    }
}

export default ReagicEditor;
