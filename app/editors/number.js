var React = require("react");

var reactComponent = React.createClass({
    render: function(){
        return <div className="reagic-generic">
            <label>{this.props.schema.title}</label>
            <input
                type="text"
                value={this.props.data}
                onChange={this.onChange}
                ref="input"></input>
        </div>
    },
    onChange: function(){
        var onChangeHandler = this.props.onChange;
        var newData = React.findDOMNode(this.refs.input).value;
        onChangeHandler(this.parseValue(newData));
    },
    parseValue: function(newData){
      return newData === "" ? null : parseFloat(newData);
    }
})

module.exports = {
    name: "number",
    shouldBeUsedForData: function(data){
        return typeof data === "number";
    },
    reactComponent: reactComponent
}
