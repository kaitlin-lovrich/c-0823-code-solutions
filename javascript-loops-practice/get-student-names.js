/* exported getStudentNames */
function getStudentNames(students) {
  // debugger;
  const result = [];
  for (let i = 0; i < students.length; i++) {
    result.push(students[i].name);
  }
  return result;
}
