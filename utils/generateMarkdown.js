// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[![badge](https://img.shields.io/badge/license-${license}-brightgreen)]`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license !== "None" || "unlicensed") {
//     return ()
//   }
//   return ''
//}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "None") {
  return (`## License
    This Project uses the ${license} License`)
}
return ''
}

function projectURL(github, title){
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    ## Project Title
    ${data.title}
    ${projectURL(data.github, data.title)}

    ${renderLicenseBadge(data.license, data.github, data.title)}

    ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contirbuting](#collaborators)
- [GitHub](#github)
- [Tests](#tests)
- [Questions](#questions)

    ## Description

    ${data.description}

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ${renderLicenseSection(data.license)}

    ## Test

    ${data.test}

    ## Collaborators

    ${data.contributing}

    ## Questions
    
    Find me on GitHub: [${data.github}](https://github.com/${data.github})
    
    Email me with any questions: ${data.email}  

`;
}

module.exports = generateMarkdown;
