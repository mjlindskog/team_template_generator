const { it, expect, describe } = require('@jest/globals');
const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    // tests the employee object with engineer additions
    describe("engineerObject", () => {
        it("should create the engineer object with github included", () => {
            const engineer1 = new Engineer('Dan', 99, 'dan@thejob.com', 'dantheengineer');
            expect(engineer1.name).toBe('Dan');
            expect(engineer1.id).toBe(99);
            expect(engineer1.email).toBe('dan@thejob.com');
            expect(engineer1.github).toBe('dantheengineer');
        });
    });

    // check to see if Github function is working
    describe('getGithub', () => {
        it('return the github input', () => {
            const engineer2 = new Engineer('Guy', 70, 'guy@employment.com', 'guysgithub')
            expect(engineer2.getGithub()).toBe('guysgithub');
        });
    });

    // tests that get role produces Engineer
    describe('getRole', () => {
        it('return the "Engineer"', () => {
            const engineer3 = new Engineer('Tom', 13, 'tom@myspace.com', 'tomspace')
            expect(engineer3.getRole()).toBe('Engineer');
        });
    });
});