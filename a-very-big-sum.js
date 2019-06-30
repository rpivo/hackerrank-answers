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
 * Node.js process. As a global, it is always available to Node.js applications without using
 * require(). The process object is an instance of EventEmitter.
 * 
 * the EventEmitter class is found in the events module:
 * 
 * const EventEmitter = require('events');
 * 
 * all EventEmitters emit the event 'newListener' when new listeners are added and 'removeListener'
 * when existing listeners are removed.
 * 
 * so, process object is an instance of EventEmitter -- it's constantly listening to the current
 * Node process.
 * 
 * the process.stdin property returns a stream connected to stdin (fd 0). It is a net.Socket (which
 * is a Duplex stream) unless fd 0 refers to a file, in which case it is a Readable stream.
 * 
 * (fd 0) is about file descriptors. stdin and stderr get assigned a file descriptor. File
 * descriptors represent a reference to an opened file. So, the process object has an event
 * listener that is constantly listening to the file descriptor fd 0, which is stdin.
 * 
 * in "old" streams mode the stdin stream is paused by default, so one must call
 * process.stdin.resume() to read from it. process.stdin.resume() is essentially the way you
 * unpause the stream reading.
 * 
 * so, process.stdin.resume(); allows us to constantly read the stdin file for any changes.
 */
process.stdin.resume();
// sets the encoding for accepted characters coming into stdin.
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