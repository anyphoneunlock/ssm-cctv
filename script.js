/* ============================================
   Security Systems & More — JavaScript
   Mobile menu, form handling, smooth UX
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // --- Mobile Menu Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
      const isOpen = mainNav.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close menu when clicking a link
    mainNav.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        mainNav.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Header scroll behavior ---
  const header = document.getElementById('header');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
      header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
  }, { passive: true });

  // --- Contact Form Handling ---
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const required = ['first-name', 'email', 'subject', 'message'];

      // Clear previous errors
      contactForm.querySelectorAll('.form-error').forEach(function(el) {
        el.classList.remove('form-error');
      });

      // Validate
      let hasErrors = false;

      required.forEach(function(field) {
        const input = contactForm.querySelector('[name="' + field + '"]');
        if (!input || !input.value.trim()) {
          if (input) input.classList.add('form-error');
          hasErrors = true;
        }
      });

      // Email format check
      const emailInput = contactForm.querySelector('[name="email"]');
      if (emailInput && emailInput.value && !isValidEmail(emailInput.value)) {
        emailInput.classList.add('form-error');
        hasErrors = true;
      }

      if (hasErrors) {
        showFormMessage(contactForm, 'Please fill in all required fields.', 'error');
        return;
      }

      // Simulate submission
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      setTimeout(function() {
        showFormMessage(contactForm, 'Thank you! Your message has been sent. We\'ll be in touch within one business day.', 'success');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 1200);
    });
  }

  // --- Email validation helper ---
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // --- Form message display ---
  function showFormMessage(form, message, type) {
    // Remove existing message
    const existing = form.querySelector('.form-message');
    if (existing) existing.remove();

    const msg = document.createElement('div');
    msg.className = 'form-message';
    msg.setAttribute('role', 'alert');

    if (type === 'success') {
      msg.style.cssText = 'padding: 1rem; margin-bottom: 1rem; background: #dcfce7; color: #166534; border: 1px solid #86efac; border-radius: 8px; font-weight: 500;';
    } else {
      msg.style.cssText = 'padding: 1rem; margin-bottom: 1rem; background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5; border-radius: 8px; font-weight: 500;';
    }

    msg.textContent = message;
    form.insertBefore(msg, form.firstChild);

    // Scroll to message
    msg.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Auto-remove success message after 8 seconds
    if (type === 'success') {
      setTimeout(function() {
        if (msg.parentNode) msg.remove();
      }, 8000);
    }
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#page') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Active nav link highlighting ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

});
