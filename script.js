// Appointment form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("appointmentForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Appointment submitted successfully!");
    });
  }
});

// Symptom Checker
let step = 0;
const questions = [
  "Do you have a fever?",
  "Do you have a sore throat?",
  "Are you feeling tired?",
  "Are you experiencing a cough?"
];

function nextQuestion(answer) {
  step++;
  const question = document.getElementById("question");
  if (step < questions.length) {
    question.textContent = questions[step];
  } else {
    question.textContent = "Based on your answers, please consult a doctor.";
  }
}
