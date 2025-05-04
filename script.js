// تفعيل تأثيرات التمرير والأنيميشن
document.addEventListener('DOMContentLoaded', function() {
    // 1. تأثير الشريط العلوي عند التمرير
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 2. تأثيرات العناصر عند الظهور أثناء التمرير
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.content-card, .timeline-item, .application-item, .risk-item, .step');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };

    // 3. تفعيل أنيميشن العنوان الرئيسي
    const headerTitle = document.querySelector('.header-content h1');
    const headerSubtitle = document.querySelector('.header-content p');
    
    setTimeout(() => {
        headerTitle.style.opacity = '1';
        headerTitle.style.transform = 'translateY(0)';
        headerSubtitle.style.opacity = '1';
        headerSubtitle.style.transform = 'translateY(0)';
    }, 300);

    // 4. تشغيل التأثيرات عند التحميل وعند التمرير
    window.addEventListener('load', function() {
        animateOnScroll();
        
        // تفعيل البطاقات بالتتابع
        document.querySelectorAll('.content-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 150);
        });
    });
    
    window.addEventListener('scroll', animateOnScroll);

    // 5. تأثيرات التحويم على العناصر
    const hoverElements = document.querySelectorAll('.application-item, .risk-item, .step');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// 6. تأثيرات الروابط في الشريط العلوي
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = 'var(--primary)';
    });
    
    link.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.color = 'var(--dark)';
        }
    });
});