// Menu toggle for mobile view
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('primary-navigation');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('show');
});

// Project filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    projects.forEach(project => {
      if(filter === 'all' || project.getAttribute('data-category') === filter) {
        project.style.display = '';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

// Contact form validation
const form = document.getElementById('contact-form');
const formMessage = form.querySelector('.form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = '';

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name) {
    formMessage.textContent = 'Veuillez entrer votre nom.';
    form.name.focus();
    return;
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    formMessage.textContent = 'Veuillez entrer un email valide.';
    form.email.focus();
    return;
  }

  if (!message) {
    formMessage.textContent = 'Veuillez entrer un message.';
    form.message.focus();
    return;
  }

  formMessage.style.color = 'green';
  formMessage.textContent = 'Message envoyé avec succès!';
  form.reset();
});
