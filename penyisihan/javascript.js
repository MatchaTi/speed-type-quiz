function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

document.getElementById("toggleBtn").addEventListener("click", () => {
  toggleVisibility("content");
});