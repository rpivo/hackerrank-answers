// Complete the insertionSort2 function below.
function insertionSort2(n, arr, temp, sub, indexOfNextHighest) {
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i + 1];
      sub = arr.slice(0, i + 1);
      indexOfNextHighest = sub.indexOf(Math.min(...sub.filter(num => num > temp)));
      arr.splice(i + 1, 1);
      arr.splice(indexOfNextHighest, 0, temp);
    }
    console.log(arr.join(' '));
  }
}

const length = 9;
const numbers = [9, 8, 6, 7, 3, 5, 4, 1, 2];

insertionSort2(length, numbers);