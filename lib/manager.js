const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // takes info gathered form all employees
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // when asked for office number
    getOfficenumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;