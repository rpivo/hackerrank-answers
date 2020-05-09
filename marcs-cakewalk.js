function marcsCakewalk(calorie) {
    const descArr = calorie.sort((a, b) => b - a); 
    let miles = 0;
    for (let index = 0; index < descArr.length; index++) {
        miles += (Math.pow(2, index) * descArr[index]);
    }
    return miles;
}