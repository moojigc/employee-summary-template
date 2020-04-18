const employee = (person, category, managerLI, engineersLI, internsLI) => {
    const { name, id, email } = person;
    let special;
    switch (category) {
        case 'Engineer':
            special = person.getGithub();
            break;
        case 'Manager':
            special = person.getOfficeNumber();
            break;
        case 'Intern':
            special = person.getSchool();
            break;
        default:
            special = null;
    }
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employees</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Lemonada|Manrope&display=swap" rel="stylesheet"> 
        <script src="https://kit.fontawesome.com/d50f4ca58c.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="assets/style.css">
    
    </head>
    <body>
        <div class="jumbotron">
            <h1 class="display-4">Employees</h1>
        </div>
    
        <div class="grid-container">
            <main>
                <div class="card">
                    <div id="employee-class" class="card-header">
                        ${category}
                    </div>
                    <div class="card-body">
                        <h3 id="name" class="card-title">
                            ${name}
                        </h3>
                        <ul class="list-group list-group-flush">
                            <li id="employee-id" class="list-group-item">ID: ${id}</li>
                            <li id="employee-email" class="list-group-item">${email}</li>
                            <li id="employee-special" class="list-group-item">${special}</li>
                        </ul>
                    </div>
                </div>
            </main>
           
            <header>
                My Team
            </header>
    
            <aside class="people">
                <div class="card">
                    <div class="card-body">
                        <ul id="employee-list" class="list-group list-group-flush">
                            ${managerLI}
                            ${engineersLI}
                            ${internsLI}
                        </ul>
                    </div>
                </div>
            </aside>
    
        </div>    
    </body>
    </html>`
return html;
}

const home = (managerLI, engineersLI, internsLI) => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employees</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Lemonada|Manrope&display=swap" rel="stylesheet"> 
    <script src="https://kit.fontawesome.com/d50f4ca58c.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="assets/style.css">

</head>
<body>
    <div class="jumbotron">
        <h1 class="display-4">Employees</h1>
    </div>

    <div class="grid-container-home">
        <header>
            My Team
        </header>

        <aside class="people">
            <div class="card">
                <div class="card-body">
                    <ul id="employee-list" class="list-group list-group-flush">
                        ${managerLI}
                        ${engineersLI}
                        ${internsLI}
                    </ul>
                </div>
            </div>
        </aside>

    </div>    
</body>
</html>`
return html;
}

module.exports = {
    employee: employee,
    home: home
}