//HomeWork 9

const inquirer = require('inquirer');

var fs = require('fs');
fs.readFile('readMe.txt', 'utf8');

// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// var readMe = fs.readFile('readMe.txt', 'utf8');



//We create a file in the following line!
//We are using a second method for this
fs.writeFileSync('writeMe.txt', readMe);

console.log(readMe);

// fd.writeFileSync('writeMe.txt',readme);

// inquirer
//     .prompt([
//         {
//             type: "list", 
//             message: "Pick the framework your using:", 
//             name: "framework", 
//             choices: ["react","react-native","node"]
//         },
//     ])
//     .then(answers => {
//         answers.framework 
//         console.log(answers);
//     });