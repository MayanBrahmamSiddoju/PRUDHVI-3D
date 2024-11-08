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
  window.location.href = "findex2010.html";
});

// Navigate to different pages when menu items are clicked
document.getElementById("menu-item-2").addEventListener("click", () => {
  window.location.href = "findex2011.html";
});

document.getElementById("menu-item-3").addEventListener("click", () => {
  window.location.href = "findex2012.html";
});

// Add event listeners for Menu Items 4 and 5 (update the page URLs as needed)
document.getElementById("menu-item-4").addEventListener("click", () => {
  window.location.href = "findex2013.html";
});

document.getElementById("menu-item-5").addEventListener("click", () => {
  window.location.href = "findex2014.html";
});
document.getElementById("menu-item-6").addEventListener("click", () => {
    // Toggle the display of the topic list
    window.location.href = "findex2015.html";
  });
  
  // Navigate to different pages when menu items are clicked
  document.getElementById("menu-item-7").addEventListener("click", () => {
    window.location.href = "findex2016.html";
  });
  
  document.getElementById("menu-item-8").addEventListener("click", () => {
    window.location.href = "findex2017.html";
  });
  
  // Add event listeners for Menu Items 4 and 5 (update the page URLs as needed)
  document.getElementById("menu-item-9").addEventListener("click", () => {
    window.location.href = "findex2018.html";
  });
  
  document.getElementById("menu-item-10").addEventListener("click", () => {
    window.location.href = "findex2019.html";
  });
  document.getElementById("menu-item-11").addEventListener("click", () => {
    window.location.href = "findex2020.html";
  });