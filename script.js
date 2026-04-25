
// Navbar scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
function toggleMobileMenu() {
  const nav = document.getElementById('mobileNav');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}
function closeMobileMenu() {
  document.getElementById('mobileNav').style.display = 'none';
}

// WhatsApp form
function sendWhatsApp(e) {
  e.preventDefault();
  const name = document.getElementById('fname').value || 'New Member';
  const phone = document.getElementById('fphone').value || '';
  const goal = document.getElementById('fgoal').value || 'General Fitness';
  const msg = document.getElementById('fmsg').value || '';
  const text = encodeURIComponent(`Hi Body Formula Fitness! 🏋️\n\nName: ${name}\nPhone: ${phone}\nGoal: ${goal}\nMessage: ${msg}\n\nI'd like to book a Free Trial!`);
  window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {threshold: 0.1});

document.querySelectorAll('.value-card, .prog-card, .result-card, .trainer-card, .testi-card, .price-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s';
  observer.observe(el);
});
