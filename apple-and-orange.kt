fun countApplesAndOranges(s: Int, t: Int, a: Int, b: Int, apples: Array<Int>, oranges: Array<Int>): Unit {
    var appleCount = 0
    var orangeCount = 0
    for (apple in apples) {
        if (apple + a >= s && apple + a <= t) appleCount += 1
    }
    for (orange in oranges) {
        if (orange + b >= s && orange + b <= t) orangeCount += 1
    }
    println(appleCount)
    println(orangeCount)
}