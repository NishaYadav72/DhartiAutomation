// jQuery Document Ready
$(document).ready(function() {
    
    // =======================
    // Particles.js configs
    // =======================
    const heroParticlesConfig = {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: ['#00b8d4', '#3498db', '#9b59b6'] },
            shape: { type: ['circle', 'triangle'], stroke: { width: 0, color: '#000000' } },
            opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: '#00b8d4', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: true, rotateX: 600, rotateY: 1200 } }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    };

    // Particles for specific pages
    if ($('#particles-page').length) {
        particlesJS('particles-page', {
            particles: {
                number: { value: 110, density: { enable: true, value_area: 1200 } },
                color: { value: ['#00b8d4', '#7f5af0', '#61dafb'] },
                shape: { type: ['circle', 'triangle'], stroke: { width: 0, color: '#000000' } },
                opacity: { value: 0.35, random: true, anim: { enable: true, speed: 0.6, opacity_min: 0.08, sync: false } },
                size: { value: 2.8, random: true, anim: { enable: true, speed: 1.6, size_min: 0.1, sync: false } },
                line_linked: { enable: true, distance: 140, color: '#00b8d4', opacity: 0.25, width: 1 },
                move: { enable: true, speed: 1.2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: true, rotateX: 800, rotateY: 1200 } }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: false, mode: 'grab' }, onclick: { enable: false, mode: 'push' }, resize: true },
                modes: { grab: { distance: 120, line_linked: { opacity: 0.6 } }, push: { particles_nb: 2 } }
            },
            retina_detect: true
        });
    }

    // Initialize hero banner particles
    if ($('#particles-js').length) {
        particlesJS('particles-js', heroParticlesConfig);
    }

    // =======================
    // Parallax floating icons
    // =======================
    $(window).on('mousemove', function(e) {
        const mouseX = e.pageX;
        const mouseY = e.pageY;
        $('.float-icon').each(function() {
            const speed = $(this).data('speed') || 1;
            const x = (mouseX * speed) / 100;
            const y = (mouseY * speed) / 100;
            $(this).css({ 'transform': `translate(${x}px, ${y}px)` });
        });
    });

    // =======================
    // Scroll animations
    // =======================
    function checkScroll() {
        $('.animate-on-scroll').each(function() {
            if ($(this).hasClass('animated')) return;
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                const delay = $(this).data('delay');
                if (delay) $(this).css('transition-delay', `${delay}ms`);
                $(this).addClass('animated');
            }
        });
    }
    $(window).on('scroll', checkScroll);
    checkScroll();

    // =======================
// MOBILE MENU TOGGLE – CLEAN
// =======================
const $navMenu = $('.nav-menu');
const $dropdownToggles = $('.nav-item.dropdown > .dropdown-toggle');

// Hamburger click with unique ID
$('#mobileMenuBtn').on('click', function(e) {
    e.stopPropagation();
    $navMenu.toggleClass('active');
    $(this).toggleClass('active');
});

// Click outside menu closes everything
$(document).on('click', function() {
    $navMenu.removeClass('active');
    $('#mobileMenuBtn').removeClass('active');  // toggle button
    $dropdownToggles.parent().removeClass('active'); // dropdowns
});

// Stop clicks inside nav menu from closing
$navMenu.on('click', function(e) {
    e.stopPropagation();
});

// Dropdown toggle click for mobile
$dropdownToggles.on('click', function(e) {
    if ($(window).width() <= 768) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().toggleClass('active');
    }
});



    // Close menu on nav link click (non-dropdown)
    $navMenu.find('.nav-item > .nav-link:not(.dropdown-toggle)').on('click', function() {
        if ($(window).width() <= 768) {
            $navMenu.removeClass('active');
            $menuToggle.removeClass('active');
        }
    });

    // =======================
    // Smooth scroll for anchors
    // =======================
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top }, 800);
        }
    });

    // =======================
    // Active nav link highlight
    // =======================
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    $('.nav-link').each(function() {
        const href = $(this).attr('href');
        if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
            $(this).css({ 'color': 'var(--accent-color)', 'font-weight': '600' });
        }
    });

    // =======================
    // Header scroll shadow
    // =======================
    $(window).on('scroll', function() {
        const currentScroll = $(window).scrollTop();
        if (currentScroll > 100) {
            $('header').css('box-shadow', '0 4px 12px rgba(0,0,0,0.12)');
        } else {
            $('header').css('box-shadow', '0 2px 8px rgba(0,0,0,0.08)');
        }
    });

    // =======================
    // Form validation
    // =======================
    $('form').on('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        $(this).find('input[required], textarea[required]').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).css('border-color', '#dc3545');
            } else {
                $(this).css('border-color', 'var(--border-color)');
            }
        });
        if (isValid) {
            alert('Form submitted successfully! We will get back to you soon.');
            this.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // =======================
    // Fade in animations
    // =======================
    $('.container section').hide().fadeIn(800);

    // =======================
    // Footer hover effects
    // =======================
    $('.footer-links a').hover(
        function() { $(this).css('padding-left', '5px'); },
        function() { $(this).css('padding-left', '0'); }
    );

    // =======================
    // Testimonial slider
    // =======================
    const initTestimonialSlider = () => {
        const $slider = $('.testimonial-slider');
        if (!$slider.length || !window.Swiper || $slider.hasClass('swiper-initialized')) return;

        const slider = new Swiper('.testimonial-slider', {
            slidesPerView: 3,
            spaceBetween: 16,
            loop: true,
            speed: 700,
            observer: true,
            observeParents: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            navigation: { nextEl: '.testimonial-next', prevEl: '.testimonial-prev' },
            pagination: { el: '.testimonial-dots', clickable: true },
            breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } }
        });

        setTimeout(() => slider.update(), 120);
        $(window).on('resize.testimonial', () => slider.update());
    };
    initTestimonialSlider();
    $(window).on('load', initTestimonialSlider);




// =======================
// FOOTER DROPDOWN – MOBILE TOGGLE FIX
// =======================
$('.video-footer-wrapper .dropdown-btn').on('click touchstart', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    const $dropdown = $(this).closest('.dropdown');

    // agar open hai → close
    if ($dropdown.hasClass('active')) {
        $dropdown.removeClass('active');
    } 
    // agar closed hai → open + baaki close
    else {
        $('.video-footer-wrapper .dropdown').removeClass('active');
        $dropdown.addClass('active');
    }
});

// footer ke bahar click par close
$(document).on('click touchstart', function (e) {
    if (!$(e.target).closest('.video-footer-wrapper').length) {
        $('.video-footer-wrapper .dropdown').removeClass('active');
    }
});

// footer ke andar click par document click na chale
$('.video-footer-wrapper').on('click touchstart', function (e) {
    e.stopImmediatePropagation();
});



});
