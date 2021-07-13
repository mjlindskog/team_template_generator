const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // takes info gathered form all employees
        super(name, id, email);
        this.school = school;
    }

    // when asked for school
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;