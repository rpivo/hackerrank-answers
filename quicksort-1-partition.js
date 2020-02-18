const quickSort = (arr) => {
  let
    pivot = arr[0], 
    lessThan = [],
    greaterThan = [];
  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? lessThan.push(arr[i]) : greaterThan.push(arr[i]);
  }
  return `${lessThan.join(' ')} ${pivot} ${greaterThan.join(' ')}`;
};

console.log(quickSort([4, 5, 3, 7, 2]));