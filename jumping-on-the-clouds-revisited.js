// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
  let e = 100;
  let i = k;
  let home = false;
  while (!home) {
    c[Math.min(i % c.length, i)] === 1 ? e -= 3 : e -= 1;
    if (i % c.length === 0) home = true;
    i += k;
  }
  return e;
}

c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
k = 3;

console.log(jumpingOnClouds(c, k));