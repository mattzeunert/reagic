
import React from "react";
var SchemaGenerator = require("./schema-generator.js");
var Reagic = require("./reagic.js");

class ReagicForm extends React.Component {
    componentWillMount() {
        // Schema has to be in state, as data can become invalid
        var schema = SchemaGenerator.generateSchema(this.props.data);
        console.log("Data", this.props.data)
        console.log("Schema", schema);
        this.setState({schema})
    }
    render(){
        var self = this;
        var data = this.props.data;
        var schema = this.state.schema;

        var fields = [];
        for (var key in schema){
            (function(key){
                var value = schema[key];
                var editor = Reagic.getEditorByName(value.editor);
                fields.push(React.createElement(editor, {
                    data: data[key],
                    key: key,
                    schema: value,
                    onChange: function(newDataValue){
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

module.exports = ReagicForm;
