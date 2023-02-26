//Declare studentList Array
const studentList = [
      {
          firstName: "Allan",
          lastName: "Able",
          scores: [95, 85, 92, 98]
      },
      {
          firstName: "Amy",
          lastName: "Alexander",
          scores: [80, 88, 100]
      },
      {
          firstName: "Betty",
          lastName: "Barns",
          scores: [70, 80, 90, 100]
      },
      {
          firstName: "Bob",
          lastName: "Bones",
          scores: [75, 85, 95, 85]
      },
      {
          firstName: "Cindy",
          lastName: "Chase",
          scores: [95, 90, 92, 98]
      },
      {
          firstName: "Charles",
          lastName: "Chips",
          scores: [88, 99, 90]
      },
  ];
  // TO DO - Write higher order functions / There are many solutions

  //Declare cLastNameResults.  Use functions and map a new array of objects
  
  const cLastNameResults = []
  for (const student of studentList) {
    if (student.lastName.startsWith("C")) {
      let scoreSum = 0
      for (const score of student.scores) {
        scoreSum += score
      }
      const avgScore = scoreSum/student.scores.length
      let min = student.scores[0]
      let max = student.scores[0]
      for (i = 1; i < student.scores.length; i++) {
        if (student.scores[i] < min) {
          min = student.scores[i]
      }
        if (student.scores[i] > max) {
          max = student.scores[i]
      }
    }
   cLastNameResults.push({
    firstName: student.firstName,
    lastName: student.lastName,
    minScore: min,
    maxScore: max,
    avgScore: avgScore,
   });
  }
  }
console.log(cLastNameResults)