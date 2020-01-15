var tags = document.querySelectorAll('*')

var tagsUpdated = Array.prototype.map.call(tags, function(tag) {

  tag.classList = []
  tag.id = ""
  return tag
})

console.log(tagsUpdated)