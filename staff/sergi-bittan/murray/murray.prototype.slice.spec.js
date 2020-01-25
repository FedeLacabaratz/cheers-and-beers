"use strict";
describe("Murray.prototype.slice", function(){
    it("Should return a new murray", function(){
        var murray = new Murray(1, 3, 5, 6, 4);
        var newMurray = murray.slice();
        expect(murray).not.toBe(newMurray)
    })
    it("should return a new murray from an initial position", function(){
        var murray = new Murray(1, 3, 5, 6, 4);
        var newMurray = murray.slice(1);
        expect(newMurray[0]).toBe(murray[1]);
    });
    it("should return a new murray from an initial position to end position (end no included)", function(){
        var murray = new Murray(1, 3, 5, 6, 4);
        var newMurray = murray.slice(1,3);
        
        expect(newMurray[0]).toBe(3);
        expect(newMurray[1]).toBe(5);
        expect(newMurray.length).toBe(2);
    })
})