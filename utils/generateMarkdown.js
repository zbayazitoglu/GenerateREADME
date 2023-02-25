// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} (${data.license})

## Description

${data.description}


## Table Of Content

- [Description](#description)
- [Table Of Content](#table-of-content)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

  
## Installation

${data.inst}


## Usage

${data.usage}


## License

${data.license}


## Contributing

${data.contrb}


## Tests

${data.tests}


## Questions

Any question please contact:
- https://github.com/${data.github}
- ${data.email}

`;
}

module.exports = generateMarkdown;
