const questions = document.querySelectorAll(".questions__question-box");
if (questions) {
  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const active = document.querySelector(".questions__question-box.active");
      if (active && active !== question) {
        active.classList.toggle("active");
        active.nextElementSibling.style.maxHeight = 0;
      }
      question.classList.toggle("active");
      const answer = question.nextElementSibling;
      if (question.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });

  if (document.querySelector(".questions__question-box.active")) {
    let first = document.querySelector(".questions__question-box.active");
    let second = first.nextElementSibling;
    second.style.maxHeight = second.scrollHeight + "px";
  }
}

const toggleActive = (el) =>
  document.getElementById(el).classList.toggle("active");

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
