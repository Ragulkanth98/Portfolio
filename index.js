// Menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navbarMenu = document.getElementById("navbar-menu");

menuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme or system preference
const savedTheme = localStorage.getItem("portfolio_theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  themeToggle.checked = savedTheme === "dark";
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", prefersDark ? "dark" : "light");
  themeToggle.checked = prefersDark;
}

// Toggle theme on checkbox change
themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "dark" : "light";
  root.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio_theme", theme);
});
