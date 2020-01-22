var array = ["ramon", "ferran", "sofia", "monica"];
function join(a, element=","){
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