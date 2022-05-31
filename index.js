//HomeWork 9

const inquirer = require('inquirer');

// var fs = require('fs');
// fs.readFile('readMe.txt', 'utf8');

// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// var readMe = fs.readFile('readMe.txt', 'utf8');

inquirer.prompt(
    [
        {
            name: 'color',
            message: 'What is your favorite color? ',
            default: 'blue'
        },
        {
            name: 'website', 
            message: 'What is your favorite website'
        },
        {
            type: 'rawlist', 
            name: 'books',
            message: 'What is your favorite Book',
            choices: ['Percy Jackson','Think and Grow Rich','How to Win Friends and Influence People', 'Why we sleep']
        },
        {
            type: 'password', 
            name: 'secretText',
            message: 'Password: ',
            mask: "*"
        }
    ]
    
)

    .then(answers => {
        console.log('Answer: ', answers)
    })

//We create a file in the following line!
//We are using a second method for this
// fs.writeFileSync('writeMe.txt', readMe);

// console.log(readMe);

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