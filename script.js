// Load custom photos from localStorage
function loadCustomPhotos() {
    const photos = JSON.parse(localStorage.getItem('galleryPhotos') || '[]');
    const galleryGrid = document.querySelector('.gallery-grid');
    
    if (galleryGrid && photos.length > 0) {
        photos.forEach(photo => {
            const photoElement = document.createElement('div');
            photoElement.className = 'gallery-item';
            photoElement.innerHTML = `<img src="${photo.src}" alt="${photo.alt}" loading="lazy">`;
            galleryGrid.appendChild(photoElement);
        });
    }
}

// Load custom photos when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCustomPhotos);
} else {
    loadCustomPhotos();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
