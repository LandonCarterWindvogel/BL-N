(function () {
  'use strict';

  /* ── Footer year ── */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ── Header scroll state ── */
  var header = document.getElementById('site-header');
  var ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        header.classList.toggle('is-scrolled', window.scrollY > 12);
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile nav ── */
  var hamBtn = document.getElementById('ham-btn');
  var mobileNav = document.getElementById('mobile-nav');

  function closeMenu() {
    mobileNav.classList.remove('is-open');
    hamBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  function toggleMenu() {
    var open = mobileNav.classList.toggle('is-open');
    hamBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (hamBtn) hamBtn.addEventListener('click', toggleMenu);
  document.querySelectorAll('[data-close]').forEach(function (el) {
    el.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ── Scroll reveal ── */
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ── Testimonial scroller arrows ── */
  var scroller = document.getElementById('testi-scroller');
  var prevBtn = document.getElementById('testi-prev');
  var nextBtn = document.getElementById('testi-next');
  function scrollByCard(dir) {
    if (!scroller) return;
    var card = scroller.querySelector('.testi-card');
    var amount = card ? card.getBoundingClientRect().width + 18 : 300;
    scroller.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }
  if (prevBtn) prevBtn.addEventListener('click', function () { scrollByCard(-1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { scrollByCard(1); });

  /* ── Contact form (Netlify) ── */
  var form = document.getElementById('quote-form');
  if (form) {
    var submitBtn = document.getElementById('submit-btn');
    var submitText = document.getElementById('submit-text');
    var submitLoading = document.getElementById('submit-loading');
    var formError = document.getElementById('form-error');
    var formSuccess = document.getElementById('form-success');

    function setLoading(state) {
      submitBtn.disabled = state;
      submitBtn.setAttribute('aria-busy', String(state));
      submitLoading.hidden = !state;
      submitText.textContent = state ? 'Sending…' : 'Send Quote Request';
    }

    function clearMessages() {
      formError.hidden = true;
      formSuccess.hidden = true;
      formError.textContent = '';
      form.querySelectorAll('[aria-invalid]').forEach(function (el) {
        el.removeAttribute('aria-invalid');
      });
    }

    function showError(msg) {
      formError.textContent = msg;
      formError.hidden = false;
      formSuccess.hidden = true;
      ['fname', 'fphone', 'fservice', 'fmessage'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el && !el.value.trim()) el.setAttribute('aria-invalid', 'true');
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearMessages();

      var name = form.querySelector('[name="name"]').value.trim();
      var phone = form.querySelector('[name="phone"]').value.trim();
      var service = form.querySelector('[name="service"]').value;
      var message = form.querySelector('[name="message"]').value.trim();

      if (!name || !phone || !service || !message) {
        showError('Please fill in all required fields — Name, Phone, Service Needed, and Job Description.');
        return;
      }

      setLoading(true);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      })
        .then(function (response) {
          if (!response.ok) throw new Error('Server returned ' + response.status);
          form.reset();
          formSuccess.hidden = false;
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        })
        .catch(function (err) {
          showError('Something went wrong. Please call us directly on 082 509 8950 or email blessingsibanda30@gmail.com.');
          console.error('Form submission error:', err);
        })
        .finally(function () {
          setLoading(false);
        });
    });
  }
})();
