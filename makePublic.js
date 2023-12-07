const fs = require('fs');
const path = require('path');

const packageJson = path.resolve(__dirname, 'dist', 'package.json');
const package = fs.readFileSync(packageJson).toString('utf-8');
fs.writeFileSync(packageJson, package.replace('"private": true', '"private": false'));
