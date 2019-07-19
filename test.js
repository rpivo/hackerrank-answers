// let alphabet = {
//   'a': 0,
//   'b': 1,
//   'c': 2,
//   'd': 3,
//   'e': 4,
//   'f': 5,
//   'g': 6,
//   'h': 7,
//   'i': 8,
//   'j': 9,
//   'k': 10,
//   'l': 11,
//   'm': 12,
//   'n': 13,
//   'o': 14,
//   'p': 15,
//   'q': 16,
//   'r': 17,
//   's': 18,
//   't': 19,
//   'u': 20,
//   'v': 21,
//   'w': 22,
//   'x': 23,
//   'y': 24,
//   'z': 25
// };

let heights = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];

let word = 'zaba';

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

  for (index = 0; index < word.length; index++) {
    wordHeights.push(h[alphabet[word.charAt(index)]]);
  }
  let max = Math.max.apply(null, wordHeights);
  console.log(max * word.length);
}

designerPdfViewer(heights, word);