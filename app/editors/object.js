var React = require("react");
var ReagicEditor = require("./reagic-editor.js");

class ObjectEditor extends ReagicEditor {
    static automaticallyUseForData(data){
        return typeof data === "object";
    }
    renderEditor(){
        var Reagic = require("../reagic.js");

        var self = this;
        var data = this.props.data;
        var schema = this.props.schema;

        var fields = [];
        for (var key in schema.properties){
            (function(key){
                var value = schema.properties[key];
                var editor = Reagic.getEditorByName(value.editor);
                fields.push(React.createElement(editor, {
                    data: data[key],
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
    readData(){
        return  this.props.data;
    }
}

ObjectEditor.dataType = "object";


module.exports = ObjectEditor;
