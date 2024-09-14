// Function to toggle between light and dark modes
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");
  
    body.classList.toggle("dark-mode");
  
    if (body.classList.contains("dark-mode")) {
      themeIcon.src = "asserts/moon.png"; // Switch to moon icon in dark mode
    } else {
      themeIcon.src = "asserts/sun.png";  // Switch to sun icon in light mode
    }
  }
  
  // Menu toggle for mobile (if applicable)
  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  }
  