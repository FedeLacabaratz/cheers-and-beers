var f = function(greeting) { 
    //debugger; 
    console.log(greeting + ' ' + this.name)

    return this.name
}

window.name = 'window'
//f('hola')
//window.f('hello')

var o = { name: 'Peter' }

//f.call(o, 'hola')
//f.apply(o, ['hello'])

//o.f = f
//o.f()
//window.f()
//console.assert(o.f === window.f, 'should be same function')

//var f2 = f.bind(o)
//f2('hola')

var f2 = bind(f, o)

function bind(func, ctx) {
     return function() {
        return func.apply(ctx, arguments)
     }   
}

//f2('hola')

var p = { name: 'John' }
//var f3 = bind(f2, p)
var f3 = f2.bind(p)
f3('hola')