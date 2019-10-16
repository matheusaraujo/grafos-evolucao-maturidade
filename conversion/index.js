/* eslint-disable no-console */
import fromMatrixToJson from './fromMatrixToJson';

const fs = require('fs');

const run = () => {
  const inputFile = process.argv.length > 2 && process.argv[2];

  if (!inputFile) {
    console.log('file not provided');
    return;
  }

  const outputFile = inputFile.replace('tsv', 'json');
  const contents = fs.readFileSync(inputFile, 'utf8');
  const rows = contents.split('\r\n');
  const matrix = rows.map((r) => r.split('\t'));

  const json = fromMatrixToJson(matrix);
  const jsonString = JSON.stringify(json, null, ' ');
  fs.writeFileSync(outputFile, jsonString);
};

run();
