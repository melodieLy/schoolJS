const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

describe("html", function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });

    it("formular exists and have id supscription", function () {
        expect(document.getElementsByName("supscription")).toBeTruthy();
    });

    it("formular has 3 inputs", function () {
        const inputs = document.querySelectorAll("input").length;
        expect(inputs).toBe(3);
    });

    it("inputs fname exist", function () {
        expect(document.getElementsByName("fname")).toBeTruthy();
    });

    it("inputs lname exist", function () {
        expect(document.getElementsByName("lname")).toBeTruthy();
    });

    it("inputs age exist", function () {
        expect(document.getElementsByName("age")).toBeTruthy();
    });

    it("formular has 2 button", function () {
        const buttons = document.querySelectorAll("button").length;
        expect(buttons).toBe(2);
    });

    it("buton fill exist", function () {
        expect(document.getElementById("fill")).toBeTruthy();
    });

    it("buton empty exist", function () {
        expect(document.getElementById("empty")).toBeTruthy();
    });

    //buton on clique 
    it("imputs age match require parameters", function () {
        expect(document.querySelector('button[id="fill"]').click());
        expect(document.getElementsByName("lname").value).toBe("Ehanno");
        expect(document.getElementsByName("fname").value).toBe("Maxime");
        expect(document.getElementsByName("age").value).toBe(22);
    });

    //buton on clique 
    it("button empty worck", function () {

    });
});