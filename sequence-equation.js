function permutationEquation(p) {
  const arr = [];
  p.forEach(num => arr.push(p.indexOf(p.indexOf(p.indexOf(num) + 1) + 1) + 1));
  return arr;
}

const p = [4, 3, 5, 1, 2];

permutationEquation(p);