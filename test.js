array = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

function breakingRecords(scores) {
  let high, low;
  let highRecord = -1;
  let lowRecord = -1;
  scores.forEach((score) => {
    if (score > high || high === undefined) {
      high = score;
      highRecord++;
    }
    if (score < low || low === undefined) {
      low = score;
      lowRecord++;
    }
  });
  let records = [highRecord, lowRecord];
  return records;
}

breakingRecords(array);