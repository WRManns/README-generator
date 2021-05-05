//Function to render a badge with license, if there is one
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![<img src="https://img.shields.io/badge/license-${license}-brightgreen.svg?logo=LOGO">](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
  return ''
}
//Function to genereate license section, if there is one
function renderLicenseSection(license) {
if (license !== "None") {
  return (`## License

    This Project uses the ${license} License`)
}
return ''
}
//Function to generate a link to project repo
function projectURL(github, title){
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `## Project Repository

    [Link to Repo](https://github.com/${github}/${kebabCaseTitle})`;
}
//Function to only generate a "license" tab in the Table of Contents if a license exists
function licenseToc(license){
  if (license !== "None"){
  return ('- [License](#license)')
} 
  return ''
}

//Function to generate markdown for README based on user's input into template
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
${licenseToc(data.license)}
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
