const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './form.html'), 'utf8');
jest.dontMock('fs');

describe('Form', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });

    it('HTML page have a form', function() {
        expect(document.querySelector('form')).toBeTruthy();
    });

    it('Form have a id "subscription"', function() {
        expect(document.querySelector('form[id="subscription"]')).toBeTruthy();
    });

    it('The form contains 3 inputs', function() {
        const inputs = document.querySelectorAll("input");
        expect(inputs.length).toBe(3);
    });

    it('The form contain a input with a name "lname"', function() {
        expect(document.querySelector('input[name="lname"]')).toBeTruthy();
    });

    it('The form contain a input with a name "fname"', function() {
        expect(document.querySelector('input[name="fname"]')).toBeTruthy();
    });

    it('The form contain a input with a name "age"', function () {
        expect(document.querySelector('input[name="age"]')).toBeTruthy();
    });

    it('The form contains 2 buttons', function() {
        const buttons = document.querySelectorAll("button");
        expect(buttons.length).toBe(2);
    });
    
    it('The form contain a button with a id "fill"', function() {
        expect(document.querySelector('button[id="fill"]')).toBeTruthy();
    });

    it('The form contain a button with a id "empty"', function() {
        expect(document.querySelector('button[id="empty"]')).toBeTruthy();
    });

    it('This buttons fill is clickable', function() {
        expect(document.querySelector('button[id="fill"]').click());
    });

    it('This buttons empty is clickable', function() {
        expect(document.getElementById('empty').click());
    });
    
    it('The button "fill" filled the input lname', function() {
        document.querySelector('button[id="fill"]').click();
        const inputs = document.querySelector('input[name="lname"]').value;
        expect(inputs).toBe('Ly');
    });

    it('The button "fill" filled the input fname', function() {
        document.querySelector('button[id="fill"]').click();
        const inputs = document.querySelectorAll('input[name="lname"]');
        expect(inputs.value).toBe('Mel');
    });

    it('The button "fill" filled the input age', function() {
        document.querySelector('button[id="fill"]').click();
        const inputs = document.querySelectorAll('input[name="fname"]');
        expect(inputs.value).toBe(24);
    });

    it('The button "empty" blank the input lname', function() {
        document.querySelector('button[id="empty"]').click();
        const inputs = document.querySelectorAll('input[name="lname"]');
        expect(inputs.value).toBe();
    });

    it('The button "empty" blank the input fname', function() {
        document.querySelector('button[id="empty"]').click();
        const inputs = document.querySelectorAll('input[name="fname"]');
        expect(inputs.value).toBe();
    });

    it('The button "empty" blank the input age', function() {
        document.querySelector('button[id="empty"]').click();
        const inputs = document.querySelectorAll('input[name="age"]');
        expect(inputs.value).toBe();
    });
});