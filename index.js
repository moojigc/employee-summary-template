const { size, internDetails, engineerDetails, managerDetails } = require('./lib/inquiry');
const { employee, home } = require('./lib/template');
const fs = require('fs');
const path = require('path');

// store team size 
async function getTeam() {
    const { engineersTotal, internsTotal } = await size();
    const team = {
        manager: await managerDetails(),
        engineers: await engineerDetails(engineersTotal),
        interns: await internDetails(internsTotal)
    }
    return team;
}
// Writes .html file to /output folder using 'path' module
function writeToHTML(data, fileName) {
    fs.writeFile(path.resolve(__dirname, 'output', `${fileName}.html`), data, function(err) {
        if (err) console.log(err);
        else console.log('Write success!');
    })
}

async function printToHTML(people) {
    const { manager, engineers, interns } = await people;

    function loopListElements(members, cat) {
        const allMembers = [];
        for (member of members) {
            allMembers.push(member.listElement(cat));
        }
        return allMembers.join('\n');
    }   

    // create the home.html using the home() function which returns a template literal
    const homePage = home(manager.listElement('Manager'), loopListElements(engineers, 'Engineer'), loopListElements(interns, 'Intern'));
    writeToHTML(homePage, 'home');
    
    // manager page
    let managerPage = employee(manager, 'Manager', manager.listElement('Manager'), 
    loopListElements(engineers, 'Engineer'), loopListElements(interns, 'Intern'));
    writeToHTML(managerPage, manager.name + manager.id);
    
    // Iterate over engineers and interns to create individual .html pages
    for (engineer of engineers) {
        let employeePage = employee(engineer, 'Engineer', manager.listElement('Manager'), loopListElements(engineers, 'Engineer'), loopListElements(interns, 'Intern'));
        writeToHTML(employeePage, engineer.name + engineer.id);
    }
    for (intern of interns) {
        let employeePage = employee(intern, 'Intern', manager.listElement('Manager'), loopListElements(engineers, 'Engineer'), loopListElements(interns, 'Intern'));
        writeToHTML(employeePage, intern.name + intern.id); 
    }
}

// call function and pass it the getTeam() inquirer function
printToHTML(getTeam());

module.exports = {
    printToHTML: printToHTML,
    getTeam: getTeam
}