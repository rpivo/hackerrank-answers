fun hurdleRace(k: Int, height: Array<Int>): Int {
    val maxHurdle = height.max()!!
    return if (maxHurdle > k) maxHurdle - k else 0
}