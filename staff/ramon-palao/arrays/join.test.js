/*console.log("JOIN TEST");

var array = ["ramon", "ferran", "sofia", "monica"];
var result = join(array, " and ");

console.assert(typeof result == "string", "the type of the result should be a string");
console.log("The type of the result should be a string");

for (var i = 0; i < array.length; i++){
    console.assert(result.includes(array[i]), "the string should include all the elements from the array");
}
console.log("The string should include all the elements from the array");
*/
describe("join", function(){
    it("should result type be a string", function(){
        var array = ["cat", "dog", "dolphin"];
        var result = join(array, "+");

        assert(typeof result === "string", "should the result be type of string but I got " + typeof result);
    })

    it("should return an empty string if the array length is 0", function(){
        var array = [];
        var result = join(array);

        assert(result === "", "should return an empty string '' but I got " + result);
    })
})