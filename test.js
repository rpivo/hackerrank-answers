function staircase(n) {
  let returnString = '';
  let space = ' ';
  let hashtag = '#';
  for(i = n; i > 0; i--) {
    returnString += `${space.repeat(i - 1)}${hashtag.repeat(n - (i - 1))}`;
    i > 1 && (returnString += `\n`);
  }
  return returnString;
}

console.log(staircase(5));