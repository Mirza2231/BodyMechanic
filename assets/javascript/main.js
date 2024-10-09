const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    // Toggle mobile menu visibility
    mobileMenu.classList.toggle('hidden');
    // Hide desktop menu
    menu.classList.add('hidden');
  });

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.classList.remove("hidden");
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.add("hidden");
    scrollToTopBtn.classList.remove("show");
  }
};

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // This enables smooth scrolling
  });
});
