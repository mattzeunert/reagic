var Reagic = require("./reagic.js");
var generateTitle = require("./generate-title");

var schemaGenerator = {
    generateSchema: function(data, isRecursing){
        var schema = {};
        for (var key in data) {
            var value = data[key];
            var editor = Reagic.findEditorForData(value);

            schema[key] = {
                editor: editor.dataType,
                title: generateTitle(key)
            }

            if (editor.dataType === "object") {
                schema[key]["properties"] = schemaGenerator.generateSchema(value, true);
            }

            var validators = editor.defaultValidators;
            if (validators) {
                schema[key].validators = validators;
            }
        }

        // Assume that outermost data type is object
        if (!isRecursing) {
            return {
                editor: "object",
                properties: schema
            }
        }

        return schema;
    }
}

module.exports = schemaGenerator;
