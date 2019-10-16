// Complete the findDigits function below.
function findDigits(n, divisors = 0) {
  n.toString().split('').map(Number).forEach(num => n % num === 0 && divisors++);
  return divisors;
}

const num = 1012;

console.log(findDigits(num));