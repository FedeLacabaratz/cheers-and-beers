describe('Murray.prototype.shift',function(){
    
    it('should remove the first element of a murray', function(){
        var a = new Murray(1,2,3,4,5);
        var result = a.shift();

        expect(result[0]).toBe(2);
        expect(result[1]).toBe(3);
        expect(result[2]).toBe(4);
        expect(result[3]).toBe(5);
    });
  
    it('should return the first element of a murray', function(){
        var a = new Murray('monica','laura','pepe','luis');
        var result = a.shift()

        expect(result).toBe('monica');
    });

    it('should modify the length of the original murray', function(){
        expect(result).toBe(false);
    });

    it('Should return undefined if the length of murray is 0', function(){
        expect(result).toBe(false);
    });
});