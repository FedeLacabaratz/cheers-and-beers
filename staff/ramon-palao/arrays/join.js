var array = ["ramon", "ferran", "sofia", "monica"];
function join(a, element=","){
    if(!(a instanceof Array)){throw new TypeError(a + " is not an Array")}
    var result = "";
    for (var i=0; i<a.length; i++){
        if(i==a.length-1){
            result += a[i];
        }
        else{
            result += a[i] + element; 
        }
    }
    return result
}
//console.log(join(array, "123"));