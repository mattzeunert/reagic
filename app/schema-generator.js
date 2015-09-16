var Reagic = require("./reagic.js");
var generateTitle = require("./generate-title");

module.exports =  {
    generateSchema: function(data){
        var schema = {};
        for (var key in data) {
            var value = data[key];
            var editor = Reagic.findEditorForData(value);

            var validators = editor.defaultValidators;
            if (validators === undefined){
                validators = [];
            }
            schema[key] = {
                editor: editor.dataType,
                title: generateTitle(key),
                validators: validators
            }
        }

        return schema;
    }
}

