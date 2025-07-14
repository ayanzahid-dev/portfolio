// Smooth fade-in on scroll
const fadeElems = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

fadeElems.forEach(elem => observer.observe(elem));

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name'),
        email = document.getElementById('email'),
        message = document.getElementById('message'),
        msg = document.getElementById('formMsg');

  if (!name.value || !email.value || !message.value) {
    msg.textContent = 'Please fill all fields.';
    msg.style.color = 'red';
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    msg.textContent = 'Enter a valid email.';
    msg.style.color = 'red';
    return;
  }

  msg.textContent = 'Message sent successfully!';
  msg.style.color = 'green';

  // Clear form
  name.value = '';
  email.value = '';
  message.value = '';
});