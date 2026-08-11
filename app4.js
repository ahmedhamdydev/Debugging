function getHighestGrade(grades) {
  let max = 0;

  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > max) {
      max = grades[i];
    }
  }

  return max;
}

console.log(getHighestGrade([-10, -50, -90]));