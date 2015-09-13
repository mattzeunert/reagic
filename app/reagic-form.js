import React from "react";
var SchemaGenerator = require("./schema-generator.js");
var Reagic = require("./reagic.js");

class reactComponent extends React.Component {
    componentWillMount() {
        // Schema has to be in state, as data can become invalid
        this.setState({
            schema: SchemaGenerator.generateSchema(this.props.data)
        })
    }
    render(){
        var self = this;
        var data = this.props.data;
        var schema = this.state.schema;

        var fields = [];
        for (var key in schema){
            (function(key){
                var value = schema[key];
                var editor = Reagic.getEditorByName(value.editor).reactComponent;
                fields.push(React.createElement(editor, {
                    data: data[key],
                    schema: value,
                    onChange: function(newDataValue){
                        console.log("change", arguments)
                        data[key] = newDataValue;
                        self.onChange(data);
                    }
                }));
            })(key);
        }

        return <div>
            {fields}
        </div>
    }
    onChange(newData){
        // Ever so slightly inefficient deep copy
        newData = JSON.parse(JSON.stringify(newData));
        this.props.onChange(newData);
    }
}

module.exports = reactComponent;
