const question = document.getElementById("question");
const log = document.getElementById("log");
const questionNum = Number(question.dataset.number);
console.log(questionNum);

function addNextButton() {
  const questionNum = Number(question.dataset.number);
  const nextButtonParent = document.getElementById("next-button-parent");
  const nextButton = `<a href="q${questionNum + 1}.html">
  <button class="btn next-btn">Next Question</button>
  </a>`;
  nextButtonParent.innerHTML = nextButton;
  console.log({ nextButtonParent, questionNum, nextButtonParent });
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
        addNextButton();
      }
      if (entry[1] === "no") {
        localStorage.setItem(questionNum, 0);
        output = "Sorry, that is not the right answer";
        addNextButton();
      }
      console.log(localStorage.getItem(questionNum));
    }
    log.innerText = output;
    localStorage.clear();
    e.preventDefault();
  },
  false
);
