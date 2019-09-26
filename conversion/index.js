/* eslint-disable no-console */
import fromMatrixToJson from './fromMatrixToJson';

const fs = require('fs');

const contents = fs.readFileSync('engsis.tsv', 'utf8');
const rows = contents.split('\r\n');
const matrix = rows.map((r) => r.split('\t'));

const json = fromMatrixToJson(matrix);
const jsonString = JSON.stringify(json, null, ' ');
fs.writeFileSync('engsis.json', jsonString);
