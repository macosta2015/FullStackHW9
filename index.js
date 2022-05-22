const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "list", 
            message: "Pick the framework your using:", 
            name: "framework", 
            choices: ["react","react-native","node"]
        },
    ])
    .then(answers => {
        console.log(answers);
    });