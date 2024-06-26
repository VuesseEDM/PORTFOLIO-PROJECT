document
  .querySelector(".menu-toggle")
  .addEventListener("click", function (event) {
    toggleMenu(event);
  });
function toggleMenu(event) {
  if (event) {
    event.preventDefault();
  }

  var mobileMenu = document.querySelector(".mobile-menu");
  var menuToggle = document.querySelector(".menu-toggle");

  mobileMenu.classList.toggle("show");
  menuToggle.classList.toggle("active");
}

document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);

function validateSubscribe() {
  var emailInput = document.getElementById("email");
  var isValid = validateEmail(emailInput.value);

  if (!isValid) {
    alert("Fill in all the fields of the registration form correctly.");
  }

  return isValid;
}

function submitFeedback() {
  document.getElementById("registration-message").innerHTML =
    "<p>Thanks for your feedback!</p>";
  document.getElementById("feedback-form").reset();
}

function submitSubscribe() {
  if (validateSubscribe()) {
    var subscriptionMessage = document.getElementById("subscription-message");
    subscriptionMessage.innerHTML =
      "<p>Thanks for subscribing to the newsletter!</p>";
    subscriptionMessage.style.display = "block";
    document.getElementById("feedback-form").reset();
  }
}

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function openProjectPage() {
  var curriculumPath = "https://vuesseedm.github.io/HOTEL-POMELIA/";

  window.open(curriculumPath, "_blank");
}

function openPortfolio() {
  var curriculumPath = "https://vuesseedm.github.io/PORTFOLIO-PROJECT/";

  window.open(curriculumPath, "_blank");
}

function openWork() {
  var curriculumPath = "https://vuesseedm.github.io/WORK-IN-PROGRESS/";

  window.open(curriculumPath, "_blank");
}

function openGame() {
  var curriculumPath = "https://vuesseedm.github.io/COSMIC-COUNTER-X/";

  window.open(curriculumPath, "_blank");
}

function openCyber() {
  var curriculumPath = "https://vuesseedm.github.io/CyberChronicle/";

  window.open(curriculumPath, "_blank");
}

function openQuiz() {
  var curriculumPath = "https://trivia-quiz-challenge.onrender.com/";

  window.open(curriculumPath, "_blank");
}

function openTemperature() {
  var curriculumPath = "https://vuesseedm.github.io/TEMPERATURE-CONVERTER-/";

  window.open(curriculumPath, "_blank");
}
