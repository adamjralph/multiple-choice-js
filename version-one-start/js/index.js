const question = document.getElementById("question");
const log = document.getElementById("log");

question.addEventListener(
  "submit",
  (e) => {
    const data = new FormData(question);
    let questionNum = question.dataset.number;
    let output = "";
    for (const entry of data) {
      if (entry[1] === "correct") {
        localStorage.setItem(questionNum, 1);
        output = `That is the correct answer!`;
      } else {
        localStorage.setItem(questionNum, 0);
        output = "Sorry, that is not the right answer";
      }
    }
    log.innerText = output;
    e.preventDefault();
  },
  false
);
