// Complete the utopianTree function below.
function utopianTree(n) {
  let height = 1;
  let spring = true;
  while(n > 0) {
    if (spring) {
      height = height + height;
    } else height += 1;
    spring = !spring;
    n--;
  }
  return height;
}

console.log(utopianTree(4));