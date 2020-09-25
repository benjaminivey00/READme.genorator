// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
`;
}

module.exports = generateMarkdown;
