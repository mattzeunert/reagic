var React = require("react");
var ReagicEditor = require("./reagic-editor.js");

class reactComponent extends ReagicEditor {
    render(){
        return <div className="reagic-generic">
            <label>{this.props.schema.title}</label>
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
        onChangeHandler(newData);
    }
}

module.exports = {
    name: "string",
    shouldBeUsedForData: function(data){
        return typeof data === "string";
    },
    reactComponent: reactComponent
}
