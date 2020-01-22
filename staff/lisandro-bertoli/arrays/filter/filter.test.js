describe('filter', function () {
    it('should return even values on even-numbers fliter applied, on provided array', function () {
        var array = [1, 2, 3, 4, 5, 6, 7];
        var result = filter(array, function (value) {
            return value % 2 === 0;
        })

        assert(result instanceof Array, 'should result be an array, but got ' + result.constructor.name);
        assert(result.length === 3, 'should array length be 4, but got ' + result.length);

        for (var i = 0; i < result.length; i++) {
            assert(result[i] === array[i * 2 + 1], 'should value at ' + i + 'be ' + array[i * 2 + 1] + ', but got ' + result[i]);
        }
    });

    it('should return all instances of "lisandro" or "Lisandro" from the names array', function () {
        var names = ['lisandro', 'Jose', 'Lisandro', 'raul'];

        var result = filter(names, function (name) {
            if (name.toLowerCase() === 'lisandro') return name;
        });

        assert(result[0] === 'lisandro', 'should name be lisandro, but got ' + result[0]);
        assert(result[1] === 'Lisandro', 'should name be Lisandro, but got ' + result[1]);
    });
})