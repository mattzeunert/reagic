import React from "react";
import debounce from "debounce";

class ReagicEditor extends React.Component {
    constructor(){
        super()
        this.state = {
            userIsEditing: false
        }
        var _this = this;
        this.resetUserIsEditing = debounce(function(){
            _this.setState({userIsEditing: false});
            _this.updateValidationResult();
        }, 300);
    }
    componentWillMount(){
        this.updateValidationResult();
    }
    render (){
        var validationResult = this.state.validationResult;
        var validationMessage = validationResult.isValid ? "&#10004;" : "Fix this";

        var validationMessageClass = "reagic-generic__validity-indicator ";
        if (validationResult.isValid) {
            validationMessageClass += "reagic-generic__validity-indicator--valid";
        } else {
            validationMessageClass += "reagic-generic__validity-indicator--invalid";
        }

        var errorMessageElements = null;
        if (!validationResult.isValid && validationResult.errorMessage) {
            errorMessageElements = <div className="reagic-generic__validation-error">
                <div className="reagic-generic__validation-error-icon">!</div>
                <div className="reagic-generic__validation-error-content">{validationResult.errorMessage}</div>
            </div>
        }

        var className = "reagic-generic ";
        if (this.state.userIsEditing) {
            className += " reagic-generic--user-is-editing";
        }

        return <div className={className}>
            <label>
                {this.state.userIsEditing ? "yes" : "no"}
                {this.props.schema.title}
                <span className={validationMessageClass} dangerouslySetInnerHTML={{__html: validationMessage}}></span>
            </label>
            {this.renderEditor()}
            {errorMessageElements}
        </div>
    }
    updateValidationResult(){
        var data = this.props.data;
        this.setState({
            validationResult: this.validateValue(data)
        });
    }
    checkValueIsValid (value){
        var validationResult = this.validateValue(value);
        return validationResult.isValid;
    }
    validateValue (value){
        var validators = this.props.schema.validators;
        if (validators === undefined){
            validators = [];
        }

        for (var i=0; i<validators.length; i++){
            var validatorFunction = validators[i];
            var validationResponse = validatorFunction(value);
            if (!validationResponse.isValid) {
                return {
                    isValid: false,
                    errorMessage: validationResponse.errorMessage
                }
            }
        }
        return {isValid: true};
    }
    onChange(){
        var onChangeHandler = this.props.onChange;
        var newData = this.readData();

        this.setState({userIsEditing: true});
        this.resetUserIsEditing();
        onChangeHandler(newData, {isValid: this.checkValueIsValid(newData)});
    }
}

export default ReagicEditor;
