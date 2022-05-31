//HomeWork 9

const fs = require('fs');
const inquirer = require('inquirer');

// fs.readFile('readMe.txt', 'utf8');

// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// var readMe = fs.readFile('readMe.txt', 'utf8');

// function readmeQuestions(){
//     inquirer.prompt(
//         [
//             {
//                 name: 'color',
//                 message: 'What is your favorite color? ',
//                 default: 'blue'
//             },
//             {
//                 name: 'website', 
//                 message: 'What is your favorite website'
//             },
//             {
//                 type: 'rawlist', 
//                 name: 'books',
//                 message: 'What is your favorite Book',
//                 choices: ['Percy Jackson','Think and Grow Rich','How to Win Friends and Influence People', 'Why we sleep']
//             },
//             {
//                 type: 'password', 
//                 name: 'secretText',
//                 message: 'Password: ',
//                 mask: "*"
//             }
//         ]
        
//     )
    
//         .then(answers => {
//             console.log('Answer: ', answers)
//         })
// }

// const readmeQuestions = () => {
    function readmeQuestions() {
    return inquirer
    .prompt([
            {
                message: 'What is your favorite color? ',
                default: 'blue',
                name: 'color'
            },
            {
                name: 'website', 
                message: 'What is your favorite website? '
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
        ])
        // .then(response => {
        //     console.log('Answer: ', response)

        //     console.log("The website is: ", response.color)
        // })
}


const createReadme = (response) => `
## The color response is:
# ${response.color}

## The website's name is:
# ${response.website}

## The book is:
# ${response.rawlist}

## The password is:
# ${response.rawlist}

## The secret text is:
# ${response.secretText}

`;


    function init() {
        readmeQuestions()
        

        .then((response) => fs.writeFile('Readme.md', createReadme(response), (err) =>
        err ? console.error(err) : console.log('Readme file was succesfully created')));
    }

    init()





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