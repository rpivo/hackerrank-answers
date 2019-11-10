// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  return s.split('').reduce((acc, curr, idx, src) => {
    if (idx === 0) return acc;
    if (curr === src[idx - 1]) return acc += 1;
    return acc;
  }, 0);
}

console.log(alternatingCharacters('AAABBB'));