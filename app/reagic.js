var StringEditor = require("./editors/string.js");
var NumberEditor = require("./editors/number.js");
var ObjectEditor = require("./editors/object.js");

var Reagic = {
    editors: [StringEditor, NumberEditor, ObjectEditor],
    getEditorByName: function(name){
        for (var i=0; i<this.editors.length;i++){
            if (this.editors[i].dataType === name){
                return this.editors[i];
            }
        }
        console.error("Couldn't find editor for type " + name);
    },
    findEditorForData: function(data){
        for (var i=0; i<Reagic.editors.length; i++) {
            var editor = Reagic.editors[i];
            if (editor.automaticallyUseForData(data)) {
                return editor;
            }
        }
    }
};

module.exports = Reagic;
