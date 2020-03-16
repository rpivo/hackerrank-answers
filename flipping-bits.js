function flippingBits(N) {
  let converted = N.toString(2).split('');
  while (converted.length < 32) converted.unshift('0');
  return parseInt(converted.map(digit => +!Number(digit)).join(''), 2);
}

const num = 2147483647;

console.log(flippingBits(num));