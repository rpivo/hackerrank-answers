fun staircase(n: Int): Unit {
  for (i in 1..n) {
    var spaceCount = n - i
        println(" ".repeat(spaceCount) + "#".repeat(i))
    }
}