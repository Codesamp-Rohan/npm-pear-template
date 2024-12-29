#!/usr/bin/env node

import { exec, execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import readline from 'readline';

function checkPearInstallation() {
  try {
    execSync('pear --version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function promptToInstallPear() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('[info] "pear" is not installed. Would you like to install it now? (y/n): ', (answer) => {
    rl.close();
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      installPear();
    } else {
      console.error(`
            [error] "pear" is required to run this application. Please install it manually.

            Visit the official documentation for installation instructions:
            https://docs.pearproject.org/
      `);
      process.exit(1);
    }
  });
}

function installPear() {
  console.log('[info] Installing "pear"...');
  exec('npm install -g pear', (err, stdout, stderr) => {
    if (err) {
      console.error(`[error] Failed to install "pear": ${err.message}`);
      console.error(`
        Please try installing it manually using the following command:
        npm install -g pear
        
        Visit the official documentation for more details:
        https://docs.pearproject.org/
      `);
      process.exit(1);
    }
    if (stderr) {
      console.error(`[stderr] ${stderr}`);
    }
    console.log(stdout);
    console.log('[info] "pear" has been successfully installed. Proceeding...');
    startApp();
  });
}

function startApp() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const packageJsonPath = resolve(__dirname, 'package.json');
  const packageData = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

  const pearkey = packageData.bin.pearkey;

  if (!pearkey) {
    console.error('Error: pearkey is not defined in package.json');
    process.exit(1);
  }

  exec(`pear run pear://${pearkey}`, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
}

if (!checkPearInstallation()) {
  promptToInstallPear();
} else {
  startApp();
}
