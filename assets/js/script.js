/**
 * Portfolio Interactive Engine & Live Customizer
 * Dark Editorial Crimson Portfolio Theme
 */

(function () {
  'use strict';

  // --- Default Profile Configuration ---
  const DEFAULT_CONFIG = {
    theme: 'red',
    greeting: "Hello, I'm",
    name: 'RAYHAN ADITYA',
    role: 'WEB DESIGNER & UI/UX CREATOR',
    bio: 'I design and build stylish, user-focused web experiences that combine creativity with strategy. Passionate about clean design, smooth interactions, and details that make a difference.',
    yearsExp: '3+',
    projectsCount: '40+',
    clientsCount: '20+',
    status: 'AVAILABLE FOR FREELANCE',
    quote: 'Good design is not just how it looks, but how it works.',
    signature: 'Rayhan',
    email: 'hello@rayhanaditya.com',
    website: 'www.rayhanaditya.com',
    phone: '+62 812 3456 7890',
    location: 'Jakarta, Indonesia',
    photoUrl: 'assets/images/hero-portrait.jpg'
  };

  // --- Projects Catalog ---
  const PROJECTS_DATA = {
    '01': {
      id: '01',
      title: 'VELOCE BIKES',
      subtitle: 'E-COMMERCE & PERFORMANCE SHOWCASE',
      category: 'E-Commerce Website',
      year: '2026',
      client: 'Veloce Cycling Studio',
      image: 'assets/images/project-veloce.svg',
      desc: 'An ultra-fast, immersive e-commerce experience built for a boutique high-performance road bicycle brand. Features interactive 3D bicycle customization, weight/aerodynamics telemetry comparison, and an instant checkout funnel with Apple Pay.',
      tech: ['Next.js 14', 'Tailwind CSS', 'Three.js / WebGL', 'GSAP Animation', 'Stripe API'],
      metrics: '+185% Conversion Rate, <0.8s LCP Page Speed, Featured on Awwwards Site of the Day'
    },
    '02': {
      id: '02',
      title: 'WOODCRAFT',
      subtitle: 'TIMELESS SCANDINAVIAN FURNITURE ATELIER',
      category: 'Furniture Website',
      year: '2025',
      client: 'Nordic Woodcraft Studio',
      image: 'assets/images/project-woodcraft.svg',
      desc: 'An editorial luxury portfolio and ordering platform for handcrafted solid wood furniture. Emphasizes tactile minimalism, architectural photography framing, and custom AR room visualization allowing clients to preview items in their living rooms.',
      tech: ['Vue.js', 'Nuxt 3', 'Shopify Storefront API', 'WebXR / AR', 'Figma'],
      metrics: 'Over $4.2M gross sales processed, 4.9/5 user satisfaction score'
    },
    '03': {
      id: '03',
      title: 'URBANIC',
      subtitle: 'HIGH-FASHION DIGITAL EDITORIAL & ARCHIVE',
      category: 'Fashion Magazine',
      year: '2025',
      client: 'Urbanic Media Paris',
      image: 'assets/images/project-urbanic.svg',
      desc: 'A boundary-pushing web editorial and digital publication for contemporary haute-couture fashion. Features smooth smooth-scroll narrative pacing, interactive lookbook carousels, audio-visual editorial moodboards, and a global subscriber gate.',
      tech: ['React', 'Framer Motion', 'Sanity CMS', 'Lenis Smooth Scroll', 'Cloudflare Workers'],
      metrics: '850K+ Monthly Active Readers, Webby Award Nominee in Art & Fashion'
    }
  };

  // --- Storage Helper ---
  function getProfile() {
    try {
      const stored = localStorage.getItem('portfolio_user_profile');
      if (stored) {
        return { ...DEFAULT_CONFIG, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.warn('Storage read failed', e);
    }
    return { ...DEFAULT_CONFIG };
  }

  function saveProfile(data) {
    try {
      localStorage.setItem('portfolio_user_profile', JSON.stringify(data));
    } catch (e) {
      console.warn('Storage write failed', e);
    }
  }

  // --- Render Profile to DOM ---
  function applyProfile(profile) {
    // Theme attribute
    document.documentElement.setAttribute('data-theme', profile.theme || 'red');

    // Text bindings
    const bindMap = {
      'user-greeting': profile.greeting,
      'user-name': profile.name.replace('\n', '<br>'),
      'user-role': profile.role,
      'user-bio': profile.bio,
      'user-years': profile.yearsExp,
      'user-projects': profile.projectsCount,
      'user-clients': profile.clientsCount,
      'user-status': profile.status,
      'user-status-btn': profile.status + ' →',
      'user-quote': profile.quote,
      'user-signature': profile.signature,
      'user-email': profile.email,
      'user-website': profile.website,
      'user-phone': profile.phone,
      'user-location': profile.location
    };

    Object.keys(bindMap).forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        if (id === 'user-name') {
          el.innerHTML = profile.name.includes('<br>') ? profile.name : profile.name.replace(' ', '<br>');
        } else {
          el.textContent = bindMap[id];
        }
      }
    });

    // Email mailto links
    const emailLink = document.getElementById('user-email-link');
    if (emailLink) emailLink.setAttribute('href', 'mailto:' + profile.email);

    // Hero image
    const heroImg = document.getElementById('hero-img');
    if (heroImg && profile.photoUrl) {
      heroImg.src = profile.photoUrl;
    }

    // Update active swatch
    document.querySelectorAll('.theme-swatch').forEach(swatch => {
      if (swatch.dataset.theme === profile.theme) {
        swatch.classList.add('active');
      } else {
        swatch.classList.remove('active');
      }
    });
  }

  // --- Toast Notification ---
  function showToast(message) {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <span>${message}</span>
    `;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // --- Copy to Clipboard with Feedback ---
  function setupClipboard() {
    const emailRow = document.getElementById('copy-email-trigger');
    if (emailRow) {
      emailRow.addEventListener('click', (e) => {
        e.preventDefault();
        const profile = getProfile();
        navigator.clipboard.writeText(profile.email).then(() => {
          showToast(`Copied ${profile.email} to clipboard!`);
        }).catch(() => {
          showToast(`Email: ${profile.email}`);
        });
      });
    }

    const phoneRow = document.getElementById('copy-phone-trigger');
    if (phoneRow) {
      phoneRow.addEventListener('click', (e) => {
        e.preventDefault();
        const profile = getProfile();
        navigator.clipboard.writeText(profile.phone).then(() => {
          showToast(`Copied ${profile.phone} to clipboard!`);
        }).catch(() => {
          showToast(`Phone: ${profile.phone}`);
        });
      });
    }
  }

  // --- Stats Number Counter on Viewport Entry ---
  function setupCounterAnimation() {
    const statElements = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          statElements.forEach(el => {
            const rawVal = el.innerText.trim();
            const targetNum = parseInt(rawVal, 10);
            const suffix = rawVal.replace(/[0-9]/g, '');
            if (isNaN(targetNum)) return;

            let count = 0;
            const duration = 1200;
            const stepTime = Math.max(20, Math.floor(duration / targetNum));

            const timer = setInterval(() => {
              count++;
              el.innerText = count + suffix;
              if (count >= targetNum) {
                clearInterval(timer);
                el.innerText = targetNum + suffix;
              }
            }, stepTime);
          });
        }
      });
    }, { threshold: 0.3 });

    const statsContainer = document.querySelector('.hero-stats-list');
    if (statsContainer) observer.observe(statsContainer);
  }

  // --- Project Modal Controller ---
  function setupProjectModal() {
    const modal = document.getElementById('project-modal');
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('btn-close-project-modal');

    function openProject(id) {
      const data = PROJECTS_DATA[id];
      if (!data) return;

      document.getElementById('modal-project-title').textContent = data.title;
      document.getElementById('modal-project-sub').textContent = data.subtitle;
      document.getElementById('modal-project-desc').textContent = data.desc;
      document.getElementById('modal-project-client').textContent = data.client;
      document.getElementById('modal-project-year').textContent = data.year;
      document.getElementById('modal-project-img').src = data.image;
      document.getElementById('modal-project-metrics').textContent = data.metrics;

      // Tech tags
      const techWrap = document.getElementById('modal-tech-tags');
      techWrap.innerHTML = '';
      data.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'skill-pill';
        span.textContent = t;
        techWrap.appendChild(span);
      });

      overlay.classList.add('active');
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      overlay.classList.remove('active');
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Attach click listeners to cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project-id');
        openProject(id);
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) {
      overlay.addEventListener('click', () => {
        closeModal();
        closeCustomizer();
        closeContactDrawer();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        closeCustomizer();
        closeContactDrawer();
      }
    });
  }

  // --- Contact Drawer / Form ---
  function openContactDrawer() {
    const drawer = document.getElementById('contact-drawer');
    const overlay = document.getElementById('modal-overlay');
    if (drawer && overlay) {
      overlay.classList.add('active');
      drawer.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeContactDrawer() {
    const drawer = document.getElementById('contact-drawer');
    const overlay = document.getElementById('modal-overlay');
    if (drawer) drawer.classList.remove('active');
    if (overlay && !document.querySelector('.customizer-drawer.active') && !document.querySelector('.project-modal.active')) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function setupContactDrawer() {
    const triggerBtns = document.querySelectorAll('.open-contact-trigger');
    triggerBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openContactDrawer();
      });
    });

    const closeBtn = document.getElementById('btn-close-contact-drawer');
    if (closeBtn) closeBtn.addEventListener('click', closeContactDrawer);

    const form = document.getElementById('contact-inquiry-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.disabled = true;
        submitBtn.innerText = 'SENDING INQUIRY...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerText = originalText;
          form.reset();
          closeContactDrawer();
          showToast('Thank you! Your message has been sent successfully.');
        }, 1000);
      });
    }
  }

  // --- Live Customizer Drawer ---
  function openCustomizer() {
    const drawer = document.getElementById('customizer-drawer');
    const overlay = document.getElementById('modal-overlay');
    const profile = getProfile();

    // Populate inputs
    document.getElementById('cfg-name').value = profile.name.replace('<br>', ' ');
    document.getElementById('cfg-role').value = profile.role;
    document.getElementById('cfg-bio').value = profile.bio;
    document.getElementById('cfg-years').value = profile.yearsExp;
    document.getElementById('cfg-projects').value = profile.projectsCount;
    document.getElementById('cfg-clients').value = profile.clientsCount;
    document.getElementById('cfg-quote').value = profile.quote;
    document.getElementById('cfg-signature').value = profile.signature;
    document.getElementById('cfg-email').value = profile.email;
    document.getElementById('cfg-phone').value = profile.phone;
    document.getElementById('cfg-location').value = profile.location;

    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCustomizer() {
    const drawer = document.getElementById('customizer-drawer');
    const overlay = document.getElementById('modal-overlay');
    if (drawer) drawer.classList.remove('active');
    if (overlay && !document.querySelector('.project-modal.active') && !document.querySelector('.contact-drawer.active')) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function setupCustomizer() {
    const toggleBtn = document.getElementById('btn-toggle-customizer');
    if (toggleBtn) toggleBtn.addEventListener('click', openCustomizer);

    const closeBtn = document.getElementById('btn-close-customizer');
    if (closeBtn) closeBtn.addEventListener('click', closeCustomizer);

    // Color Swatch Selection
    document.querySelectorAll('.theme-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        const chosenTheme = swatch.dataset.theme;
        const profile = getProfile();
        profile.theme = chosenTheme;
        saveProfile(profile);
        applyProfile(profile);
        showToast(`Theme changed to ${chosenTheme.toUpperCase()}!`);
      });
    });

    // Form Save
    const saveBtn = document.getElementById('btn-save-profile');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const profile = getProfile();
        profile.name = document.getElementById('cfg-name').value.trim() || profile.name;
        profile.role = document.getElementById('cfg-role').value.trim() || profile.role;
        profile.bio = document.getElementById('cfg-bio').value.trim() || profile.bio;
        profile.yearsExp = document.getElementById('cfg-years').value.trim() || profile.yearsExp;
        profile.projectsCount = document.getElementById('cfg-projects').value.trim() || profile.projectsCount;
        profile.clientsCount = document.getElementById('cfg-clients').value.trim() || profile.clientsCount;
        profile.quote = document.getElementById('cfg-quote').value.trim() || profile.quote;
        profile.signature = document.getElementById('cfg-signature').value.trim() || profile.signature;
        profile.email = document.getElementById('cfg-email').value.trim() || profile.email;
        profile.phone = document.getElementById('cfg-phone').value.trim() || profile.phone;
        profile.location = document.getElementById('cfg-location').value.trim() || profile.location;

        saveProfile(profile);
        applyProfile(profile);
        closeCustomizer();
        showToast('Profile updated & saved locally!');
      });
    }

    // Reset Defaults
    const resetBtn = document.getElementById('btn-reset-profile');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset profile back to default template values?')) {
          saveProfile(DEFAULT_CONFIG);
          applyProfile(DEFAULT_CONFIG);
          closeCustomizer();
          showToast('Profile restored to default template!');
        }
      });
    }

    // Photo file picker upload
    const photoUploadInput = document.getElementById('cfg-photo-file');
    if (photoUploadInput) {
      photoUploadInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const dataUrl = event.target.result;
            const profile = getProfile();
            profile.photoUrl = dataUrl;
            saveProfile(profile);
            applyProfile(profile);
            showToast('Photo uploaded & updated!');
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }

  // --- 3D Interactive Mouse Tilt Effect ---
  function setup3DTilt() {
    const laptopWrap = document.querySelector('.laptop-showcase-wrap');
    if (laptopWrap) {
      laptopWrap.addEventListener('mousemove', (e) => {
        const rect = laptopWrap.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const tiltX = (y / (rect.height / 2)) * -6;
        const tiltY = (x / (rect.width / 2)) * 8;
        laptopWrap.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
      });

      laptopWrap.addEventListener('mouseleave', () => {
        laptopWrap.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      });
    }
  }

  // --- Sticky Header Scroll Styling ---
  function setupHeaderScroll() {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- Initialize All Systems ---
  document.addEventListener('DOMContentLoaded', () => {
    const profile = getProfile();
    applyProfile(profile);
    setupClipboard();
    setupCounterAnimation();
    setupProjectModal();
    setupContactDrawer();
    setupCustomizer();
    setup3DTilt();
    setupHeaderScroll();
  });
})();
