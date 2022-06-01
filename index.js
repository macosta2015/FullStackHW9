//HomeWork 9

const fs = require('fs');
const inquirer = require('inquirer');


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
    function readmeQuestions() {
    return inquirer
    .prompt([
            {
                message: 'What is your favorite color? ',
                default: 'blue',
                name: 'color'
            },
            {
                name: 'What is title of the project?', 
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


    function init() {
        readmeQuestions()
        

        .then((response) => fs.writeFile('Readme.md', createReadme(response), (err) =>
        err ? console.error(err) : console.log('Readme file was succesfully created')));
    }

    init()





