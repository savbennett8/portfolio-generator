const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));


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