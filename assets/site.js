(() => {
  'use strict';

  const enhancementStylesheet = document.createElement('link');
  enhancementStylesheet.rel = 'stylesheet';
  enhancementStylesheet.href = 'assets/viewport-enhancements.css';
  document.head.appendChild(enhancementStylesheet);

  const header = document.getElementById('site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const form = document.getElementById('quote-form');
  const status = document.getElementById('form-status');
  const year = document.getElementById('year');

  if (year) year.textContent = String(new Date().getFullYear());

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 20);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const setMenu = (open) => {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    mobileNav.hidden = !open;
    menuToggle.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  };

  menuToggle?.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const showStatus = (message, type) => {
    if (!status) return;
    status.hidden = false;
    status.className = `form-status ${type}`;
    status.textContent = message;
  };

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.setAttribute('aria-busy', 'true');
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });

      if (!response.ok) throw new Error(`Submission failed with status ${response.status}`);

      form.reset();
      showStatus('Thanks — your enquiry has been sent. BL&N will get back to you as soon as possible.', 'success');
    } catch (error) {
      console.error('Quote form error:', error);
      showStatus('We could not send the form right now. Please call 082 509 8950 or use WhatsApp instead.', 'error');
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.removeAttribute('aria-busy');
      }
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) setMenu(false);
  });
})();
