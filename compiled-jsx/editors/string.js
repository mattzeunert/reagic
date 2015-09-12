var React = require("react");

var reactComponent = React.createClass({displayName: "reactComponent",
    render: function(){
        return React.createElement("div", {className: "reagic-string"}, 
            React.createElement("label", null, this.props.schema.title), 
            React.createElement("input", {type: "text", value: this.props.data})
        )
    }
})

module.exports = {
    name: "string",
    shouldBeUsedForData: function(data){
        return typeof data === "string";
    },
    reactComponent: reactComponent
}
