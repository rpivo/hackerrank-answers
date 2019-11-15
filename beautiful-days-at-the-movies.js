function beautifulDays(i, j, k) {
  let numDays = 0;
  for (let index = i; index <= j; index++) {
    let mirrorOfIndex = +(index.toString().split('').reverse().join(''));
    if ((index - mirrorOfIndex) % k === 0) numDays += 1;
  }
  return numDays;
}

console.log(beautifulDays(20, 23, 6));