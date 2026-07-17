console.log('CruzHacks UI loaded successfully!');

document.addEventListener('DOMContentLoaded', () => {
    // Set initial opacity to 0 for fade-in effect
    document.body.style.opacity = '0';
    
    // Fade in after page load
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Button functionality
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const partnershipDetails = document.getElementById('partnershipDetails');

    if (learnMoreBtn && partnershipDetails) {
        learnMoreBtn.addEventListener('click', () => {
            partnershipDetails.style.display = partnershipDetails.style.display === 'block' ? 'none' : 'block';
            learnMoreBtn.textContent = partnershipDetails.style.display === 'block' ? 'Hide Details' : 'Learn More About Partnership';
        });
    }

    // Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
