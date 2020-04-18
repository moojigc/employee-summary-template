const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
        if (!this.school) throw new Error('School name must be provided.');
    }
    getSchool() {
        return `School: ${this.school}`
    }
    getRole() {
        return this;
    }
}

module.exports = Intern;