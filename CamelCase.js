function camelcase(s) {
  let words = 1;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toUpperCase()) {
      words++;
    }
  }
  
  return words;
}

const s = 'saveChangesInTheEditor';

/* --------------------------------------------------------------------------------------------- */

console.log(camelcase(s));