var React = require("react");

var reactComponent = React.createClass({
    render: function(){
        return <div>aaa</div>
    }
})

module.exports = {
    name: "string",
    shouldBeUsedForData: function(data){
        return typeof data === "string";
    },
    reactComponent: reactComponent
}
