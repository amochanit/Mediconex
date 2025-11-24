// app.js - minimal interactions
document.addEventListener('DOMContentLoaded', () => {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', ()=> {
    nav.classList.toggle('open');
  });

  // contact form (no backend by default)
  const form = document.getElementById('contact-form');
  const result = document.getElementById('contact-result');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || 'Friend';
    // For a real site, POST to an endpoint (Netlify Functions, GitHub Actions, or backend)
    result.textContent = `Thanks ${name}! Your message is noted. (This demo does not send emails.)`;
    form.reset();
  });
});
