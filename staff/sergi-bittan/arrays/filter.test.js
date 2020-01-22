describe("filter",function()
{
    it("should be filter specific number",function()
    {
        var arr = [3,5,7,6];
        var expression = function(val){return val < 5};
        var result = filter(arr,expression);

        assert(result[0] === 3, "result should be 3, but got " + result);
    });

    it("should be return string element",function()
    { 
        var arr = [3,"hello",5,"d","casa",6];
        var expression = function(elem) {return typeof elem === "string"};
        var result = filter(arr,expression);

        assert(result[1] === "d", "result should be d, but got " + result[1]);
    });

    it("should be return undefined elements",function()
    {
        var array = [3,4,"s", ,2, ,"t"];
        var expression = function(elem){return elem === undefined};
        var result = filter(array,expression);

        assert(result[0] === undefined ,"should return undefined, but got " + result[0]);
    });

    it("should be a specific length",function()
    {
        var arr = [3,6,"string",4,true];
        var expression = function(elem){return typeof elem === "number"};
        var result = filter(arr,expression);

        assert(result.length === 3 ,"result should return 3, but got " + result.length);
    });
})










