var Reagic = require("./reagic.js");
var generateTitle = require("./generate-title");

module.exports =  {
    generateSchema: function(data){
        var schema = {};
        for (var key in data) {
            var value = data[key];
            var editor = Reagic.findEditorForData(value);
            schema[key] = {
                editor: editor.name,
                title: generateTitle(key)
            }
        }

        return schema;
    }
}

