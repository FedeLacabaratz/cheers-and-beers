//var elements = element.children;
var code='';
function findChildren(collection){
    for (i=0; i<collection.length; i++){
        code += "<" + collection[i].tagName + ">";
        if (collection[i].children.length>0){
            code += findChildren(collection[i].children);
        }
        console.log(code);
        code +="</" + collection[i].tagName + ">";
    }
}
findChildren(document.children);