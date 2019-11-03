const countingSort = (arr, j = 0) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let count = new Array((max - min) + 1).fill(0);
  arr = arr.map(item => item - min);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
  for (let i = 0; i <= (max - min); i++) {
    while (count[i] > 0) {
      arr[j++] = i;
      count[i] -= 1;
    }
  }
  arr = arr.map(item => item + min);
  return arr;
}

const numbers = [19, 10, 12, 10, 24, 25, 22];

console.log(countingSort(numbers));