const { it, expect, describe } = require('@jest/globals');
const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("managerObject", () => {
        it("should create the manager object with office number included", () => {
            const manager1 = new Manager('Michael', 4, 'mscott@dundermifflin.com', 1);
            expect(manager1.name).toBe('Michael');
            expect(manager1.id).toBe(4);
            expect(manager1.email).toBe('mscott@dundermifflin.com');
            expect(manager1.officeNumber).toBe(1);
        });
    });

    describe('getOfficenumber', () => {
        it('return the office number input', () => {
            const manager2 = new Manager('Date Mike', 4, 'datemike@dundermifflin.com', 1)
            expect(manager2.getOfficenumber()).toBe(1);
        });
    });

    describe('getRole', () => {
        it('return the "Manager"', () => {
            const manager3 = new Manager('Prison Mike', 4, 'prisonmike@dundermifflin.com', 1)
            expect(manager3.getRole()).toBe('Manager');
        });
    });
});