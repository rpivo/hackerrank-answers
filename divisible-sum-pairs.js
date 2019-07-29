ar = [1, 3, 2, 6, 1, 2];
n = 6;
k = 3;

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let outer = 0; outer < n; outer++) {
    for (let inner = 0; inner < n; inner++) {
      if (outer !== inner && outer < inner && (ar[outer] + ar[inner]) % k === 0) {
        count += 1;
      }
    }
  }
  return count;
}

divisibleSumPairs(n, k, ar);