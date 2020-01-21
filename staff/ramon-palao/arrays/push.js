var a = [1, 2, 3];


function push(array, value){
    array[array.length] = value;
    return array;
}

console.log(push(a, 6));
//Expected output: [1, 2, 3, 6]