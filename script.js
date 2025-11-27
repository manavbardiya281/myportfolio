// script.js - Professional Portfolio Interactions

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Scroll Reveal Animation
  const observerOptions = {
    threshold: 0.15, // Trigger when 15% of element is visible
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        // Optional: add a class 'visible' if you prefer CSS transitions over animations
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Select all elements with class 'reveal'
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });

  // 2. Dynamic Active Navigation
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 3. Smooth Scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});