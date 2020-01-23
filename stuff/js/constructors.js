(function() {
    var Point = new Function('x', 'y', 'this.x = x; this.y = y')
    var p = new Point(1, 2)
    console.log(p)
    debugger
})();

(function() {
    function Point(x, y) { this.x = x; this.y = y }
    var p = new Point(1, 2)
    console.log(p)
    debugger
})();

(function() {
    var Point = function(x, y) { this.x = x; this.y = y }
    var p = new Point(1, 2)
    console.log(p)
})()