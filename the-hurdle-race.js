'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
})

function readLine() {
  return inputString[currentLine++];
}

// complete the hurdleRace function below.
// k is the height dan can jump naturally.
// height is an array of integers denoting the heights of each hurdle.
function hurdleRace(k, height) {
  let heighest = Math.max.apply(null, height);
  if ((heighest - k) > 0) {
    return (heighest - k);
  } else {
    return 0;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(' ');

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const height = readLine().split(' ').map(heightTemp => parseInt(heightTemp, 10));

  let result = hurdleRace(k, height);

  ws.write(result + '\n');

  ws.end();
}