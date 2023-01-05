
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const markdown = require('./generateMarkdown.js');


const questions = [
  {
        type: 'input',
        message: 'What is the project name?',
        name: 'title'
  },
  {
    type: 'input',
    message: 'Please provide a brief description.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Are there any special instructions for installation?',
    name: 'installation',
    default: 'npm install'
  },
  {
    type: 'input',
    message: 'How do you use this application?',
    name: 'usage'
  },
  {
  name: 'testing',
  message: 'How do you test this application?',
  type: 'input',
  default: 'npm run test'
  },
  {
    type: 'input',
    message: 'How can users contribute to your project?',
    name: 'contributing'
  },
  {
    type: 'list',
    message: 'Choose a license.',
    choices: ['No license','MIT','GNU GPLv2'],
    name: 'license'
  },
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github'
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
  }];


function writeToFile(fileName, data){
  return fs.writeFileSync(path.join(process.cwd(), fileName),data);
}

async function init() {
  const responses = await inquirer.prompt(questions);
  const data = markdown({...responses});

  console.log('Creating README...');

  writeToFile('README.md', data);
}

init();