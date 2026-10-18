'use strict';

// Node's built-in test runner prints coverage details to the job log.
// This file preserves a small summary artifact for upload by the workflow.
const fs = require('node:fs');
const path = require('node:path');

const coverageDir = path.join(process.cwd(), 'coverage');
fs.mkdirSync(coverageDir, { recursive: true });
fs.writeFileSync(
  path.join(coverageDir, 'README.txt'),
  [
    'Coverage test run completed.',
    'The detailed built-in Node.js coverage report is printed in the GitHub Actions log.',
    'This file exists so the workflow can upload a coverage/ artifact.'
  ].join('\n') + '\n',
  'utf8'
);
console.log('Created coverage/README.txt');
