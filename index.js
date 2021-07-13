const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Mananger = require('./lib/manager');
const Intern = require('./lib/intern');
const generatePage = require('./src/generate');
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');

const createFile = data => {
    const filename = './dist/index.html';

    fs.writeFile(filename, data, err => {
        // either or statement for whatever error encoutered or succesfully genereates html file
        err ? console.log(err) : console.log('Success! check the dist/ folder for the index.html')
    }) 
};

const teamArray = [];

function questions() {
    return inquirer
        // questions all users will be asked each time card is created
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "What is the employee's role?",
                choices: ['Manager', 'Engineer', 'Intern'],
            },
            {
                type: 'input',
                name: 'name',
                message: "Please enter the employee's name.",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the employee's ID.",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the employee's email.",
            },
        ])
        .then(({name, id, email, role}) => {
            // splits out by role selected to prompt either ask office number, github usernmane, or school questions
            if(role === 'Manager') {
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'office',
                            message: "Please enter the manager's office number.",
                        },
                        {
                            type: 'confirm',
                            name: 'another',
                            message: 'Would you like to add another employee?',
                        },
                    ])
                    .then(({office, another}) => {
                        teamArray.push(new Manager(name, id, email, office))
                        if (another) {
                            return questions();
                        }
                    })
            } else if(role === 'Engineer') {
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'github',
                            message: "Please enter the enineer's github username.",
                        },
                        {
                            type: 'confirm',
                            name: 'another',
                            message: 'Would you like to add another employee?',
                        },
                    ])
                    .then(({github, another}) => {
                        teamArray.push(new Engineer(name, id, email, github))
                        if (another) {
                            return questions();
                        }
                    })
            } else if(role === 'Intern') {
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'school',
                            message: "Please enter the intern's school name.",
                        },
                        {
                            type: 'confirm',
                            name: 'another',
                            message: 'Would you like to add another employee?',
                        },
                    ])
                    .then(({school, another}) => {
                        teamArray.push(new Intern(name, id, email, school))
                        if (another) {
                            return questions();
                        }
                    })
            }
        })
};

// initiates the questions prompt when npm start or node index.js is typed in command line
questions()
    .then(teamCards => {
        return generatePage(teamArray)
    })
    .then(newPage => {
        return createFile(newPage)
    })
    .catch(err => {
        console.log(err);
    });