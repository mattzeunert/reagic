var schemaGenerator = require("./schema-generator.js");

describe("Schema Generation", function(){
    it("Knows that strings should use the string Editor", function(){
        var data = {
            greeting: "hi"
        };

        var schema = schemaGenerator.generateSchema(data);
        expect(schema.greeting.editor).toBe("string");
    });

    it("Knows that numbers should use the number Editor", function(){
        var data = {
            age: 57
        };

        var schema = schemaGenerator.generateSchema(data);
        expect(schema.age.editor).toBe("number");
    });
})
