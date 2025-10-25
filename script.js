// Simple fade-in animation on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});
