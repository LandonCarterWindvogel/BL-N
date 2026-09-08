(function () {
  'use strict';

  /* ─────────────────────────────
     Footer year
  ───────────────────────────── */

  var yearElement = document.getElementById('yr');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* ─────────────────────────────
     Header scroll state
  ───────────────────────────── */

  var header = document.getElementById('site-header');
  var ticking = false;

  function updateHeader() {
    if (!header) return;

    header.classList.toggle(
      'is-scrolled',
      window.scrollY > 12
    );
  }

  function onScroll() {
    if (ticking) return;

    window.requestAnimationFrame(function () {
      updateHeader();
      ticking = false;
    });

    ticking = true;
  }

  if (header) {
    window.addEventListener(
      'scroll',
      onScroll,
      { passive: true }
    );

    updateHeader();
  }

  /* ─────────────────────────────
     Mobile navigation
  ───────────────────────────── */

  var hamButton = document.getElementById('ham-btn');
  var mobileNav = document.getElementById('mobile-nav');

  function closeMenu() {
    if (!mobileNav || !hamButton) return;

    mobileNav.classList.remove('is-open');

    hamButton.setAttribute(
      'aria-expanded',
      'false'
    );

    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (!mobileNav || !hamButton) return;

    var isOpen =
      mobileNav.classList.toggle('is-open');

    hamButton.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    document.body.style.overflow =
      isOpen ? 'hidden' : '';
  }

  if (hamButton) {
    hamButton.addEventListener(
      'click',
      toggleMenu
    );
  }

  document
    .querySelectorAll('[data-close]')
    .forEach(function (element) {

      element.addEventListener(
        'click',
        closeMenu
      );

    });

  document.addEventListener(
    'keydown',
    function (event) {

      if (event.key === 'Escape') {
        closeMenu();
      }

    }
  );

  /* ─────────────────────────────
     Scroll reveal
  ───────────────────────────── */

  var revealElements =
    document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {

    var revealObserver =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(function (entry) {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add(
              'is-visible'
            );

            revealObserver.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: 0.12
        }
      );

    revealElements.forEach(
      function (element) {
        revealObserver.observe(element);
      }
    );

  } else {

    revealElements.forEach(
      function (element) {
        element.classList.add(
          'is-visible'
        );
      }
    );

  }

  /* ─────────────────────────────
     Horizontal card scroller
  ───────────────────────────── */

  var scroller =
    document.getElementById('testi-scroller');

  var previousButton =
    document.getElementById('testi-prev');

  var nextButton =
    document.getElementById('testi-next');

  function scrollByCard(direction) {

    if (!scroller) return;

    var card =
      scroller.querySelector(
        '.testi-card'
      );

    var cardWidth = card
      ? card.getBoundingClientRect().width
      : 300;

    var gap = 18;

    scroller.scrollBy({
      left:
        direction *
        (cardWidth + gap),
      behavior: 'smooth'
    });
  }

  if (previousButton) {

    previousButton.addEventListener(
      'click',
      function () {
        scrollByCard(-1);
      }
    );

  }

  if (nextButton) {

    nextButton.addEventListener(
      'click',
      function () {
        scrollByCard(1);
      }
    );

  }

  /* ─────────────────────────────
     Contact form
  ───────────────────────────── */

  var form =
    document.getElementById('quote-form');

  if (!form) return;

  var submitButton =
    document.getElementById('submit-btn');

  var submitText =
    document.getElementById('submit-text');

  var submitLoading =
    document.getElementById('submit-loading');

  var formError =
    document.getElementById('form-error');

  var formSuccess =
    document.getElementById('form-success');

  var requiredFieldIds = [
    'fname',
    'fphone',
    'fservice',
    'fmessage'
  ];

  function setLoading(state) {

    if (submitButton) {
      submitButton.disabled = state;

      submitButton.setAttribute(
        'aria-busy',
        String(state)
      );
    }

    if (submitLoading) {
      submitLoading.hidden = !state;
    }

    if (submitText) {
      submitText.textContent =
        state
          ? 'Sending…'
          : 'Send Quote Request';
    }
  }

  function clearMessages() {

    if (formError) {
      formError.hidden = true;
      formError.textContent = '';
    }

    if (formSuccess) {
      formSuccess.hidden = true;
    }

    form
      .querySelectorAll('[aria-invalid="true"]')
      .forEach(function (element) {
        element.removeAttribute(
          'aria-invalid'
        );
      });

  }

  function markInvalidRequiredFields() {

    requiredFieldIds.forEach(
      function (id) {

        var element =
          document.getElementById(id);

        if (!element) return;

        var value =
          typeof element.value === 'string'
            ? element.value.trim()
            : '';

        if (!value) {
          element.setAttribute(
            'aria-invalid',
            'true'
          );
        }

      }
    );
  }

  function showError(message) {

    if (!formError) return;

    formError.textContent = message;
    formError.hidden = false;

    if (formSuccess) {
      formSuccess.hidden = true;
    }

    markInvalidRequiredFields();

    formError.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });

  }

  function isValidPhone(phone) {

    /*
     * This intentionally stays permissive.
     * South African users may enter different
     * spacing or formatting variations.
     */

    var digitsOnly =
      phone.replace(/\D/g, '');

    return digitsOnly.length >= 8;
  }

  function validateForm() {

    var nameField =
      form.querySelector('[name="name"]');

    var phoneField =
      form.querySelector('[name="phone"]');

    var serviceField =
      form.querySelector('[name="service"]');

    var messageField =
      form.querySelector('[name="message"]');

    if (
      !nameField ||
      !phoneField ||
      !serviceField ||
      !messageField
    ) {
      return {
        valid: false,
        message:
          'The form could not be loaded correctly. Please call us directly on 082 509 8950.'
      };
    }

    var name =
      nameField.value.trim();

    var phone =
      phoneField.value.trim();

    var service =
      serviceField.value;

    var message =
      messageField.value.trim();

    if (!name) {
      return {
        valid: false,
        message:
          'Please enter your full name.'
      };
    }

    if (!phone) {
      return {
        valid: false,
        message:
          'Please enter your phone number.'
      };
    }

    if (!isValidPhone(phone)) {
      return {
        valid: false,
        message:
          'Please enter a valid phone number.'
      };
    }

    if (!service) {
      return {
        valid: false,
        message:
          'Please select the service you need.'
      };
    }

    if (!message) {
      return {
        valid: false,
        message:
          'Please describe the job.'
      };
    }

    return {
      valid: true
    };
  }

  form.addEventListener(
    'submit',
    function (event) {

      event.preventDefault();

      clearMessages();

      var validation =
        validateForm();

      if (!validation.valid) {

        showError(
          validation.message
        );

        return;
      }

      setLoading(true);

      var encodedFormData =
        new URLSearchParams(
          new FormData(form)
        ).toString();

      fetch('/', {
        method: 'POST',

        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded'
        },

        body: encodedFormData
      })

        .then(function (response) {

          if (!response.ok) {
            throw new Error(
              'Server returned ' +
              response.status
            );
          }

          form.reset();

          if (formSuccess) {
            formSuccess.hidden = false;

            formSuccess.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest'
            });
          }

        })

        .catch(function (error) {

          console.error(
            'Form submission error:',
            error
          );

          showError(
            'Something went wrong. Please call us directly on 082 509 8950 or email blessingsibanda30@gmail.com.'
          );

        })

        .finally(function () {
          setLoading(false);
        });

    }
  );

})();