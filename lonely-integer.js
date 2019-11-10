// Complete the lonelyinteger function below.
function lonelyinteger(a) {
  const b = new Set(a);
  for (let setNum of b) { if (a.filter(arrNum => arrNum === setNum).length === 1) return setNum; }
}

console.log(lonelyinteger([0, 0, 1, 2, 1]));