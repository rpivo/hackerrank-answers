/*
 * ES5 strict mode prevents the use of undeclared variables. All modern browsers support strict
 * mode except <IE10.
 */
'use strict';

/*
 * the fs module provides an API for interacting with the file system in a manner closely modeled
 * around standard POSIX functions.
 */
const fs = require('fs');

/*
 * the process object is a global that provides information about, and control over, the current
 * Node.js process. as a global, it is always available to Node.js applications without using
 * require().
 */
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
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the aVeryBigSum function below
function a VeryBigSum(ar) {

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arCount = parseInt(readLine(), 10);

  const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

  let result = aVeryBigSum(ar);

  ws.end();
}