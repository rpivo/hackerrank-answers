fun bonAppetit(bill: Array<Int>, k: Int, b: Int): Unit {
  var list = bill.toMutableList()
  list.removeAt(k)
  val remainder = b - (list.sum() / 2)
  if (remainder == 0) println("Bon Appetit") else println(remainder)
}