/* ============================================================
   DISCOUNT CLEAR PACK — SCRIPT.JS
   ============================================================ */

/* ── Navbar: shrink on scroll ── */
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ── Mobile Menu ── */
const hamburger = document.querySelector('.navbar__hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-menu__close');

function openMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.add('open');
  hamburger?.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove('open');
  hamburger?.classList.remove('active');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', openMenu);
mobileClose?.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

// Close on outside click (overlay tap)
mobileMenu?.addEventListener('click', e => {
  if (e.target === mobileMenu) closeMenu();
});

/* ── Active nav link detection ── */
(function setActiveLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__nav a, .mobile-menu nav a').forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === path || (path === 'index.html' && href === './') || href === './' && path === '') {
      link.classList.add('active');
    }
  });
})();

/* ── Scroll-Reveal (IntersectionObserver) ── */
// Mark body so CSS knows JS is active (hides elements pre-animation)
document.body.classList.add('js-ready');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.10, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── FAQ Accordion ── */
document.querySelectorAll('.faq-item__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-item__a');
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-item__a').style.maxHeight = null;
    });

    // Open clicked if it was closed
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

/* ── Product Filter (products.html) ── */
(function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.querySelectorAll('.product-card[data-category]').forEach(card => {
        const show = category === 'all' || card.dataset.category === category;
        card.style.display = show ? '' : 'none';
      });
    });
  });
})();

/* ── Contact Form Handler (n8n webhook) ── */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const WEBHOOK_URL = 'PLACEHOLDER_WEBHOOK_URL'; // Wire up n8n webhook URL here

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok || res.status === 200 || res.status === 204) {
        form.style.display = 'none';
        const success = document.querySelector('.form-success');
        if (success) success.style.display = 'block';
      } else {
        throw new Error('Server error');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      alert('Something went wrong. Please call us directly at (775) 737-4090.');
    }
  });
})();

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMenu();
    }
  });
});
