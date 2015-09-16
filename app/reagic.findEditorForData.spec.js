var Reagic = require("./reagic.js");

describe("findEditorForData", function(){
    it("returns the string editor for strings", function(){
        var editor = Reagic.findEditorForData("exampleString");

        expect(editor.dataType).toBe("string");

    })
});
