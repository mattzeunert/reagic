module.exports = {
    name: "string",
    shouldBeUsedForData: function(data){
        return typeof data === "string";
    }
}
