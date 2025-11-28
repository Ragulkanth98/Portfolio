// Responsive Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navbarMenu = document.getElementById("navbar-menu");

menuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  menuToggle.classList.toggle("open");

  menuToggle.innerHTML = menuToggle.classList.contains("open")
    ? "<i class='bx bx-x'></i>"
    : "<i class='bx bx-menu'></i>";
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load theme
const savedTheme = localStorage.getItem("portfolio_theme");

root.setAttribute("data-theme", savedTheme || "light");
themeToggle.checked = savedTheme === "dark";

// Toggle theme
themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "dark" : "light";
  root.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio_theme", theme);
});
