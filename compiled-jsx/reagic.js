var StringEditor = require("./editors/string.js");

var Reagic = {
    editors: [StringEditor],
    getEditorByName: function(name){
        for (var i=0; i<this.editors.length;i++){
            if (this.editors[i].name===name){
                return this.editors[i];
            }
        }
    },
    findEditorForData: function(data){
        for (var i=0; i<Reagic.editors.length; i++) {
            var editor = Reagic.editors[i];
            if (editor.shouldBeUsedForData(data)) {
                return editor;
            }
        }
    }
};

module.exports = Reagic;
