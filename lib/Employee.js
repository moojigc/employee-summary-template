class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        if (typeof this.name !== 'string' || !this.name) throw new Error('Name required, and name must be a string!');
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(this.email) || !this.email) throw new Error('Not a valid email or email not provided.');
        if (!this.id) throw new Error('ID value must be provided.');
    }
    listElement(category) {
        return `<a href="${this.name}${this.id}.html"><button class="list-group-item list-group-item-action"><div>${category}: </div><div>${this.name}</div></button></a>`;
}
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this;
    }
}

module.exports = Employee;