var React = require("react");
var ReagicEditor = require("./reagic-editor.js");

class ObjectEditor extends ReagicEditor {
    static automaticallyUseForData(data){
        return typeof data === "object";
    }
    renderEditor(){
        return <div>object editor...</div>
    }
    readData(){
        return  this.props.data;
    }
}

ObjectEditor.dataType = "object";


module.exports = ObjectEditor;
