const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const mobile = document.querySelector('.mobile-nav');

window.addEventListener('scroll', () => {
	header.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

toggle.addEventListener('click', () => {
	const open = toggle.getAttribute('aria-expanded') === 'true';
	toggle.setAttribute('aria-expanded', String(!open));
	toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
	mobile.classList.toggle('open', !open);
	mobile.setAttribute('aria-hidden', String(open));
});

mobile.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => toggle.click()));

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return;
		entry.target.classList.add('visible');
		if (entry.target.classList.contains('stats')) {
			entry.target.querySelectorAll('[data-count]').forEach((number) => {
				const target = Number(number.dataset.count);
				let current = 0;
				const counter = setInterval(() => {
					current += Math.ceil(target / 24);
					number.textContent = current >= target ? `${target}+` : current;
					if (current >= target) clearInterval(counter);
				}, 35);
			});
			observer.unobserve(entry.target);
		}
	});
}, { threshold: 0.14 });

document.querySelectorAll('.reveal, .stats').forEach((element) => observer.observe(element));
