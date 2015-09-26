import React from "react";
var SchemaGenerator = require("./schema-generator.js");
var ObjectEditor = require("./editors/object.js");

class reactComponent extends React.Component {
    componentWillMount() {
        // Schema has to be in state, as data can become invalid
        var schema = SchemaGenerator.generateSchema(this.props.data);
        console.log("")
        this.setState({schema})
    }
    render(){
        var schema = {
            type: "object",
            properties: this.state.schema
        }
        debugger;
        return <ObjectEditor data={this.props.data} schema={schema} onChange={this.onChange.bind(this)} />
    }
    onChange(newData){
        // Ever so slightly inefficient deep copy
        newData = JSON.parse(JSON.stringify(newData));
        this.props.onChange(newData);
    }
}

module.exports = reactComponent;
