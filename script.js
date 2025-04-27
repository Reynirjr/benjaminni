document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    animatedElements.forEach(function (element) {
        observer.observe(element);
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    if (window.matchMedia('(hover: none)').matches) {
        const projects = document.querySelectorAll('.project');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };

        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                const staticImg = entry.target.querySelector('.static-img');
                const animatedImg = entry.target.querySelector('.animated-img');

                if (entry.isIntersecting) {
                    if(staticImg) staticImg.style.display = 'none';
                    if(animatedImg) animatedImg.style.display = 'block';
                } else {
                    if(staticImg) staticImg.style.display = 'block';
                    if(animatedImg) animatedImg.style.display = 'none';
                }
            });
        }, observerOptions);

        projects.forEach(function (project) {
            observer.observe(project);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const myImage = document.querySelector('.mynd-eg img');
    
    if (myImage) {
        myImage.addEventListener('click', function() {
            this.style.animation = 'spinAround 1s ease-in-out';
            
            setTimeout(() => {
                this.style.animation = 'wiggleWiggle 2s infinite ease-in-out';
            }, 1000); 
        });
    }
});













