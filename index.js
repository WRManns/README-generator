// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

// An array of questions for user input
const questions = () => {
  return inquirer.prompt([

    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?',
      },

      {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project:',
      },  
      
      {
        type: 'input',
        name: 'installation',
        message: 'What steps, if any, are required to install your project?',
      },

      {
        type: 'input',
        name: 'usage',
        message: 'Provide any information a user may need to know for using this repo:',
      },

      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should this project use?',
        choices: ["None", "wtfpl", "apache-2.0", "unlicensed", "mpl-2.0", "lgpl", "gpl-3.0", "MIT", "OSL-3.0"]
      },

      {
        type: 'input',
        name: 'test',
        message: 'What command should be used to run tests?',
        default: 'npm test'
      },

      {
        type: 'input',
        name: 'contributing',
        message: 'List any and all contributors to this project:',
      },

      {
        type: 'input',
        name: 'deployment',
        message: 'What is the link to the deployed app?'
      },

      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },

      {
        type: 'input',
        name: 'email',
        message: 'Please enter your e-mail:'
      }
  ]);
};


// Function to write README file
function writeFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName), data);

}

// Function to initialize app
const init = () => {
    questions()
    .then((answers) => writeFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.me'))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();
