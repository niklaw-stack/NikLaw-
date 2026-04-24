// ── Fade-up on scroll ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Approach accordion ──
function toggleAccordion(btn) {
  const item = btn.closest('.accordion-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── Fees accordion ──
function toggleFee(btn) {
  const item = btn.closest('.fee-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.fee-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ── Booking form ──
function submitBook(e) {
  e.preventDefault();
  document.getElementById('bookBtn').style.display = 'none';
  document.getElementById('bookSuccess').style.display = 'block';
}
