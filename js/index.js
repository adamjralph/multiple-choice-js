// const question = document.getElementById("question-1");
// const log = document.getElementById("log");

// var score = {};

// question.addEventListener(
//   "submit",
//   (e) => {
//     const data = new FormData(question);
//     let output = "";
//     console.log("Clicked!");
//     for (const entry of data) {
//       // localStorage.setItem(score);
//       if (entry[1] === "correct") {
//         score.q1 = "Correct";
//         output = `That is the correct answer! ${score.q1}`;
//       } else {
//         score.q1 = "Incorrect";
//         output = "sorry, that is not the right answer";
//       }
//     }
//     log.innerText = output;
//     e.preventDefault();
//   },
//   false
// );

const question = document.getElementById("question");
const log = document.getElementById("log");

var score = {};
// var score;

question.addEventListener(
  "submit",
  (e) => {
    const data = new FormData(question);
    let output = "";
    for (const entry of data) {
      if (entry[1] === "correct") {
        localStorage.setItem(1, 1);
        output = `That is the correct answer!`;
      } else {
        localStorage.setItem(1, 0);
        output = "Sorry, that is not the right answer";
      }
    }
    log.innerText = output;
    e.preventDefault();
  },
  false
);
