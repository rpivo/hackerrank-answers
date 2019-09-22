function serviceLane(width, cases) {
  let results = [];
  cases.forEach(single => {
    results.push(Math.min(...width.slice(single[0], single[1] + 1)));
  });
  return results;
}

const width = [1, 2, 2, 2, 1];
const cases = [[2, 3], [1, 4], [2, 4], [2, 4], [2, 3]];

serviceLane(width, cases);
