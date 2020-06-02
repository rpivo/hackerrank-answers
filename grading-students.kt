fun gradingStudents(grades: Array<Int>): Array<Int> {
  var list = mutableListOf<Int>()
  grades.forEach {
    val mod = it % 5
    val num = if (it > 37 && mod >= 3) it + (5 - mod) else it
    list.add(num)
  }
  return list.toTypedArray()
}