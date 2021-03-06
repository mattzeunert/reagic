var isNumeric = require("./is-numeric.js");

describe("isNumeric", function(){
    var isNumericInstance = isNumeric();
    it("Detects that numbers are numeric", function(){
        expect(isNumericInstance(55).isValid).toBe(true);
    });

    it("Detects that null isn't numeric", function(){
        expect(isNumericInstance(null).isValid).toBe(false);
    })

    it("Detects strings that are numeric", function(){
        expect(isNumericInstance("5").isValid).toBe(true);
    })


    it("Detects strings that aren't numeric", function(){
        expect(isNumericInstance("asdfsdf").isValid).toBe(false);
        expect(isNumericInstance("888asdf").isValid).toBe(false);
    })

    it("Detects that strings ending on a decimal point aren't numeric", function(){
        expect(isNumericInstance("44.").isValid).toBe(false);
    })

    it("Generates an error message for invalid values", function(){
        expect(isNumericInstance("aaa").errorMessage).toBe("Please enter a number.");
    })


});
