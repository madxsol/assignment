function scrollToMenu() {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("confirmation").classList.remove("hidden");
  this.reset();
});
