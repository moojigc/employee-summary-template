const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

async function size() {
    const res = await inquirer.prompt([
        {
            type: "number",
            message: "How many engineers are on your team?",
            name: "engineersTotal"
        },
        {
            type: "number",
            message: "How many interns are on your team?",
            name: "internsTotal"
        }
    ]);
    return res;
}

async function managerDetails() {
    const res = await inquirer.prompt([
        {
            message: "What is your manager's name?",
            name: "name"
        },
        {
            message: "What is your manager's email address?",
            name: "email"
        },
        {
            message: "What is your manager's office number?",
            name: "officeNumber"
        }
    ]);
    let { name, email, officeNumber } = res;
    return new Manager("m1", name, email, officeNumber);
}

async function engineerDetails(engineersTotal) {
    const Engineers = [];
    for (let i=0; i<engineersTotal; i++) {
        const res = await inquirer.prompt([
            {
                message: `What is engineer #${i+1}'s name?`,
                name: "name"
            },
            {
                message: "What is their email address?",
                name: "email"
            },
            {
                message: "What is their GitHub username?",
                name: "github"
            }
        ]);
        let { name, email, github } = res;
        Engineers.push(new Engineer(`e${i}`, name, email, github));
    }
    return Engineers;
}

async function internDetails(internsTotal) {
    const Interns = [];
    for (let i=0; i<internsTotal; i++) {
        const res = await inquirer.prompt([
            {
                message: `What is intern #${i+1}'s name?`,
                name: "name"
            },
            {
                message: "What is their email address?",
                name: "email"
            },
            {
                message: "What university do they go to?",
                name: "school"
            }
        ]);
        let { name, email, school } = res;
        Interns.push(new Intern(`i${i}`, name, email, school))
    }
    return Interns;
}

module.exports = {
    engineerDetails: engineerDetails,
    managerDetails: managerDetails,
    internDetails: internDetails,
    size: size
}