var isNumeric = require("./is-numeric.js");

describe("isNumeric", function(){
    var isNumericInstance = isNumeric();
    it("Detects that numbers are numeric", function(){
        expect(isNumericInstance(55)).toBe(true);
    });

    it("Detects that null isn't numeric", function(){
        expect(isNumericInstance(null)).toBe(false);
    })

    it("Detects strings that are numeric", function(){
        expect(isNumericInstance("5")).toBe(true);
    })


    it("Detects strings that aren't numeric", function(){
        expect(isNumericInstance("asdfsdf")).toBe(false);
        expect(isNumericInstance("888asdf")).toBe(false);
    })
});
