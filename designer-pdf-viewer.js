'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputSTring += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
  .split('\n')
  .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// complete the designerPDFViewer function below.
function designerPdfViewer(h, word) {

  let alphabet = {
      'a': 0,
      'b': 1,
      'c': 2,
      'd': 3,
      'e': 4,
      'f': 5,
      'g': 6,
      'h': 7,
      'i': 8,
      'j': 9,
      'k': 10,
      'l': 11,
      'm': 12,
      'n': 13,
      'o': 14,
      'p': 15,
      'q': 16,
      'r': 17,
      's': 18,
      't': 19,
      'u': 20,
      'v': 21,
      'w': 22,
      'x': 23,
      'y': 24,
      'z': 25
  };

  let wordHeights = [];

  for (let index = 0; index < word.length; index++) {
      wordHeights.push(h[alphabet[word.charAt(index)]]);
  }
  let max = Math.max.apply(null, wordHeights);
  return (max * word.length);

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

  const word = readLine();

  let result = designerPdfViewer(h, word);

  ws.write(result + '\n');

  ws.end();
}