
function html(elements) {
    var code = '';

    for (const element of elements) {
        code += '<' + element.tagName + '>';
        try{
            if (element.children.length) code += html(element.children);
        }catch(error){
            console.log('error')
        }
        code += '</' + element.tagName + '>\n\n';
    }

    return code;
}
console.log(html(document.children));