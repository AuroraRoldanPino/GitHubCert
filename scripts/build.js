'use strict';

const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
fs.mkdirSync(distDir, { recursive: true });

const source = fs.readFileSync(path.join(projectRoot, 'src', 'index.js'), 'utf8');
fs.writeFileSync(path.join(distDir, 'index.js'), source, 'utf8');
console.log('Build completed: dist/index.js');
