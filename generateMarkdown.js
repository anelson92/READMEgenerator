
function generateMarkdown(data) {

  return `# ${data.title}
  \n## Table of Contents
  
  \n * [Description](#Description)
  \n * [Installation](#Installation)
  \n * [Usage](#Usage)
  \n * [Testing](#Testing)
  \n * [Contributing](#Contributing)
  \n * [Questions](#Questions)
  \n * [License](#License)
  \n## Description
  \n${data.renderLicenseLink}
  \n${data.description}
  \n## Installation
  \n${data.installation}
  \n## Usage
  \n${data.usage}
  \n## Testing
  \n${data.testing}
  \n## Contributing
  \n${data.contributing}
  \n## Questions
  \nIf you have questions or need to reach out, you can find me on Github (https://github.com/${data.github}) or by email (${data.email})
  \n
  `;
  }
  

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


module.exports = generateMarkdown;
