const question = document.getElementById("question");
const log = document.getElementById("log");
const questionNum = Number(question.dataset.number);
console.log(questionNum);

function enableNextButton() {
  const nextButton = document.querySelector("#next-btn");
  if (nextButton) {
    nextButton.removeAttribute("disabled");
  }
  false;
}

function disableEnterButton() {
  const enterButton = document.querySelector("#enter-btn");
  if (enterButton) {
    // disabled = "disabled";
    enterButton.setAttribute("disabled", "");
  }
  false;
}

question.addEventListener(
  "submit",
  (e, questionNum) => {
    const data = new FormData(question);
    let output = "";
    // console.log(localStorage.getItem(questionNum));
    if (localStorage.getItem(questionNum) === null) {
      console.log("Nothing selected");
      output = "Please select an answer";
    }
    for (const entry of data) {
      console.log(entry[1]);
      if (entry[1] === "correct") {
        localStorage.setItem(questionNum, 1);
        output = `That is the correct answer!`;
        enableNextButton();
        disableEnterButton();
      }
      if (entry[1] === "no") {
        localStorage.setItem(questionNum, 0);
        output = "Sorry, that is not the right answer";
        enableNextButton();
        disableEnterButton();
      }
      console.log(localStorage.getItem(questionNum));
    }
    if (localStorage.getItem(questionNum) === null) {
      // console.log("Nothing selected");
      output = "Please select an answer";
    }

    log.innerText = output;
    localStorage.clear();
    e.preventDefault();
  },
  false
);
