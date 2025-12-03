/**
 * Modern Portfolio - Production JavaScript
 * Rajat Mani Tripathi - Backend Developer
 * 
 * Features:
 * - Dynamic header height management
 * - Dark mode toggle with persistence
 * - Mobile menu toggle
 * - Smooth scrolling
 * - Scroll animations (IntersectionObserver)
 * - Project modals with focus trap
 * - Contact form validation
 * - Toast notifications
 * - Skill bar animations
 */

(function() {
    'use strict';

    // ===== Dynamic Header Height Management =====
    const header = document.getElementById('header');
    const root = document.documentElement;

    function updateHeaderHeight() {
        if (header) {
            const height = header.offsetHeight;
            root.style.setProperty('--header-height', `${height}px`);
        }
    }

    // Update on load, resize, and menu toggle
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    window.addEventListener('orientationchange', updateHeaderHeight);

    // ===== Dark Mode Toggle =====
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    // Set initial theme
    setTheme(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // ===== Mobile Menu Toggle =====
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    function toggleMenu() {
        const isExpanded = navMenu.getAttribute('aria-expanded') === 'true';
        navMenu.setAttribute('aria-expanded', !isExpanded);
        navToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Update header height after menu toggle
        setTimeout(updateHeaderHeight, 100);
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', toggleMenu);
        
        // Close menu when clicking overlay (if menu is open)
        document.addEventListener('click', (e) => {
            if (navMenu.getAttribute('aria-expanded') === 'true' && 
                !navMenu.contains(e.target) && 
                !navToggle.contains(e.target)) {
                toggleMenu();
            }
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.getAttribute('aria-expanded') === 'true') {
                toggleMenu();
            }
        });
    });

    // ===== Smooth Scrolling =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#home') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = parseFloat(getComputedStyle(root).getPropertyValue('--header-height')) || 72;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

                window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Active Navigation Link Highlighting =====
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav__link');

    function updateActiveNav() {
        let current = '';
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');
            if (href === `#${current}` || (current === 'home' && href === '#')) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // ===== Scroll Animations (IntersectionObserver) =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars
                if (entry.target.classList.contains('skill-item')) {
                    const progressBar = entry.target.querySelector('.skill-progress');
                    if (progressBar) {
                        const level = progressBar.getAttribute('data-level');
                        setTimeout(() => {
                            progressBar.style.width = `${level}%`;
                        }, 100);
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all elements with slide-in class
    document.querySelectorAll('.slide-in, .skill-item').forEach(el => {
        observer.observe(el);
    });

    // ===== Prevent Hero Section Overlap =====
    function preventHeroOverlap() {
        const hero = document.querySelector('.hero');
        const heroContainer = document.querySelector('.hero__container');
        const heroContent = document.querySelector('.hero__content');
        
        if (hero) {
            hero.style.transform = 'none';
            hero.style.opacity = '1';
            hero.style.position = 'relative';
            hero.style.zIndex = '1';
            hero.style.overflow = 'hidden';
        }
        
        if (heroContainer) {
            heroContainer.style.transform = 'none';
            heroContainer.style.opacity = '1';
        }
        
        if (heroContent) {
            heroContent.style.transform = 'none';
            heroContent.style.opacity = '1';
        }
    }

    window.addEventListener('load', preventHeroOverlap);
    window.addEventListener('scroll', preventHeroOverlap);
    window.addEventListener('resize', preventHeroOverlap);
    preventHeroOverlap();

    // ===== Project Modal =====
    const projectModal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = projectModal?.querySelector('.modal__close');
    const modalOverlay = projectModal?.querySelector('.modal__overlay');
    const projectCards = document.querySelectorAll('.project__card');

    // Project data
    const projectData = {
        subscription: {
            title: 'Subscription & Metering System',
            problem: 'Need for a scalable subscription management system that handles multiple products, plans, and usage tracking with high reliability.',
            approach: 'Built a comprehensive platform using Spring Boot for the core API, Temporal Workflows for automated subscription processes, NATS for lightweight microservice communication, and Redis for caching and performance optimization.',
            results: [
                'Automated subscription workflows reducing manual processing by 90%',
                'Real-time usage tracking and plan enforcement',
                'Scalable architecture supporting 10,000+ concurrent subscriptions',
                '99.9% uptime with Redis caching reducing response time by 60%'
            ],
            tech: ['Spring Boot', 'Temporal', 'NATS', 'Redis', 'PostgreSQL', 'Docker'],
            metrics: {
                'Automation': '90%',
                'Uptime': '99.9%',
                'Response Time': '60% faster'
            }
        },
        disruption: {
            title: 'Disruption Management App',
            problem: 'Transportation systems need real-time disruption handling with intelligent rerouting and multilingual support for 50,000+ annual users.',
            approach: 'Developed an Angular frontend with Java REST APIs, implementing real-time data processing, intelligent routing algorithms, and comprehensive i18n support including French localization.',
            results: [
                'Served 50,000+ passengers annually with real-time updates',
                'Reduced passenger wait time by 35% through workflow optimization',
                'Multilingual support (French, English) improving accessibility',
                'Intelligent rerouting reducing average delay impact by 40%'
            ],
            tech: ['Angular', 'Java', 'REST APIs', 'PostgreSQL', 'i18n'],
            metrics: {
                'Users Served': '50K+',
                'Wait Time Reduction': '35%',
                'Delay Impact': '40% reduction'
            }
        },
        payment: {
            title: 'Expedia Payment Module',
            problem: 'Payment processing system needed improved reliability, security compliance, and better monitoring for critical payment transactions.',
            approach: 'Implemented secure payment processing with Luhn algorithm validation, comprehensive Splunk dashboards for real-time monitoring, and automated PagerDuty alerts for immediate issue resolution.',
            results: [
                'Reduced payment errors by 25% through improved validation',
                'Resolved 25+ PCI security vulnerabilities',
                'Troubleshot 100+ production incidents using Splunk and PagerDuty',
                'Improved payment reliability from 94% to 99.2%'
            ],
            tech: ['React', 'Java', 'Splunk', 'PagerDuty', 'PostgreSQL'],
            metrics: {
                'Error Reduction': '25%',
                'Security Issues Fixed': '25+',
                'Reliability': '99.2%'
            }
        }
    };

    function openModal(projectId) {
        const project = projectData[projectId];
        if (!project || !projectModal || !modalBody) return;

        modalBody.innerHTML = `
            <h2 id="modal-title" class="modal__title">${project.title}</h2>
            
            <div class="modal__section">
                <h3 class="modal__section-title">Problem</h3>
                <p class="modal__text">${project.problem}</p>
            </div>

            <div class="modal__section">
                <h3 class="modal__section-title">Approach</h3>
                <p class="modal__text">${project.approach}</p>
            </div>

            <div class="modal__section">
                <h3 class="modal__section-title">Results</h3>
                <ul class="modal__list">
                    ${project.results.map(result => `<li>${result}</li>`).join('')}
                </ul>
            </div>

            <div class="modal__metrics">
                ${Object.entries(project.metrics).map(([key, value]) => `
                    <div class="modal__metric">
                        <div class="modal__metric-value">${value}</div>
                        <div class="modal__metric-label">${key}</div>
                    </div>
                `).join('')}
            </div>

            <div class="modal__section">
                <h3 class="modal__section-title">Technologies</h3>
                <div class="modal__tags">
                    ${project.tech.map(tech => `<span class="modal__tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;

        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Focus trap
        trapFocus(projectModal);
        
        // Focus on close button
        if (modalClose) {
            modalClose.focus();
        }
    }

    function closeModal() {
        if (projectModal) {
            projectModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            modalBody.innerHTML = '';
        }
    }

    // Open modal on project card click
    projectCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't open if clicking on link
            if (e.target.closest('.project__link')) return;
            
            const projectId = card.getAttribute('data-project');
            if (projectId) {
                openModal(projectId);
            }
        });
    });

    // Close modal handlers
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal?.getAttribute('aria-hidden') === 'false') {
            closeModal();
        }
    });

    // Focus trap function
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', function trapHandler(e) {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        });
    }

    // ===== Contact Form Validation =====
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        function validateName() {
            const name = nameInput.value.trim();
            if (name.length < 2) {
                nameError.textContent = 'Name must be at least 2 characters';
                nameInput.setCustomValidity('Name must be at least 2 characters');
                return false;
            }
            nameError.textContent = '';
            nameInput.setCustomValidity('');
            return true;
        }

        function validateEmail() {
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                emailError.textContent = 'Please enter a valid email address';
                emailInput.setCustomValidity('Please enter a valid email address');
                return false;
            }
            emailError.textContent = '';
            emailInput.setCustomValidity('');
            return true;
        }

        function validateMessage() {
            const message = messageInput.value.trim();
            if (message.length < 10) {
                messageError.textContent = 'Message must be at least 10 characters';
                messageInput.setCustomValidity('Message must be at least 10 characters');
                return false;
            }
            messageError.textContent = '';
            messageInput.setCustomValidity('');
            return true;
        }

        nameInput.addEventListener('blur', validateName);
        emailInput.addEventListener('blur', validateEmail);
        messageInput.addEventListener('blur', validateMessage);

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();

            if (isNameValid && isEmailValid && isMessageValid) {
                // Get form values
                const formData = {
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    message: messageInput.value.trim()
                };

                // Create mailto link as fallback
                const mailtoLink = `mailto:rajat.tripathi10jan@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
                
                // Show success message
                showToast('Thank you for your message! I will get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Optional: Open mailto (commented out to prevent popup)
                // window.location.href = mailtoLink;
                
                // In a real application, you would send this data to a server
                console.log('Form data:', formData);
            } else {
                showToast('Please fill in all fields correctly.', 'error');
            }
        });
    }

    // ===== Toast Notification =====
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    function showToast(message, type = 'success') {
        if (!toast || !toastMessage) return;

        toastMessage.textContent = message;
        toast.className = `toast ${type} show`;

        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }

    // ===== Add fade-in delay for hero elements =====
    window.addEventListener('load', () => {
        const heroElements = document.querySelectorAll('.hero .fade-in, .hero__badge, .hero__title, .hero__subtitle, .hero__description, .hero__buttons, .hero__tech');
        heroElements.forEach((el, index) => {
            if (el.style) {
                el.style.animationDelay = `${index * 0.1}s`;
            }
        });
    });

    // ===== Header Scroll Effect =====
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });

    // ===== Performance: Lazy load images =====
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // ===== Analytics Event Tracking (Placeholder) =====
    function trackEvent(category, action, label) {
        // Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
        
        // Plausible Analytics
        if (typeof plausible !== 'undefined') {
            plausible(action, { props: { category, label } });
        }
        
        console.log('Event tracked:', { category, action, label });
    }

    // Track project card clicks
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            trackEvent('Projects', 'View', projectId);
        });
    });

    // Track form submission
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            trackEvent('Contact', 'Submit', 'Contact Form');
        });
    }

    // Track resume download
    const resumeLink = document.querySelector('a[href*="resume.pdf"]');
    if (resumeLink) {
        resumeLink.addEventListener('click', () => {
            trackEvent('Downloads', 'Resume', 'PDF');
        });
    }

    console.log('Portfolio website loaded successfully!');
})();
