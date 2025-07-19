function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show popup message
function showPopup(message) {
  const popup = document.getElementById("popup");
  popup.textContent = message;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

// Handle recommendation submission
document.getElementById("recommendation-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("new-recommendation");
  const recommendation = input.value.trim();
  if (recommendation) {
    const list = document.getElementById("recommendation-list");
    const div = document.createElement("div");
    div.className = "recommendation";
    div.textContent = recommendation;
    list.appendChild(div);
    showPopup("Thank you for leaving a recommendation!");
    input.value = "";
  }
});
