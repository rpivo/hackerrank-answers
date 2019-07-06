let numbers = [1, 2, -1, -2, 0];

function plusMinus(arr) {
  let positive = [];
  let negative = [];
  let zero     = [];
  numbers.forEach((number) => {
    number < 0 ? negative.push(number) :
    number > 0 ? positive.push(number) :
    zero.push(number);
  });
  return `${positive.length / arr.length}\n${negative.length / arr.length}\n${zero.length / arr.length}`;
}

console.log(plusMinus(numbers));