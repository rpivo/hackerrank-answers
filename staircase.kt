fun staircase(n: Int): Unit {
  for (i in 1..n) {
    println(" ".repeat(spaceCount) + "#".repeat(n - i))
  }
}