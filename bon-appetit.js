// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  bill.splice(k, 1);
  const total = bill.reduce((a, b) => a + b, 0);
  return (total / 2) === b ? console.log('Bon Appetit') : console.log((b - (total / 2)));
}

const bill = [3, 10, 2, 9];
k = 1;
b = 12;

bonAppetit(bill, k, b);