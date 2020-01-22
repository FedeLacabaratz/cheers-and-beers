console.log("JOIN TEST");

var array = ["ramon", "ferran", "sofia", "monica"];
var result = join(array, " and ");

console.assert(typeof result == "string", "the type of the result should be a string");
console.log("The type of the result should be a string");

for (var i = 0; i < array.length; i++){
    console.assert(result.includes(array[i]), "the string should include all the elements from the array");
}
console.log("The string should include all the elements from the array");