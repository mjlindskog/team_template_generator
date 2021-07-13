const { it, expect, describe } = require('@jest/globals');
const Employee = require('../lib/employee');

describe("Employee", () => {
    // see if employee array displays properties as expected
    describe("createObject", () => {
        it("should create an object to hold employee information", () => {
            const employee1 = new Employee('Mike', 1, 'datemike@dundermifflin.com');
            expect(employee1.name).toBe('Mike');
            expect(employee1.id).toBe(1);
            expect(employee1.email).toBe('datemike@dundermifflin.com');
        });
    });

    // should return a string
    describe("getName", () => {
        it("return input in string form of user answer when asked to give a name", () => {
            const employee2 = new Employee('David', 2, 'davidwallace@declareModule.com');
            expect(employee2.name).toBe('David');
        });
    });

    // should return a number
    describe("getId", () => {
        it("return number input user typed in ", () => {
            const employee3 = new Employee('Andy', 21, 'narddog@dundermifflin.com');
            expect(employee3.id).toBe(21);
        });
    });

    // should return a string
    describe("getEmail", () => {
        it("return input in string form of user answer when asked to give employee email", () => {
            const employee4 = new Employee('Temp', 50, 'temp@dm.com');
            expect(employee4.email).toBe('temp@dm.com');
        });
    });

    // return Employee
    describe("getRole", () => {
        it("return 'Employee'", () => {
            const employee5 = new Employee('Toby', 99, 'toby@dundermifflin.com')
            expect(employee5.getRole()).toBe('Employee');
        });
    });
});
