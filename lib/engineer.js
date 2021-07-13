const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // takes info gathered form all employees
        super(name, id, email);
        this.github = github;
    }

    // when asked for github
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;