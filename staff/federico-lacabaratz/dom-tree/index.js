
// Code to get tagNames with "some" indentation

function html(elements, indent) {
    var code = '';

    if (indent === undefined) indent = '';

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        code += indent + '<' + element.tagName + '>\n';

        if (element.children.length) {
            code += html(element.children, indent + '\t');
        }

        code += indent + '</' + element.tagName + '>\n';
    }

    return code;
}

console.log(html(document.children));
