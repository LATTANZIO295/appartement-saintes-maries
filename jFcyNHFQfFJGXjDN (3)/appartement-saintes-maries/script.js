// Gestion du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const form = this;
    const nom = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const telephone = form.querySelector('input[type="tel"]').value;
    const message = form.querySelector('textarea').value;
    
    // Créer le lien mailto avec les informations
    const mailtoLink = `mailto:ellattanzio66@gmail.com?subject=Nouvelle demande de réservation&body=Nom: ${encodeURIComponent(nom)}%0ATéléphone: ${encodeURIComponent(telephone)}%0AEmail: ${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Afficher un message de confirmation
    alert('Merci ! Votre message a été envoyé. Nous vous répondrons rapidement.');
    
    // Réinitialiser le formulaire
    form.reset();
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.querySelectorAll('.highlight-card, .gallery-item, .amenity, .nearby-item, .price-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Smooth scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gestion du menu mobile (optionnel)
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Fermer le menu si nécessaire
        console.log('Navigation vers: ' + this.getAttribute('href'));
    });
});

// Validation du formulaire en temps réel
const contactForm = document.getElementById('contactForm');
const inputs = contactForm.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.type === 'email') {
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
            if (this.value && !isValid) {
                this.style.borderColor = '#e74c3c';
            } else {
                this.style.borderColor = '#bdc3c7';
            }
        }
    });
});

// Afficher un message de bienvenue dans la console
console.log('%cBienvenue sur L\'Escale Camarguaise!', 'color: #3498db; font-size: 16px; font-weight: bold;');
console.log('%cPour réserver votre séjour, contactez-nous au 06 48 02 19 72 ou ellattanzio66@gmail.com', 'color: #2c3e50; font-size: 12px;');
