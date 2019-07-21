'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('tf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

    main();
})

function readLine() {
  return inputString[currentLine++];
}

// complete the viralAdvertising function below
function viralAdvertising(n) {
  let shared = 5;
  let liked = 0;
  for (let index = 1; index < n + 1; index++) {
    liked += Math.floor(shared / 2);
    shared = (Math.floor(shared / 2) * 3);
  }
  return liked;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let result = viralAdvertising(n);

  ws.write(result + '\n');

  ws.end();
}