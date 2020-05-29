fun birthdayCakeCandles(ar: Array<Int>): Int {
  val tallest = ar.max()
  val total = ar.count { it == tallest }
  return total
}