#!/usr/bin/env node

import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageJsonPath = resolve(__dirname, 'package.json');
const packageData = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

const pearkey = packageData.bin.pearkey;

if (!pearkey) {
  console.error('Error: pearkey is not defined in package.json');
  process.exit(1);
}

exec(`pear run ${pearkey}`, (err, stdout, stderr) => {
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
