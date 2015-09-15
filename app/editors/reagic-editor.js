import React from "react";

class ReagicEditor extends React.Component {
    render (){
        var valueIsValid = this.checkValueIsValid(this.props.data);
        var validationMessage = valueIsValid ? "&#10004;" : "Fix this";
        var validationMessageClass = "reagic-generic__validity-indicator ";
        if (valueIsValid) {
            validationMessageClass += "reagic-generic__validity-indicator--valid";
        } else {
            validationMessageClass += "reagic-generic__validity-indicator--invalid";
        }

        return <div className="reagic-generic">
            <label>
                {this.props.schema.title}
                <span className={validationMessageClass} dangerouslySetInnerHTML={{__html: validationMessage}}></span>
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
