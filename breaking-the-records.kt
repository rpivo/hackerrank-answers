fun breakingRecords(scores: Array<Int>): Array<Int> {
  var newLows = 0
  var newHighs = 0
  var low = 0
  var high = 0
  for (i in 0..scores.size - 1) {
    when {
      i < 1 -> {
        low = scores[i]
        high = scores[i]
      }
      scores[i] > high -> {
        newHighs++
        high = scores[i]
      }
      scores[i] < low -> {
        newLows++
        low = scores[i]
      }
    }
  }
  return arrayOf(newHighs, newLows)
}