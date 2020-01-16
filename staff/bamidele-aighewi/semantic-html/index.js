function isSemanticElement(element) {
    var semanticElements = ['article', 'aside', 'details', 'figcaption', 'figure', 'footer', 'header', 'main', 'mark', 'nav', 'section', 'summary', 'time'];
    return semanticElements.indexOf(element.tagName.toLowerCase()) > -1;
}

function html(elements, indent) {
    var code = '';
    if (indent === undefined) indent = '';
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var tagName = element.tagName.toLowerCase();

        if (isSemanticElement(element)) {
            code += indent + '<' + tagName + '>\n';
            if (element.children.length) {
                code += html(element.children, indent + '\t');
            }
            code += indent + '</' + tagName + '>\n';
        } else {
            code += html(element.children, indent + '\t');
        }
    }
    return code;
}
console.log(html(document.children));