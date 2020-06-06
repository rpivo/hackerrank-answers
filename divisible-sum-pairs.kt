fun divisibleSumPairs(n: Int, k: Int, ar: Array<Int>): Int {
  var count = 0
  for (i in 0..ar.size - 1) {
    for (j in 0..i - 1) {
      if ((ar[i] + ar[j]) % k == 0) count++ 
    }
  }
  return count
}