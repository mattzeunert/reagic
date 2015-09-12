var schemaGenerator = require("./schema-generator.js");

describe("Schema Generation", function(){
    it("Knows that strings should use the string Editor", function(){
        var data = {
            greeting: "hi"
        };

        var schema = schemaGenerator.generateSchema(data);
        expect(schema.greeting.editor).toBe("string");
        expect(schema.greeting.title).toBe("greeting");
    });
})
