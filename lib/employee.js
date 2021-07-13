class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // name input 
    getName() {
        return this.name;
    }

    // id input
    getId() {
        return this.id;
    }

    // email input
    getEmail() {
        return this.email;
    }

    // returns employee
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;