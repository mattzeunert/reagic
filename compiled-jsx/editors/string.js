var React = require("react");

var reactComponent = React.createClass({displayName: "reactComponent",
    render: function(){
        return React.createElement("div", null, "aaa")
    }
})

module.exports = {
    name: "string",
    shouldBeUsedForData: function(data){
        return typeof data === "string";
    },
    reactComponent: reactComponent
}
