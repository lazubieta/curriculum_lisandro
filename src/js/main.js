const links = document.querySelectorAll('.links a');
const items = document.querySelectorAll('.timeline-item');
const cards = document.querySelectorAll('.skill-card');

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const msg = document.getElementById("formMsg");
    msg.textContent = "¡Mensaje enviado correctamente!";
    msg.style.color = "#28a745";

    this.reset();

    setTimeout(() => {
        msg.textContent = "";
    }, 3000);
});

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

items.forEach(item => observer.observe(item));

cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
        card.style.transition = "1s";
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
    }, index * 150);
});