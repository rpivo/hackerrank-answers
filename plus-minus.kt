fun plusMinus(arr: Array<Int>): Unit {
    val negatives = mutableListOf<Int>()
    val positives = mutableListOf<Int>()
    val zeros = mutableListOf<Int>()
    for (number in arr) {
        when {
            number < 0 -> negatives.add(number)
            number > 0 -> positives.add(number)
            number == 0 -> zeros.add(number)
        }
    }
    println(String.format("%.6f", positives.size.toDouble() / arr.size).toDouble())
    println(String.format("%.6f", negatives.size.toDouble() / arr.size).toDouble())
    println(String.format("%.6f", zeros.size.toDouble() / arr.size).toDouble())
}