fun diagonalDifference(arr: Array<Array<Int>>): Int {
    var topLeftToBottomRight: Int = 0
    var topRightToBottomLeft: Int = 0
    for (x in 0..arr.size - 1) {
        topLeftToBottomRight += arr[x][x]
        topRightToBottomLeft += arr[x][arr.size - (x + 1)]
    }
    return Math.abs(topLeftToBottomRight - topRightToBottomLeft)
}