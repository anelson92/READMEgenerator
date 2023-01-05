// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'No license':
    return '';
    
    case 'MIT':
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

    case 'GNU GPLv2':
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
\n## Table of Contents
\n[Description](##-Description)
\n[Installation](##-Installation)
\n[Usage](##-Usage)
\n[Testing](##-Testing)
\n[Contributing](##-Contributing)
\n[Questions](##-Questions & Links)
\n[License](##-License)
\n## Description
\n#${data.renderLicenseLink}
\n${data.description}
\n## Installation
\n${data.installation}
\n## Usage
\n${data.usage}
\n## Testing
\n${data.testing}
\n## Contributing
\n${data.contributing}
\n## Questions & Links
\nIf you have questions or need to reach out, you can find me on Github(https://github.com/${data.github}) or by email(${data.email})
\n
`;
}

module.exports = generateMarkdown;
