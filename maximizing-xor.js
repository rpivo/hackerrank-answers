// Complete the maximizingXor function below.
function maximizingXor(l, r, max = 0, xor) {
  for (let i = l; i <= r; i++) {
    for (let j = l; j <= r; j++) {
      xor = i ^ j;
      if (xor > max) max = xor;
    }
    l++;
  }
  return max;
}

console.log(maximizingXor(11, 100));