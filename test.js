function viralAdvertising(n) {
  let shared = 5;
  let liked = 0;
  for (let index = 1; index < n + 1; index++) {
    liked += Math.floor(shared / 2);
    shared = (Math.floor(shared / 2) * 3);
  }
  console.log(liked);
}

viralAdvertising(5); 