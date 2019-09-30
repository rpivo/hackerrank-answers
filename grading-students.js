function gradingStudents(grades) {
  grades = grades.map((grade) => {
    if (grade < 38) return grade;
    let digit = Number((grade + '')[1]);
    if (digit === 9 || digit === 4) return grade + 1;
    if (digit === 8 || digit === 3) return grade + 2;
    return grade;
  });
  return console.log(grades);
}

let grades = [73, 67, 38, 33];

gradingStudents(grades);