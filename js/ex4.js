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

studentList.forEach(student => {
  student.scores.forEach((score, index) => student.scores[index] += 5);
})
console.log (studentList);

studentList.forEach(student => {
  let scoreSum = 0;
  for (const score  of student.scores) {
    scoreSum += score;
    }
    const avgScore =  scoreSum/student.scores.length;
    student.scores.push(avgScore);
    });

    studentList.forEach(student => {
      console.log(`Full name (last, first): ${student.lastName}, ${student.firstName}
      Updated scores are: ${student.scores}`)
      });