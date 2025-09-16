// Show a message when button is clicked
function showMessage() {
  alert("Hello! Thanks for clicking the button. 🚀");
}

// Dark/Light theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
