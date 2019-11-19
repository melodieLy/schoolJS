const math = require("./math");

describe("math", function () {
    it("module math exist", function () {
        expect(math).toBeTruthy();
    });
    it("module math hass proprety add", function () {
        expect(math.add).toBeTruthy();
    });
    it("math.add is a function", function () {
        expect(typeof math.add).toBe("function");
    });
    it("math.add(2,5) = 7", function () {
        expect(math.add(2, 5)).toBe(7);
    });
    it("math.add(2,5, 10, 3, 2) = 22", function () {
        expect(math.add(2, 5, 10, 3, 2)).toBe(22);
    });
})

describe("math-Multiply", function () {
    it("module math exist", function () {
        expect(math).toBeTruthy();
    });
    it("module math hass proprety multiply", function(){
        expect(math.multiply).toBeTruthy();
    });    
    it("math.multiply is a function", function(){
        expect(typeof math.multiply).toBe("function");
    });
    it("math.multiply(2,5) = 10", function(){
        expect(math.multiply(2,5)).toBe(10);
    });
    it("math.multiply(2,5, 10) = 100", function(){
        expect(math.multiply(2,5, 10)).toBe(100);
    }); 
})