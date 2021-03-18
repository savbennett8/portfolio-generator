const fs = require('fs');
//imports data from the required relative location
const generatePage = require('./src/page-template.js');

//array which holds the user command line arguments
const profileDataArgs = process.argv.slice(2, process.argv.length);

//extract & store those arguments using assignment destructuring
const [name, github] = profileDataArgs;


//alternatively written using the array index:
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];


fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out the index.html to see the output!');
});