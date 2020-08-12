const inqurier = require('inquirer')
const Choice = require('inquirer/lib/objects/choice')

inqurier.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Hi, what is the title of your application?'
    },
    {
        type: 'input',
        name: 'about',
        message: 'Please enter a description of your application.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?'
    },
    {
        type: 'list',
        name: 'license'
        message: 'What license do you want applied to your application?'
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contributions?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Information about testing?'
    },
    {
        type: 'input',
        name: 'gitName',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'gitUrl',
        message: 'What is your GitHub URL?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
])
    .then(({ title, about, installing, usage, license, contributing, tests, gitName, gitUrl, email }) => {
        appendFile('README.md',
            `
    #${title}
    BADGE: https://img.shields.io/badge/license-${license}-blue.svg

    ${about}

    ## Table of Contents
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributing](#contributing)
    *[Tests](#tests)
    *[Questions](#questions)

    ##Installation
        ${installing}
    ##Usage
        ${usage}
    ##License
        ${license}
    ##Contributing
        ${contributing}
    ##Tests
        ${tests}
    #Questions
    You can find me [on Github](${gitURL}) under the username: ${gitName}. 

    You can also contact me at ${email} with any questions.
        `, err => {
            if (err) { console.log(err) }
            console.log('README Page Generated!')
        })
    })
    .catch(err => console.log(err))