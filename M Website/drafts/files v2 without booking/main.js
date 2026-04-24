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

// ── Modal open/close ──
function openModal() {
  document.getElementById('bookingModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('bookingModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('bookingModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ── Modal form submit ──
function submitModal(e) {
  e.preventDefault();
  document.getElementById('modalContent').style.display = 'none';
  document.getElementById('modalSuccess').style.display = 'block';
}

// ── Page booking form submit ──
function submitBook(e) {
  e.preventDefault();
  document.getElementById('bookBtn').style.display = 'none';
  document.getElementById('bookSuccess').style.display = 'block';
}
