function grade(grade) {
  var grade_char;

  if (grade >= 90) {
    
    grade_char = "A";

  } else if (grade >= 80 && grade <= 89) {

    grade_char = "B";

  } else if (grade >= 70 && grade <= 79) {

    grade_char = "C";

  } else if (grade >= 60 && grade <= 69) {

    grade_char = "D";

  } else {

    grade_char = "E";

  }

  console.log(grade_char);
}

grade(10) // output E
grade(80) // output B
grade(90) // output A
