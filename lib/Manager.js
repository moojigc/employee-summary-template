const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;
        if (!this.officeNumber) throw new Error('Office number must be provided.');
    }
    getOfficeNumber() {
        return `Office Number: ${this.officeNumber}`;
    }
    getRole() {
        return this;
    }
}

module.exports = Manager;