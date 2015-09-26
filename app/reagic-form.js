import React from "react";
var SchemaGenerator = require("./schema-generator.js");
var ObjectEditor = require("./editors/object.js");

class reactComponent extends React.Component {
    componentWillMount() {
        // Schema has to be in state, as data can become invalid
        var schema = SchemaGenerator.generateSchema(this.props.data);
        this.setState({schema})
    }
    render(){
        return <ObjectEditor data={this.props.data} schema={this.state.schema} onChange={this.onChange.bind(this)} />
    }
    onChange(newData){
        // Ever so slightly inefficient deep copy
        newData = JSON.parse(JSON.stringify(newData));
        this.props.onChange(newData);
    }
}

module.exports = reactComponent;
