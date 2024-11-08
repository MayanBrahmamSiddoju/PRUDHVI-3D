// JavaScript code (updated)
const menuToggle = document.getElementById("menu-toggle");
const menuBar = document.getElementById("menu-bar");
const topicList = document.getElementById("topic-list");

let isMenuBarVisible = false; // Variable to track the state of the menu bar

// Function to toggle the menu bar visibility
function toggleMenuBar() {
  if (isMenuBarVisible) {
    menuBar.classList.remove("active");
    topicList.style.display = "none";
  } else {
    menuBar.classList.add("active");
  }
  isMenuBarVisible = !isMenuBarVisible;
}

// Toggle the active class and menu bar visibility when the menu toggle is clicked

// Add a click event listener to the "TOPIC" button
document.getElementById("menu-item-1").addEventListener("click", () => {
  // Toggle the display of the topic list
  window.location.href = "template.html";
});

// Navigate to different pages when menu items are clicked
document.getElementById("menu-item-2").addEventListener("click", () => {
  window.location.href = "foresttemplate.html";
});

document.getElementById("menu-item-3").addEventListener("click", () => {
  window.location.href = "C.html";
});

