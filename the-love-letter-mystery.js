// Complete the theLoveLetterMystery function below.
function theLoveLetterMystery(s) {
  let asciiCodes = s.split('').map(char => {
    return char.charCodeAt();
  });
  const midpoint = s.length % 2 === 0 ? s.length / 2 : Math.ceil(s.length / 2);
  let moves = 0;
  for (let i = 0; i < midpoint; i++) {
    if (asciiCodes[i] !== asciiCodes[asciiCodes.length - (i + 1)]) {
      moves += Math.abs(asciiCodes[i] - asciiCodes[asciiCodes.length - (i + 1)]);
    }
  }
  return moves;
}

console.log(theLoveLetterMystery('cba'));