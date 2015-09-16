module.exports = (() => function(value){
    // Another parseFloat b/c null isn't NaN, but parseFloat(null) is NaN
    var isString = typeof value === "string";
    var isNumeric = !isNaN(parseFloat(value));
    if (isString) {
        isNumeric = isNumeric && /^[\d\.\,]+$/.test(value);
    }
    return {
        isValid: isNumeric
    }
})
