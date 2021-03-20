const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub account name. (Required)',
            validate: githubName => {
                if (githubName) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some info about yourself:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

const promptProject = portfolioData => {
    //if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    console.log(`
    ==================
    Add a new project
    ==================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Please enter a project name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project: (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with?',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your account: (Required)',
            validate: githubLink => {
                if (githubLink) {
                    return true;
                } else {
                    console.log('Please enter your GitHub link.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
        //projectData is automatically the 'promised' answers from the prompt
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        })
};

//splitting like this allows the function to have a singular purpose of prompting the user and not needing to think about it's promise
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });

// ----------------------need this later but not now -----------------//

// //requires file system from node
// const fs = require('fs');
// //imports data from the required relative location
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// // ---------------- remove bc using inquirer to capture data now ------------- //
// // //array which holds the user command line arguments
// // const profileDataArgs = process.argv.slice(2, process.argv.length);

// // //extract & store those arguments using assignment destructuring
// // const [name, github] = profileDataArgs;


// //alternatively written using the array index:
// //const name = profileDataArgs[0];
// //const github = profileDataArgs[1];


// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out the index.html to see the output!');
// });