var generateTitle = require("./generate-title.js");

describe("Title Generator", function(){
    it("Capitalizes titles", function(){
        expect(generateTitle("greeting")).toBe("Greeting");
    })

    it("Splits up words that use camelCase", function(){
        expect(generateTitle("articleTitle")).toBe("Article Title");
    })
});
