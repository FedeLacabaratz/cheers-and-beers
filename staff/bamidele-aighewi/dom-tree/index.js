function tabulation(total) {
    var output = '';
    for (var x = 0; x < total; x++) output += '-';
    return output;
}

var level = 1;
function getDomTree(docChildren, identation) {
    var tagNames = '';
    for(var x = 0; x < docChildren.length; x++){
        var child = docChildren[x];
        var tagName = child.tagName;

        tagNames += '<' + tagName + '>';

        if (child.children.length) {
            tagNames += getDomTree(child.children, identation);
        }

        tagNames += '</' + tagName + '>';
        level++;
    }

    return tagNames;
}

var elements = getDomTree(document.children, '');
console.log(elements);