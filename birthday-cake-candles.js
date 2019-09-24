function birthdayCakeCandles(ar) {
  const max = Math.max(...ar)
  ar = ar.filter(x => x === max);
  console.log(ar.length);
}

const ar = [3, 2, 1, 3];

birthdayCakeCandles(ar);