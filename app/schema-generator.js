var Reagic = require("./reagic.js");
var generateTitle = require("./generate-title");

var schemaGenerator = {
    generateSchema: function(data){
        var schema = {};
        for (var key in data) {
            var value = data[key];
            var editor = Reagic.findEditorForData(value);

            schema[key] = {
                editor: editor.dataType,
                title: generateTitle(key)
            }

            if (editor.dataType === "object") {
                schema[key]["properties"] = schemaGenerator.generateSchema(value);
            }

            var validators = editor.defaultValidators;
            if (validators) {
                schema[key][validators] = validators;
            }

        }

        return schema;
    }
}

module.exports = schemaGenerator;
