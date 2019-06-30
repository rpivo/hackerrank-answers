/*
 * ES5 strict mode prevents the use of undeclared variables. All modern browsers support strict
 * mode except pre-IE10.
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
 * so, the process object is an instance of EventEmitter -- it's constantly listening to the current
 * Node process.
 * 
 * the process.stdin property returns a stream connected to stdin (fd 0). It is a net.Socket (which
 * is a Duplex stream) unless fd 0 refers to a file, in which case it is a Readable stream.
 * 
 * (fd 0) is a file descriptor. stdin and stderr get assigned a file descriptor. File
 * descriptors represent a reference to an opened file. So, the process object has an event
 * listener that is constantly listening to the file descriptor fd 0, which is stdin.
 * 
 * the net module (as in the reference to net.Socket) provides an asynchronous network API for
 * creating stream-based TCP or ICP servers (net.createServer()) and clients
 * (net.createConnection()). It can be accessed using:
 * 
 * const net = require('net');
 * 
 * The net module provides you with an asynchronous network wrapper. It contains methods for
 * creating both servers and clients (called streams).
 * 
 * so, process.stdin property is a net.Socket. The net.Socket connection object is emitted when a
 * new connection is made. It's a stream of data. 
 * 
 * in "old" streams mode the stdin stream is paused by default, so one must call
 * process.stdin.resume() to read from it. process.stdin.resume() is essentially the way you
 * unpause the stream reading.
 * 
 * so, process.stdin.resume(); allows us to constantly read the stdin file for any changes. it's a
 * data connection that is constantly looking out for new data.
 */
process.stdin.resume();
// sets the encoding for accepted characters coming into stdin.
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

/*
 * the .on() function call registers a callback for the 'data' event. the callback function will be
 * invoked when data is available. The callback function takes in the input stream from stdin,
 * inputStdin, and passes it into the function { inputString += inputStdin; } . inputString is
 * declared above as { let inputString = ''; } . So, all this is doing is concatenating an old
 * string with the new string that is streamed in from stdin.
 */
process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

/*
 * if the listening on the stdin stream ends inside the Node process, then this function is called.
 * Nothing is passed into it.
 * 
 * it takes inputString, the variable where we kept concatenating new input data from stdin, and it
 * runs a replace() on it. We pass a RegExp to replace().
 * 
 * in the RegExp, the expression begins with / and ends with /. Everything between those two
 * characters is the regular expression.
 * 
 * in the regular expression, \s finds a whitespace character.
 * 
 * n* matches any string that contains zero or more occurrences of n.
 * 
 * so, the regular expression is matching for zero or more occurrences of whitespace.
 * 
 * in the regular expression, $ signifies the end of input.
 * 
 * so, the regular expression is matching for zero or more occurrences of whitespace at the end of
 * the input, and it replaces this value with '' (it effectively deletes the value).
 */
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