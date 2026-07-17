document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const partnershipDetails = document.getElementById('partnershipDetails');

    if (learnMoreBtn && partnershipDetails) {
        learnMoreBtn.addEventListener('click', () => {
            partnershipDetails.style.display = partnershipDetails.style.display === 'block' ? 'none' : 'block';
            learnMoreBtn.textContent = partnershipDetails.style.display === 'block' ? 'Hide Details' : 'Learn More About Partnership';
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href') as string);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideUp 0.6s ease-out forwards;
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
