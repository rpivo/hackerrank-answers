// Complete the insertionSort2 function below.
function runningTime(n, arr, temp, sub, indexOfNextHighest, shift = 0) {
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i + 1];
      sub = arr.slice(0, i + 1);
      indexOfNextHighest = sub.indexOf(Math.min(...sub.filter(num => num > temp)));
      shift += Math.abs(indexOfNextHighest - (i + 1));
      arr.splice(i + 1, 1);
      arr.splice(indexOfNextHighest, 0, temp);
    }
  }
  return shift;
}

const length = 5;
const numbers = [2, 1, 3, 1, 2];

runningTime(length, numbers);