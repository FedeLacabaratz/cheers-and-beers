var a = ["cat", "dog", "dolphin", "lion"];

function includes(array, value){
    for (var i = 0; i < array.length; i++){
        if (array[i] === value){
            return true;
        }
    }
    return false;
}

console.log(includes(a, "bird"));
//Expected output: false
