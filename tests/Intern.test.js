const { it, expect, describe } = require('@jest/globals');
const Intern = require('../lib/intern');

describe("Intern", () => {
    // tests the employee object with intern additions
    describe("internObject", () => {
        it("should create the intern object with school included", () => {
            const intern1 = new Intern('Plop', 444, 'pete@dundermifflin.com', 'Penn State');
            expect(intern1.name).toBe('Plop');
            expect(intern1.id).toBe(444);
            expect(intern1.email).toBe('pete@dundermifflin.com');
            expect(intern1.school).toBe('Penn State');
        });
    });

    // check to see if School function is working
    describe('getSchool', () => {
        it('return the school input', () => {
            const intern2 = new Intern('Clark', 445, 'clark@dundermifflin.com', 'University of Pittsburgh')
            expect(intern2.getSchool()).toBe('University of Pittsburgh');
        });
    });

    // tests that get role produces Intern
    describe('getRole', () => {
        it('return the "Intern"', () => {
            const intern3 = new Intern('Ryan', 333, 'ryan@dundermifflin.com', 'Business School')
            expect(intern3.getRole()).toBe('Intern');
        });
    });
});