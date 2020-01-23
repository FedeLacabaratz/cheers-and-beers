describe("index-of", function(){
    it("should return '1' as the index of element 'sofia' is the second one within the array", function(){
        var array = ["ferran", "sofia", "monica", "marc", "ramon"];
        var result = indexOf(array, "sofia");

        assert(result === 1, "should return 1 but I got " + result);
    })

    it("should return '-1' if the element is not in the array", function(){
        var array = ["ferran", "sofia", "monica", "marc", "ramon"];
        var result = indexOf(array, "jordi");

        assert(result === -1, "should return -1 but I got " + result);
    })
})