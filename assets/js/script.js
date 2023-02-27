// const questions = document.querySelectorAll(".questions__question-box");
// if (questions) {
//   questions.forEach((question) => {
//     question.addEventListener("click", () => {
//       const active = document.querySelector(".questions__question-box.active");
//       if (active && active !== question) {
//         active.classList.toggle("active");
//         active.nextElementSibling.style.maxHeight = 0;
//       }
//       question.classList.toggle("active");
//       const answer = question.nextElementSibling;
//       if (question.classList.contains("active")) {
//         answer.style.maxHeight = answer.scrollHeight + "px";
//       } else {
//         answer.style.maxHeight = 0;
//       }
//     });
//   });

//   if (document.querySelector(".questions__question-box.active")) {
//     let first = document.querySelector(".questions__question-box.active");
//     let second = first.nextElementSibling;
//     second.style.maxHeight = second.scrollHeight + "px";
//   }
// }

let question = document.querySelectorAll(".drop-down__before-box");

question.forEach((question) => {
  question.addEventListener("click", (event) => {
    const active = document.querySelector(".drop-down__before-box.active");
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

const toggleActive = (el) =>
  document.getElementById(el).classList.toggle("active");

const addActive = (el) => document.getElementById(el).classList.add("active");
const removeActive = (el) =>
  document.getElementById(el).classList.remove("active");

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

// select state

const stateSelector = document.querySelector(".state-list");

stateSelector.addEventListener("change", () => {
  const stateEl = document.getElementById(stateSelector.value);
  stateEl.parentNode.classList.toggle("active");
  stateEl.scrollIntoView();
});

// updated states

const toggles = document.querySelectorAll(".state-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
