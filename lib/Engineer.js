const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
        if (!this.github) throw new Error('GitHub username must be provided.');
    }
    getGithub() {
        return `GitHub: ${this.github}`;
    }
    getRole() {
        return this;
    }
}

module.exports = Engineer;