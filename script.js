const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const body = document.body;

navToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
  body.classList.toggle('nav-open');
});

siteNav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    siteNav.classList.remove('open');
    body.classList.remove('nav-open');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
