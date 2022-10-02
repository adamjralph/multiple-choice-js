const question = document.getElementById("question");
const log = document.getElementById("log");
const nextButtonParent = document.getElementById("next-button-parent");
let questionNum = Number(question.dataset.number);

const nextButton = `<a href="q${questionNum + 1}.html">
<button class="btn next-btn">Next Question</button>
</a>`;

question.addEventListener(
  "submit",
  (e, questionNum) => {
    const data = new FormData(question);
    let output = "";
    console.log(localStorage.getItem(questionNum));
    localStorage.clear();
    for (const entry of data) {
      if (entry[1] === "correct") {
        localStorage.setItem(questionNum, 1);
        output = `That is the correct answer!`;
      } else {
        localStorage.setItem(questionNum, 0);
        output = "Sorry, that is not the right answer";
      }
      console.log(localStorage.getItem(questionNum));
    }
    if (localStorage.getItem(questionNum) === null) {
      log.innerText = "Please select an answer";
    } else {
      nextButtonParent.innerHTML = nextButton;
    }
    log.innerText = output;
    e.preventDefault();
  },
  false
);
