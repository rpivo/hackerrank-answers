fun angryProfessor(k: Int, a: Array<Int>): String {
    var students = 0
    for (student in a) {
        if (student < 1) students += 1
    }
    return if (students >= k) "NO" else "YES"
}