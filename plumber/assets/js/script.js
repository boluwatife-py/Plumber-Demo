// Handle navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Only prevent default and handle smooth scroll for same-page links
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    // For links to other pages, let the default behavior happen
  });
});

// Mobile menu functionality
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBackdrop = document.querySelector(".mobile-menu-backdrop");
const body = document.body;

function closeMobileMenu() {
  mobileMenuToggle.classList.remove("active");
  mobileMenu.classList.remove("active");
  mobileMenuBackdrop.classList.remove("active");
  body.classList.remove("menu-open");
}

mobileMenuToggle.addEventListener("click", function (e) {
  e.stopPropagation(); // Prevent click from bubbling to document
  this.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  mobileMenuBackdrop.classList.toggle("active");
  body.classList.toggle("menu-open");
});

// Close mobile menu when clicking backdrop
mobileMenuBackdrop.addEventListener("click", closeMobileMenu);

// Close mobile menu when clicking a link
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("active") &&
    !mobileMenu.contains(e.target) &&
    !mobileMenuToggle.contains(e.target)
  ) {
    closeMobileMenu();
  }
});

// Close mobile menu when pressing escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
    closeMobileMenu();
  }
});
