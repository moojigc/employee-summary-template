const { size, internDetails, engineerDetails, managerDetails } = require('./lib/inquiry');
const { employee, home } = require('./lib/template');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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

function writeToHTML(fileName, HTML) {
    fs.writeFile(path.resolve(__dirname, 'output', fileName), HTML, function(err) {
        if (err) console.log(err);
        else console.log('Write success!');
    })
}

async function printToHTML() {
    const { manager, engineers, interns } = await getTeam();
    function engineersLI() {
        const allEng = [];
        for (engineer of engineers) {
            allEng.push(engineer.listElement('Engineer'));
        };
        return allEng.join('\n');
    };   
    function internsLI() {
        const allInt = [];
        for (intern of interns) {
            allInt.push(intern.listElement('Intern'));
        };
        return allInt.join('\n');
    };   

    const homePage = home(manager.listElement('Manager'), engineersLI(), internsLI());
    writeToHTML('home.html', homePage);
    
    for (engineer of engineers) {
        let employeePage = employee(engineer, 'Engineer', manager.listElement('Manager'), engineersLI(), internsLI());
        writeToHTML(`${engineer.name}.html`, employeePage) 
    }
    for (intern of interns) {
        let employeePage = employee(intern, 'Intern', manager.listElement('Manager'), engineersLI(), internsLI());
        writeToHTML(`${intern.name}.html`, employeePage) 
    }
}

printToHTML();
