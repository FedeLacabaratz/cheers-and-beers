<<<<<<< Updated upstream
function html (elements) {
=======
/*function html (elements) {
>>>>>>> Stashed changes
    var code = "";
    for (var i=0; i<elements.length;i++) {
        var element = elements[i]
        code += '<' + element.tagName + ">";
        
        if (element.children.length) {
            code += html(element.children);
        }

        code += '</' + element.tagName + ">";
    }    
    return code;
}

<<<<<<< Updated upstream
console.log(html(document.children));
=======
console.log(html(document.children));*/
// 3
function isSemantic(element) {
    return semantic.indexOf(element.tagName.toLowerCase()) > -1;
}
var semantic = ['html','body','head','header','article','aside','details','figcaption','figure','footer','main','nav','section','summary','time','mark'];


function html(elements, indent) {
    var code = '';
    if (indent === undefined) indent = '';

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (isSemantic(element)) {
            code += indent + '<' + element.tagName + '>\n';

            if (element.children.length) { 
                code += html(element.children, indent + '\t');
            }

            code += indent + '</' + element.tagName + '>\n';
        } else {
            code += html(element.children, indent + '\t');
        }
    }
    return code;
}
    
console.log(html(document.children));



/*var inline = ['h1', 'h2', 'h3', 'h5', 'span', 'time', 'title', 'strong', 'td', 'li', 'button', 'a' ]; // TODO include more tags
function isInline(element) {
    return inline.indexOf(element.tagName.toLowerCase()) > -1;
}

var selfClosed = ['input', 'link', 'br', 'img', 'source']; // TODO include more tags
function isSelfClosed(element) {
    return selfClosed.indexOf(element.tagName.toLowerCase()) > -1;
}
*/

>>>>>>> Stashed changes
