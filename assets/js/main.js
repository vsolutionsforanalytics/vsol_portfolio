// V Solutions — shared site behaviour

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Contact form (placeholder handler — wire up to Formspree/EmailJS)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      // TODO: replace with a real Formspree/EmailJS endpoint before launch.
      // Example (Formspree): change the form's action to
      // https://formspree.io/f/your-id and remove this preventDefault handler.
      status.textContent = 'Thanks — your message has been noted. We\'ll get back to you within one business day.';
      status.style.color = '#1E56D6';
      form.reset();
    });
  }
});
