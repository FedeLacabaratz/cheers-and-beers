describe('pop',function(){
    it('should remove the last element from the array [1, 2, 3,4,5]', function () {
        var array = [1, 2, 3, 4, 5];
        var newArray = pop(array);
        var length = newArray.length
        assert(length === 4, 'should array length be 4, but got ' + length);
        assert(array[array.length - 2] === 4, 'should last value be 4');
    }); 

    it('should delete 5 at the end of array [1, 2, 3, 4, 5]', function () {
        var array = [1, 2, 3, 4, 5];
        var newArray = pop(array);
        assert(newArray.length === 4, 'should array length be 4, but got ' + newArray.length);
        assert(newArray[newArray.length - 1] === 4, 'should last value be 4');
        assert(array[0] === 1, 'should value at index 0 be 1');
        assert(array[1] === 2, 'should value at index 1 be 2');
        assert(array[2] === 3, 'should value at index 2 be 3');
        assert(array[3] === 4, 'should value at index 3 be 4');
    });   
});