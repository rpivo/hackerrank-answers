function diagonalDifference(arr) {
  let primary = 0;
  let secondary = 0;
  arr.forEach((a, index) => {
      primary += a[index];
      secondary += a[a.length - (index + 1)];
  });
  return Math.abs(primary - secondary);
}