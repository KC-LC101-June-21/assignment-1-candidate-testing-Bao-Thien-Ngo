const input = require('readline-sync');

let candidateName = "";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space?","True or false: 5 kilometer == 5000 meters?","(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "true","40","Trajectory","3"];
let candidateAnswers = [];
let numQ = questions.length;
let i = 0;

function askForName() {

  let candidateName = input.question("What is candidate\'s name? ")
  return candidateName;

}

function askQuestion() {

  while (i < questions.length) {

    console.log(`${i + 1}) ${questions[i]}`);
    let candidateAnswer = input.question("Your answer: ");
    console.log("Correct answer: " + correctAnswers[i] + "\n")
    i++;
    candidateAnswers.push(candidateAnswer);

  }

}

function gradeQuiz() {

  let numCorrect = 0;
  for (let i = 0; i < correctAnswers.length; i++) {

    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numCorrect += 1;

    }
  }

  let percent = (numCorrect / numQ) * 100;
  console.log(`>>> Overal Grade: ${percent}% (${numCorrect} of ${numQ} correct) <<<`)

  if (percent >= 80) {
    console.log(">>> Status: Pass <<<")
  } else {
    console.log(">>> Status: Failed <<<")
  }

}

function runProgram() {

  candidate_Name = askForName();
  console.log("Candidate Name: " + candidate_Name + "\n")
  askQuestion();
  gradeQuiz(this.candidateAnswers);

}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};