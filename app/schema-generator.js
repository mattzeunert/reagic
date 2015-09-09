var Reagic = require("./reagic.js");

module.exports =  {
    generateSchema: function(data){
        var schema = {};
        for (var key in data) {
            var value = data[key];
            var editor = Reagic.findEditorForData(value);
            schema[key] = {
                editor: editor.name
            }
        }

        return schema;
    }
}


// todo: write test for findeditorfordata
