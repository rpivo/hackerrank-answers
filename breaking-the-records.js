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
 * require(). The process object is an instance of EventEmitter. It's constantly listening to the current
 * Node process.
 * 
 * all EventEmitters emit the event 'newListener' when new listeners are added and 'removeListener'
 * when existing listeners are removed.
 * 
 * the process.stdin property returns a stream connected to stdin (fd 0). It is a net.Socket (which
 * is a Duplex stream) unless fd 0 refers to a file, in which case it is a Readable stream.
 * 
 * the general definition of a duplex stream is one which is both readable and writable, similar to
 * a `Transform` stream. However, a Duplex stream is most often usually referring to a stream which
 * actually has two full independent streams embedded in it, one flowing out and one flowing in.
 * 
 * (fd 0) is a file descriptor. stdin and stderr get assigned a file descriptor. File
 * descriptors represent a reference to an opened file. So, the process object has an event
 * listener that is constantly listening to the file descriptor fd 0, which is stdin.
 * 
 * the net module (as in the reference to net.Socket) provides an asynchronous network API for
 * creating stream-based TCP or IPC servers (net.createServer()) and clients
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
 * net.Socket is an abstraction of a TCP socket or a streaming IPC endpoint. A net.Socket is also a
 * duplex stream, so it can be both readable and writable, and it is also an EventEmitter.
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
 * declared above as let inputString = '';  . So, all this is doing is concatenating an old
 * string with the new string that is streamed in from stdin.
 */
process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

/*
 * if the listening on the stdin stream ends inside the Node process, then this function is called.
 * Nothing is passed into it. it's a callback function that is called when the end of the stream is
 * reached.
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
 * 
 * then, we split inputString into an array of substrings divided up by line breaks with 
 * split('\n').
 * 
 * then, we run map() on each of these individual items within the array. For each one of these
 * items, we perform the same regular expression replacement on them, removing any whitespace at
 * the end of the string.
 * 
 * once that's complete, we run main().
 */
process.stdin.on('end', function() {
  inputString = inputString.replace(/\s*$/, '')
  .split('\n')
  .map(str => str.replace(/\s*$/, ''));

  main();
});

/*
 * using initialized local variables, returns a single item inside the inputString array. currentLine
 * is incremented and then is used as the index value for the array inputString. 
 */
function readLine() {
  return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {

}

/*
 * the path to the file the stream is writing to is specified in the first argument to
 * fs.createWriteStream(). If path is passed as a string, then ws.path will be a string. 
 * If path is passed as a Buffer, then ws.path will be a Buffer.
 * 
 * the function fs.createWriteStream() creates a writeable stream in a very simple manner. After a
 * call to fs.createWriteStream() with the filepath, you have a writeable stream to work with. The
 * response (as well as the request) objects are streams.
 * 
 * the process.env global variable is injected by the Node at runtime for your application to use
 * and it represents the state of the system environment your application is in when it starts. For
 * example, if the system has a PATH variable set, this will be made accessible to you through
 * process.env.PATH which you can use to check where binaries are located and make external calls
 * to them if required.
 * 
 * the process.env property returns an object containing the user environment.
 * 
 * so, ws is the variable we are storing to write the stdin stream to.
 * 
 * the parseInt() function parses a string argument and returns an integer specified radix (the
 * base in mathematical numeral systems).
 * 
 * the first parameter passed into parseInt is the function readLine(), which reads an item in the
 * inputString array at an initialized index variable and then increments that index.
 * 
 * parseInt() takes this string that was read in and converts it into a base-10 number. Then it
 * stores this number into n.
 * 
 * n takes in the first integer typed. This represents a count of how many number values will
 * be in the second line of input.
 * 
 * scores is the second line of input. It calls readLine(), and then splits this string by spaces with
 * split(' '), creating an array of values. Then, it does map() on this array, running a base-10
 * parseInt() on each of the values, converting each of them from strings to numbers.
 * 
 * finally, result runs the function breakingRecords on the scores array.
 * 
 * the write() method writes some data to the stream, and calls the supplied callback once the data
 * has been fully handled. If an error occurs, the callback may or may not be called with the error
 * as its first argument. To reliably detect write errors, add a listener for the 'error' event.
 * 
 * calling the end() method signals that no more data will be written to the writable stream (ws,
 * in this case). The optional chunk and encoding arguments allow one final additional chunk of
 * data to be written immediately before closing the stream. If provided, a callback function is
 * attached as a listener for the 'finish' event.
 */
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

  const result = breakingRecords(scores);

  ws.write(result.join(' ') + '\n');

  ws.end();
}