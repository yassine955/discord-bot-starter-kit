#!/usr/bin/env node
const inquirer = require('inquirer');
const ncp = require('ncp');
ncp.limit = 16;
(async () => {
  await inquirer
    .prompt([
      {
        type: 'checkbox',
        message: 'Choose your language: 🎌',
        name: 'language',
        choices: ['JAVASCRIPT', 'TYPESCRIPT']
      }
    ])
    .then(({ language }) => {
      const cwd = process.cwd();
      const currentDIR = __dirname;
      const frame = language[0];
      const msg = `Successfully installed ${frame} ✅`;
      const dirToGo = `${cwd}/`;
      if (frame === 'JAVASCRIPT') {
        ncp(`${currentDIR}/Lib/javascript-version/`, dirToGo, err => {
          if (err) return console.error(err);
          console.log(msg);
        });
      } else if (frame === 'TYPESCRIPT') {
        ncp(`${currentDIR}/Lib/typescript-version/`, dirToGo, err => {
          if (err) return console.error(err);
          console.log(msg);
        });
      } else {
        console.log(`Please don't do that m8 ❌`);
      }
    });
})();
