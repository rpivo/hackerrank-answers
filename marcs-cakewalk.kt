fun marcsCakewalk(calorie: Array<Int>): Long {
    var miles: Double = 0.0
    calorie.sort()
    calorie.reverse()
    for (index in 0..calorie.size - 1) {
        miles += (2.toDouble().pow(index) * calorie[index])
    }
    return miles.toLong()
}