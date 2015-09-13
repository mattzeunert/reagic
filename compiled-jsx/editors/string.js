var React = require("react");

var reactComponent = React.createClass({displayName: "reactComponent",
    render: function(){
        return React.createElement("div", {className: "reagic-string"}, 
            React.createElement("label", null, this.props.schema.title), 
            React.createElement("input", {
                type: "text", 
                value: this.props.data, 
                onChange: this.onChange, 
                ref: "input"})
        )
    },
    onChange: function(){
        var onChangeHandler = this.props.onChange;
        var newData = React.findDOMNode(this.refs.input).value;
        onChangeHandler(newData);
    }
})

module.exports = {
    name: "string",
    shouldBeUsedForData: function(data){
        return typeof data === "string";
    },
    reactComponent: reactComponent
}
