import React from "react";

class ReagicEditor extends React.Component {
    checkValueIsValid (value){
        var validationResult = this.validateValue(value);
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
}

export default ReagicEditor;
