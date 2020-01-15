function pruebaHtml (elements){ 

var spa = ''
  for (var i = 0 ; i < elements.length; i++){
    var code = elements[i];
  
     spa += '<'+code.tagname+'>' 
    if ( code.children.lenght) 
     spa += '</'+code.tagname+'>'
  }
 return code
}
 
pruebaHtml(document.children)

// esto esta fatal!! HELP!