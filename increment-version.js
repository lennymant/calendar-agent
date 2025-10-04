#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the current index.html file
const htmlPath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Find the current version number
const versionMatch = htmlContent.match(/v(\d+)\.(\d+)\.(\d+)/);
if (!versionMatch) {
  console.error('Could not find version number in HTML file');
  process.exit(1);
}

// Increment the patch version
const major = parseInt(versionMatch[1]);
const minor = parseInt(versionMatch[2]);
const patch = parseInt(versionMatch[3]) + 1;
const newVersion = `v${major}.${minor}.${patch}`;

// Replace the version in the HTML
htmlContent = htmlContent.replace(/v\d+\.\d+\.\d+/, newVersion);

// Write the updated HTML back to the file
fs.writeFileSync(htmlPath, htmlContent);

console.log(`Version incremented to ${newVersion}`);
