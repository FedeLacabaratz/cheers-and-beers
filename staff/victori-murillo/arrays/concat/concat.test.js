describe("concat", function() {
  it("Should return an array", function() {
    var array1 = [1, 2, 3];
    var array2 = [4, 5, 6];
    assert(concat(array1, array2) instanceof Array, "should return an Array, but got " + typeof concat(array1, array2))
  });

  it("should concaten an array and obj/string/number", function() {
    var array = [1]
    assert(concat(array, 1).length === array.length + 1, "should concaten an array and obj/string/number");
  });

  it("Should keep the same elements in the arrays", function() {
    var array1 = [1, 2, 3], temporal1 = [];
    var array2 = [4, 5, 6], temporal2 = [];

    for (let i = 0; i < array1.length; i++) {temporal1[i] = array1[i]};
    for (let i = 0; i < array2.length; i++) {temporal2[i] = array2[i]};

    concat(array1, array2);

    array1.forEach(function(number, index) {
      assert(number === temporal1[index], "should keep " + number + " in the index " + index);
    });

    array2.forEach(function(number, index) {
      assert(number === temporal2[index], "should keep " + number + " in the index " + index);
    });

  });

  it("should return elements ordered in two arrays", function() {
    var array1 = [1, 2, 3];
    var array2 = [4, 5, 6];

    concat(array1, array2).forEach(function(element, index) {
      if (index < array1.length) {
        assert(element === array1[index], "should return the same element ordered in the two array");
      } else {
        assert(element === array2[index - array1.length], "should return the same element ordered in the two array");
      }
    });

  });

});