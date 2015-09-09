var StringEditor = require("./editors/string.js");

var Reagic = {
    editors: [StringEditor],
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
