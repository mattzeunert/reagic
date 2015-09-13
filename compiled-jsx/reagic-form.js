var React = require("react");
var SchemaGenerator = require("./schema-generator.js");
var Reagic = require("./reagic.js");

var reactComponent = React.createClass({displayName: "reactComponent",
    render: function(){
        var self = this;
        var data = this.props.data;
        var schema = SchemaGenerator.generateSchema(data);
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

        return React.createElement("div", null, 
            fields
        )
    },
    onChange: function(newData){
        this.props.onChange(newData);
    }
})

module.exports = reactComponent;
