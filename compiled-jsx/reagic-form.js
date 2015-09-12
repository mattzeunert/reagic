var React = require("react");
var SchemaGenerator = require("./schema-generator.js");
var Reagic = require("./reagic.js");

var reactComponent = React.createClass({displayName: "reactComponent",
    render: function(){
        var data = this.props.data;
        var schema = SchemaGenerator.generateSchema(data);
        var fields = [];
        for (var key in schema){
            var value = schema[key];
            var editor = Reagic.getEditorByName(value.editor).reactComponent;
            fields.push(React.createElement(editor, {data: data[key], schema: value}));
        }

        return React.createElement("div", null, 
            fields
        )

    }
})

module.exports = reactComponent;
