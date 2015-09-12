var React = require("react");

var reactComponent = React.createClass({
    render: function(){
        return <div className="reagic-string">
            <label>{this.props.schema.title}</label>
            <input type="text" value={this.props.data}></input>
        </div>
    }
})

module.exports = {
    name: "string",
    shouldBeUsedForData: function(data){
        return typeof data === "string";
    },
    reactComponent: reactComponent
}
