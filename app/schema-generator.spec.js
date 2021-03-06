var schemaGenerator = require("./schema-generator.js");

describe("Schema Generation", function(){
    it("Knows that strings should use the string Editor", function(){
        var data = {
            greeting: "hi"
        };

        var schema = schemaGenerator.generateSchema(data);
        expect(schema.properties.greeting.editor).toBe("string");
    });

    it("Knows that numbers should use the number Editor", function(){
        var data = {
            age: 57
        };

        var schema = schemaGenerator.generateSchema(data);
        expect(schema.properties.age.editor).toBe("number");
    });

    it("Can generate a schema for objects", function(){
        var data = {
            owner: {
                name: "Patricia"
            }
        }

        var schema = schemaGenerator.generateSchema(data);
        expect(schema).toEqual({
            editor: "object",
            properties: {
                owner: {
                    editor: "object",
                    title: "Owner",
                    properties: {
                        name: {
                            editor: "string",
                            title: "Name"
                        }
                    }
                }
            }
        });
    })

    it("Can generate a schema for nested objects", function(){
        var data = {
            owner: {
                address: {
                    city: "Paris"
                }
            }
        }

        var schema = schemaGenerator.generateSchema(data);
        expect(schema).toEqual({
            editor: "object",
            properties: {
                owner: {
                    editor: "object",
                    title: "Owner",
                    properties: {
                        address: {
                            editor: "object",
                            title: "Address",
                            properties: {
                                city: {
                                    editor: "string",
                                    title: "City"
                                }
                            }
                        }
                    }
                }
            }
        });
    })
})
