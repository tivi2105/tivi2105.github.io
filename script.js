// Simple form alert (you can expand this to integrate with Formspree, EmailJS, etc.)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for reaching out! I’ll get back to you soon.');
  this.reset();
});
