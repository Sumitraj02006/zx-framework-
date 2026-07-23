// ==========================================
// GLOBAL CONFIGURATION (GOOGLE SHEETS INTEGRATION)
// ==========================================
window.GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

// ==========================================
// GLOBAL BLOG ARTICLE MODAL CONTROLLER
// ==========================================
window.openBlogArticleModal = function(articleId) {
  const modal = document.getElementById('blog-article-modal');
  if (!modal) return;

  const articlesData = {
    1: {
      meta: "July 2, 2026 • 4 min read",
      title: "5 Simple Steps to Rank Your Local Shop on Google Search",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400",
      content: `
        <p style="margin-bottom: 16px;">Want local customers in your city to find your shop, clinic, salon, or storefront? Having a website is only half the battle — people need to discover it when searching online.</p>
        <h3 style="color: var(--text-primary); margin: 20px 0 10px 0;">1. Claim Your Free Google Business Profile</h3>
        <p style="margin-bottom: 16px;">Verify your business address on Google Maps. Add your exact phone number, business hours, storefront photos, and website link.</p>
        <h3 style="color: var(--text-primary); margin: 20px 0 10px 0;">2. Use Local Keyword Phrases</h3>
        <p style="margin-bottom: 16px;">Target localized search terms like "best cafe near me" or "hair salon in Patna" rather than generic words.</p>
        <h3 style="color: var(--text-primary); margin: 20px 0 10px 0;">3. Collect Authentic Customer Reviews</h3>
        <p style="margin-bottom: 16px;">Encourage satisfied customers to leave 5-star reviews on Google Maps. High ratings build trust and boost local search rankings.</p>
        <h3 style="color: var(--text-primary); margin: 20px 0 10px 0;">4. Ensure 100% Mobile Speed Optimization</h3>
        <p style="margin-bottom: 16px;">Over 80% of local searches happen on mobile phones. Make sure your website loads in under 2 seconds without lag.</p>
        <div style="background: rgba(37,99,235,0.08); border-left: 4px solid var(--primary); padding: 16px 20px; margin-top: 24px; border-radius: var(--radius-sm);">
          <strong style="color: var(--text-primary);">💡 Pro Tip:</strong> Local SEO brings high-converting, ready-to-buy customers to your store. Contact Zoryvex Studio for expert setup!
        </div>
      `
    },
    2: {
      meta: "June 28, 2026 • 5 min read",
      title: "Why Slow Web Pages Kill Your Sales (And How to Fix It)",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400",
      content: `
        <p style="margin-bottom: 16px;">If your website takes more than 3 seconds to load, over 53% of mobile visitors leave before even seeing your products. Page speed is directly tied to your revenue!</p>
        <h3 style="color: var(--text-primary); margin: 20px 0 10px 0;">1. Compress Large Image Files</h3>
        <p style="margin-bottom: 16px;">Raw camera images can be 5MB+. Compress them to WebP or JPEG format under 150KB without quality loss.</p>
        <h3 style="color: var(--text-primary); margin: 20px 0 10px 0;">2. Use Fast Cloud Servers</h3>
        <p style="margin-bottom: 16px;">Shared slow hosting causes server delays. Utilize fast CDN networks and optimized hosting environments.</p>
        <h3 style="color: var(--text-primary); margin: 20px 0 10px 0;">3. Eliminate Unused Scripts</h3>
        <p style="margin-bottom: 16px;">Remove heavy unused plugins, tracking scripts, and bloated frameworks that slow down rendering.</p>
        <div style="background: rgba(37,99,235,0.08); border-left: 4px solid var(--primary); padding: 16px 20px; margin-top: 24px; border-radius: var(--radius-sm);">
          <strong style="color: var(--text-primary);">⚡ Speed Guarantee:</strong> Zoryvex Studio builds websites that score 90+ on Google PageSpeed Insights.
        </div>
      `
    },
    3: {
      meta: "June 20, 2026 • 3 min read",
      title: "First Time Buying a Website? Here is What You Actually Need",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800&h=400",
      content: `
        <p style="margin-bottom: 16px;">First-time business owners often overpay for unnecessary add-ons when launching their first website. Here is what you actually need to start strong.</p>
        <h3 style="color: var(--text-primary); margin: 20px 0 10px 0;">1. Clean Custom Domain Name</h3>
        <p style="margin-bottom: 16px;">Choose a short, memorable .com or .in domain name that represents your brand clearly.</p>
        <h3 style="color: var(--text-primary); margin: 20px 0 10px 0;">2. Clear Call-To-Action (CTA)</h3>
        <p style="margin-bottom: 16px;">Ensure visitors can easily click a WhatsApp chat button or call your team with a single tap.</p>
        <h3 style="color: var(--text-primary); margin: 20px 0 10px 0;">3. Mobile-First Responsive Design</h3>
        <p style="margin-bottom: 16px;">Your site must look clean and modern on every mobile device screen.</p>
        <div style="background: rgba(37,99,235,0.08); border-left: 4px solid var(--primary); padding: 16px 20px; margin-top: 24px; border-radius: var(--radius-sm);">
          <strong style="color: var(--text-primary);">🎯 Starter Package:</strong> Get online for ₹4,999 with our transparent Starter Website package.
        </div>
      `
    }
  };

  const data = articlesData[articleId] || articlesData[1];
  const metaEl = document.getElementById('modal-blog-meta');
  const titleEl = document.getElementById('modal-blog-title');
  const imgEl = document.getElementById('modal-blog-img');
  const contentEl = document.getElementById('modal-blog-content');

  if (metaEl) metaEl.textContent = data.meta;
  if (titleEl) titleEl.textContent = data.title;
  if (imgEl) imgEl.src = data.img;
  if (contentEl) contentEl.innerHTML = data.content;

  modal.classList.add('show');
  modal.classList.add('active');
  modal.style.display = 'flex';
  modal.style.opacity = '1';
  modal.style.pointerEvents = 'all';
  modal.style.visibility = 'visible';
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
};

window.closeBlogArticleModal = function() {
  const modal = document.getElementById('blog-article-modal');
  if (!modal) return;
  modal.classList.remove('show');
  modal.classList.remove('active');
  modal.style.display = 'none';
  modal.style.opacity = '0';
  modal.style.pointerEvents = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
};

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. PAGE LOADER
  // ==========================================
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
      }, 300);
    });
    // Fallback if window load takes too long
    setTimeout(() => {
      if (loader.style.display !== 'none') {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
      }
    }, 1500);
  }

  // ==========================================
  // 2. THEME SWITCHER (LIGHT / DARK)
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark'; // default is dark-theme for high tech agency vibe
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
      localStorage.setItem('theme', currentTheme);
    });
  }

  // ==========================================
  // 3. COOKIE CONSENT
  // ==========================================
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesBtn = document.getElementById('accept-cookies');
  const declineCookiesBtn = document.getElementById('decline-cookies');

  if (cookieBanner && acceptCookiesBtn) {
    const consent = localStorage.getItem('bf_cookie_consent');
    if (!consent) {
      setTimeout(() => {
        cookieBanner.classList.add('show');
      }, 2000);
    }

    acceptCookiesBtn.addEventListener('click', () => {
      localStorage.setItem('bf_cookie_consent', 'accepted');
      cookieBanner.classList.remove('show');
    });

    if (declineCookiesBtn) {
      declineCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('bf_cookie_consent', 'declined');
        cookieBanner.classList.remove('show');
      });
    }
  }

  // ==========================================
  // 4. SCROLL INTERACTIONS (HEADER, BACK TO TOP, STICKY CTA)
  // ==========================================
  const header = document.querySelector('header');
  const backToTopBtn = document.getElementById('back-to-top');
  const stickyCtaBar = document.getElementById('sticky-cta');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header styling on scroll
    if (scrollPos > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollPos > 500) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    // Sticky CTA visibility (shown when hero is scrolled out of view)
    if (stickyCtaBar) {
      if (scrollPos > 600) {
        stickyCtaBar.classList.add('show');
      } else {
        stickyCtaBar.classList.remove('show');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================
  // 5. MOBILE MENU TOGGLE
  // ==========================================
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  if (mobileToggle && header) {
    const closeMobileMenu = () => {
      header.classList.remove('mobile-active');
      document.body.classList.remove('no-scroll');
    };

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = header.classList.toggle('mobile-active');
      document.body.classList.toggle('no-scroll', isOpen);
    });

    // Close menu when links are clicked
    const navLinksList = document.querySelectorAll('.nav-links a');
    navLinksList.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside the mobile navigation
    document.addEventListener('click', (e) => {
      if (header.classList.contains('mobile-active') && !header.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close menu on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && header.classList.contains('mobile-active')) {
        closeMobileMenu();
      }
    });
  }

  // ==========================================
  // 6. STATISTICS ANIMATION
  // ==========================================
  const statsElements = document.querySelectorAll('.stat-num');
  if (statsElements.length > 0) {
    const animateStats = (el) => {
      const targetAttr = el.getAttribute('data-target');
      const target = parseFloat(targetAttr);
      const suffix = el.getAttribute('data-suffix') || '';
      if (isNaN(target)) {
        el.innerText = targetAttr + suffix;
        return;
      }
      let current = 0;
      const duration = 1500; // ms
      const stepTime = 15;
      const steps = duration / stepTime;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.innerText = Math.round(target) + suffix;
          clearInterval(timer);
        } else {
          el.innerText = Math.round(current) + suffix;
        }
      }, stepTime);
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statsElements.forEach(el => statsObserver.observe(el));
  }

  // ==========================================
  // 7. FUZZY SEARCH (Services, Portfolio, Blog)
  // ==========================================
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      // Select searchable blocks
      const serviceCards = document.querySelectorAll('.service-card');
      const portfolioCards = document.querySelectorAll('.portfolio-card');
      const blogCards = document.querySelectorAll('.blog-card');

      const filterSection = (cards, textSelector) => {
        cards.forEach(card => {
          const content = card.querySelector(textSelector).innerText.toLowerCase();
          if (content.includes(query)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      };

      filterSection(serviceCards, 'h3');
      filterSection(portfolioCards, 'h3');
      filterSection(blogCards, 'h3');
    });
  }

  // ==========================================
  // 8. INTERACTIVE PROJECT COST ESTIMATOR
  // ==========================================
  const calcPagesRange = document.getElementById('calc-pages');
  const calcPagesVal = document.getElementById('calc-pages-val');
  const calcBizType = document.getElementById('calc-biz-type');
  const calcWebType = document.getElementById('calc-web-type');
  const calcDesign = document.getElementById('calc-design');
  const calcHosting = document.getElementById('calc-hosting');
  const calcMaintenance = document.getElementById('calc-maintenance');
  const calcFeatures = document.querySelectorAll('.calc-feature');
  const calcPriceEl = document.getElementById('calc-total-price');

  const updateCalculatorPrice = () => {
    if (!calcPagesRange || !calcPriceEl) return;
    
    const pages = parseInt(calcPagesRange.value);
    calcPagesVal.innerText = pages;

    const webType = calcWebType.value;
    const design = calcDesign.value;
    const hosting = calcHosting.value;
    const maintenance = calcMaintenance.value;

    // 1. Calculate Base and extra page rates
    let basePrice = 4999;
    let extraPageRate = 500;
    let pageLimit = 5;

    if (webType === 'basic') {
      basePrice = 4999;
      extraPageRate = 500;
      pageLimit = 5;
    } else if (webType === 'dynamic') {
      basePrice = 9999;
      extraPageRate = 750;
      pageLimit = 10;
    } else if (webType === 'ecommerce') {
      basePrice = 24999;
      extraPageRate = 1000;
      pageLimit = 15;
    } else if (webType === 'custom') {
      basePrice = 49999;
      extraPageRate = 1500;
      pageLimit = 20;
    }

    let subtotal = basePrice;
    if (pages > pageLimit) {
      subtotal += (pages - pageLimit) * extraPageRate;
    }

    // 2. Design preference multiplier
    if (design === 'custom') {
      subtotal *= 1.4; // +40% for custom tailored design
    }

    // 3. Add checked features
    calcFeatures.forEach(feature => {
      if (feature.checked) {
        subtotal += parseFloat(feature.getAttribute('data-price') || 0);
      }
    });

    // 4. Hosting packages
    if (hosting === 'standard') {
      subtotal += 999;
    } else if (hosting === 'premium') {
      subtotal += 1999;
    }

    // 5. Maintenance plans
    if (maintenance === 'standard') {
      subtotal += 999;
    } else if (maintenance === 'premium') {
      subtotal += 1999;
    }

    // 6. Generate range (min is subtotal * 0.85, max is subtotal * 1.15)
    const minVal = Math.round(subtotal * 0.85);
    const maxVal = Math.round(subtotal * 1.15);

    // Get previous values for smooth animation
    const prevMin = parseInt(calcPriceEl.getAttribute('data-prev-min')) || 0;
    const prevMax = parseInt(calcPriceEl.getAttribute('data-prev-max')) || 0;

    calcPriceEl.setAttribute('data-prev-min', minVal);
    calcPriceEl.setAttribute('data-prev-max', maxVal);

    animatePriceRange(calcPriceEl, prevMin, minVal, prevMax, maxVal);
  };

  const animatePriceRange = (element, startMin, endMin, startMax, endMax) => {
    let curMin = startMin;
    let curMax = startMax;
    const duration = 400; // ms
    const stepTime = 15;
    const steps = duration / stepTime;
    const incMin = (endMin - startMin) / steps;
    const incMax = (endMax - startMax) / steps;

    const timer = setInterval(() => {
      curMin += incMin;
      curMax += incMax;

      const isDoneMin = (incMin > 0 && curMin >= endMin) || (incMin < 0 && curMin <= endMin) || incMin === 0;
      const isDoneMax = (incMax > 0 && curMax >= endMax) || (incMax < 0 && curMax <= endMax) || incMax === 0;

      if (isDoneMin && isDoneMax) {
        element.innerText = `₹${Math.round(endMin).toLocaleString('en-IN')} – ₹${Math.round(endMax).toLocaleString('en-IN')}`;
        clearInterval(timer);
      } else {
        const showMin = isDoneMin ? endMin : curMin;
        const showMax = isDoneMax ? endMax : curMax;
        element.innerText = `₹${Math.round(showMin).toLocaleString('en-IN')} – ₹${Math.round(showMax).toLocaleString('en-IN')}`;
      }
    }, stepTime);
  };

  if (calcPagesRange) {
    calcPagesRange.addEventListener('input', updateCalculatorPrice);
    calcBizType.addEventListener('change', updateCalculatorPrice);
    calcWebType.addEventListener('change', updateCalculatorPrice);
    calcDesign.addEventListener('change', updateCalculatorPrice);
    calcHosting.addEventListener('change', updateCalculatorPrice);
    calcMaintenance.addEventListener('change', updateCalculatorPrice);
    calcFeatures.forEach(chk => chk.addEventListener('change', updateCalculatorPrice));
    
    // Initial call
    updateCalculatorPrice();
  }

  // ==========================================
  // 9. PORTFOLIO TABS / FILTER
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        if (filterVal === 'all') {
          card.style.display = 'flex';
        } else {
          const category = card.getAttribute('data-category');
          if (category === filterVal) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // ==========================================
  // 10. CASE STUDY MODAL
  // ==========================================
  const modal = document.getElementById('case-study-modal');
  const modalClose = document.querySelector('.close-modal');
  const openModalBtns = document.querySelectorAll('.open-case-study');
  
  const caseStudyData = {
    'local': {
      title: "Gourmet Grind Café - Beautiful Coffee Shop Experience",
      goal: "Modernize a local bakery and coffee shop with a clean website that increases order volume and integrates a online reservation system.",
      challenge: "The old site was hard to read on mobile, loading extremely slowly, causing visitors to bounce to competitors.",
      solution: "We designed a minimalist, mobile-first website using elegant typography and soft tones. We built a fast menu visualizer and integrated automated reservations.",
      results: "Mobile bounce rate fell from 65% to 18%. Online reservations grew by 42% in the first 30 days."
    },
    'startup': {
      title: "CloudFlow AI - Next-Gen Tech Platform Landing Page",
      goal: "Generate sign-ups for a newly launched Artificial Intelligence service by showcasing a futuristic, responsive design.",
      challenge: "Explaining highly complex AI workflows to standard business users in a friendly, simplified manner.",
      solution: "A beautiful, interactive landing page utilizing glowing gradients and high fidelity dashboard mockups. Technical jargon was replaced with premium copy.",
      results: "Conversion rates on the signup form jumped to 7.8% (agency average is 2.5%). Over 1,200 startup accounts generated in week one."
    },
    'brand': {
      title: "Dr. Sarah Adams - Creator & Coach Platform",
      goal: "Create a trustworthy personal brand hub to launch online coaching programs and book premium consultations.",
      challenge: "Building authority while remaining accessible to young entrepreneurs.",
      solution: "A premium clean grids layout featuring responsive consulting application forms and testimonial video cards.",
      results: "Email list size doubled within 3 weeks. Direct consulting booking revenue increased by $14,000."
    },
    'ecommerce': {
      title: "Loom & Thread - Sleek Boutique Fashion E-commerce",
      goal: "Increase storefront checkouts and average order value via optimized product landing pages.",
      challenge: "Friction during shop mobile layouts caused cart abandonment rate to hover at 78%.",
      solution: "A custom checkout flow, dynamic product filter controls, fast-loading images, and smooth animated transition sequences.",
      results: "Cart abandonment dropped to 48%, increasing sales revenue by 34%."
    },
    'nexora': {
      title: "Nexora Solutions - Premium Digital Agency Website",
      goal: "Help a growing digital agency establish a strong online presence, generate high-quality leads, and showcase its services with a premium modern website.",
      challenge: "The previous website looked outdated, loaded slowly, and was not optimized for mobile devices, leading to poor user engagement and low conversion rates.",
      solution: "We designed a fast, fully responsive business website with a clean layout, engaging animations, service highlights, client testimonials, and an optimized contact form to improve user experience and increase lead generation.",
      results: "Bounce rate dropped by 45%. Monthly sales consultations and premium leads increased by 62% within the first 6 weeks of launch."
    },
    'gourmet': {
      title: "Gourmet Grind Café - Beautiful Coffee Shop Experience",
      goal: "Modernize a local bakery and coffee shop with a clean website that increases online orders and supports table reservations.",
      challenge: "The old website was difficult to navigate on mobile devices, loaded slowly, and failed to showcase the café's menu effectively.",
      solution: "We created a minimalist, mobile-first website featuring an interactive menu, online reservation system, elegant typography, smooth animations, and optimized performance for a premium customer experience.",
      results: "Mobile bounce rate fell from 65% to 18%. Online reservations grew by 42% in the first 30 days."
    },
    'trendora': {
      title: "Trendora Store - Seamless E-Commerce Shopping",
      goal: "Build a modern online shopping experience that increases product sales, improves customer engagement, and simplifies the purchasing process.",
      challenge: "The existing store had a confusing interface, slow navigation, and a complicated checkout flow that caused customers to abandon their carts.",
      solution: "We developed a responsive e-commerce frontend with product search, category filters, shopping cart functionality, wishlist support, and an intuitive user interface designed for faster shopping.",
      results: "Cart abandonment dropped to 48%, increasing sales revenue by 34%."
    },
    'learnsphere': {
      title: "LearnSphere Academy - Next-Gen Education Portal",
      goal: "Create a professional educational platform to attract students, promote courses, and simplify the admission process.",
      challenge: "The previous website lacked a modern design, was difficult to use on mobile devices, and provided limited information about available courses.",
      solution: "We built a responsive education website featuring course listings, instructor profiles, student testimonials, an admission form, FAQs, and smooth navigation to enhance the learning experience.",
      results: "Online admission applications increased by 54% within 4 weeks of launch."
    },
    'creative_portfolio': {
      title: "Creative Developer Portfolio - Premium Branding Hub",
      goal: "Develop a premium personal portfolio that showcases professional skills, projects, certifications, and achievements to attract freelance clients and recruiters.",
      challenge: "The previous portfolio lacked visual appeal, had poor responsiveness, and failed to effectively demonstrate technical expertise.",
      solution: "We designed a modern portfolio with a dynamic hero section, project showcase, animated skills, experience timeline, testimonials, contact form, and smooth interactive animations to create a strong professional impression.",
      results: "Freelance inquiry leads grew by 80%, with double the recruiter message volume."
    }
  };

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const studyKey = btn.getAttribute('data-study');
      const data = caseStudyData[studyKey];

      if (data) {
        document.getElementById('modal-study-title').innerText = data.title;
        document.getElementById('modal-study-goal').innerText = data.goal;
        document.getElementById('modal-study-challenge').innerText = data.challenge;
        document.getElementById('modal-study-solution').innerText = data.solution;
        document.getElementById('modal-study-results').innerText = data.results;

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
  };

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // ==========================================
  // 11. CLIENT DASHBOARD & PROJECT PROGRESS TRACKER
  // ==========================================
  const loginDashboardBtn = document.getElementById('login-dashboard-btn');
  const demoCodeInput = document.getElementById('dashboard-code-input');
  const dashboardLoginBox = document.getElementById('dashboard-login');
  const dashboardViewBox = document.getElementById('dashboard-view');
  
  // Track Details Mapping
  const demoProjects = {
    'BF-STARTUP-99': {
      client: "CloudFlow AI",
      project: "Premium SaaS Website Integration",
      progress: 75,
      step: 6, // Testing stage
      milestones: [
        { text: "Detailed consultation completed", done: true },
        { text: "Modern custom UI layouts approved", done: true },
        { text: "Fast Frontend development completed", done: true },
        { text: "API integration and workflow tests", done: true },
        { text: "Mobile responsiveness and speed optimization", done: false },
        { text: "Production domain launch & handoff", done: false }
      ],
      links: [
        { name: "Live Staging Preview", url: "#" },
        { name: "Approved Design Mockups", url: "#" },
        { name: "Signed Proposal Contract", url: "#" }
      ]
    },
    'BF-SHOP-12': {
      client: "Gourmet Grind Café",
      project: "Local Cafe Branding & Website",
      progress: 35,
      step: 3, // Design stage
      milestones: [
        { text: "Onboarding and questionnaire review", done: true },
        { text: "Branding and color palette alignment", done: true },
        { text: "Design concepts design and reviews", done: false },
        { text: "Development phase kickoff", done: false },
        { text: "Menu integration & reservations testing", done: false },
        { text: "Final launch checklist", done: false }
      ],
      links: [
        { name: "Design Drafts (Figma)", url: "#" },
        { name: "Project Timeline Sheet", url: "#" }
      ]
    }
  };

  if (loginDashboardBtn) {
    loginDashboardBtn.addEventListener('click', () => {
      const code = demoCodeInput.value.toUpperCase().trim();
      const proj = demoProjects[code];

      if (proj) {
        // Load details
        document.getElementById('dash-client-name').innerText = proj.client;
        document.getElementById('dash-project-name').innerText = proj.project;
        document.getElementById('dash-progress-lbl').innerText = `${proj.progress}%`;
        
        // Progress Bar
        const bar = document.getElementById('dash-progress-bar');
        bar.style.width = '0%';
        
        // Milestones
        const milestonesList = document.getElementById('dash-milestones');
        milestonesList.innerHTML = '';
        proj.milestones.forEach(m => {
          const li = document.createElement('div');
          li.className = `milestone-item ${m.done ? 'done' : ''}`;
          li.innerHTML = `
            <span class="milestone-icon">${m.done ? '<i class="fas fa-check-circle"></i>' : '<i class="far fa-circle"></i>'}</span>
            <span>${m.text}</span>
          `;
          milestonesList.appendChild(li);
        });

        // Resources Links
        const linksList = document.getElementById('dash-links');
        linksList.innerHTML = '';
        proj.links.forEach(link => {
          const div = document.createElement('div');
          div.className = 'dashboard-link-item';
          div.innerHTML = `
            <span>${link.name}</span>
            <a href="${link.url}" target="_blank">View File <i class="fas fa-external-link-alt"></i></a>
          `;
          linksList.appendChild(div);
        });

        // Highlight Tracker Node
        const nodes = document.querySelectorAll('.tracker-step-node');
        nodes.forEach((node, idx) => {
          node.classList.remove('completed', 'active');
          const stepNum = idx + 1;
          if (stepNum < proj.step) {
            node.classList.add('completed');
          } else if (stepNum === proj.step) {
            node.classList.add('active');
          }
        });

        // Switch View
        dashboardLoginBox.style.display = 'none';
        dashboardViewBox.style.display = 'block';

        // Animate Bar Fill
        setTimeout(() => {
          bar.style.width = `${proj.progress}%`;
        }, 100);
      } else {
        alert("Demo codes are: BF-STARTUP-99 or BF-SHOP-12. Please type one of these to test!");
      }
    });
  }

  // ==========================================
  // 12. TESTIMONIALS SLIDER
  // ==========================================
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');

  if (track && prevBtn && nextBtn) {
    let index = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;
    
    const getSlidesVisible = () => {
      return window.innerWidth > 768 ? 2 : 1;
    };

    const updateSliderPosition = () => {
      const visible = getSlidesVisible();
      const maxIndex = totalSlides - visible;
      if (index > maxIndex) index = maxIndex;
      if (index < 0) index = 0;

      const slideWidth = slides[0].getBoundingClientRect().width;
      const offset = index * (slideWidth + 24); // width + gap
      track.style.transform = `translateX(-${offset}px)`;
    };

    nextBtn.addEventListener('click', () => {
      const visible = getSlidesVisible();
      if (index < totalSlides - visible) {
        index++;
      } else {
        index = 0; // wrap
      }
      updateSliderPosition();
    });

    prevBtn.addEventListener('click', () => {
      const visible = getSlidesVisible();
      if (index > 0) {
        index--;
      } else {
        index = totalSlides - visible;
      }
      updateSliderPosition();
    });

    window.addEventListener('resize', updateSliderPosition);
    
    // Auto-scroll slider
    setInterval(() => {
      const visible = getSlidesVisible();
      if (index < totalSlides - visible) {
        index++;
      } else {
        index = 0;
      }
      updateSliderPosition();
    }, 6000);
  }

  // ==========================================
  // 13. FAQ ACCORDION (NATIVE DETAILS & SUMMARY)
  // ==========================================
  const faqDetails = document.querySelectorAll('details.faq-item');
  faqDetails.forEach(targetDetail => {
    targetDetail.addEventListener('toggle', () => {
      if (targetDetail.open) {
        faqDetails.forEach(detail => {
          if (detail !== targetDetail) {
            detail.removeAttribute('open');
          }
        });
      }
    });
  });

  // ==========================================
  // 14. MULTI-STEP QUOTE WIZARD FORM
  // ==========================================
  const wizardForm = document.getElementById('quote-wizard-form');
  const stepPanes = document.querySelectorAll('.wizard-step-pane');
  const indicatorNodes = document.querySelectorAll('.wizard-ind-node');
  const progressFill = document.querySelector('.wizard-indicator-fill');
  
  const nextStepBtns = document.querySelectorAll('.wizard-next');
  const prevStepBtns = document.querySelectorAll('.wizard-prev');

  let currentStep = 1;

  const updateWizard = () => {
    // Update active pane
    stepPanes.forEach(pane => {
      pane.classList.remove('active');
      if (parseInt(pane.getAttribute('data-step')) === currentStep) {
        pane.classList.add('active');
      }
    });

    // Update Indicators
    indicatorNodes.forEach(node => {
      const step = parseInt(node.getAttribute('data-step'));
      node.classList.remove('active', 'completed');
      if (step < currentStep) {
        node.classList.add('completed');
      } else if (step === currentStep) {
        node.classList.add('active');
      }
    });

    // Progress Bar Fill
    const fillPercent = ((currentStep - 1) / (indicatorNodes.length - 1)) * 100;
    progressFill.style.width = `${fillPercent}%`;
  };

  const validateStep = (step) => {
    const currentPane = document.querySelector(`.wizard-step-pane[data-step="${step}"]`);
    const inputs = currentPane.querySelectorAll('input[required], select[required], textarea[required]');
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = 'red';
        input.addEventListener('input', () => {
          input.style.borderColor = '';
        }, { once: true });
      }
    });

    return valid;
  };

  nextStepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        currentStep++;
        updateWizard();
      }
    });
  });

  prevStepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentStep--;
      updateWizard();
    });
  });

  if (wizardForm) {
    wizardForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (validateStep(currentStep)) {
        // Collect form data
        const formData = new FormData(wizardForm);
        formData.append('form_type', 'quotes');
        const name = formData.get('quote-name') || 'Guest';
        
        // If Google Sheet Web App URL is configured, submit the data
        if (window.GOOGLE_SHEETS_URL && window.GOOGLE_SHEETS_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
          fetch(window.GOOGLE_SHEETS_URL, {
            method: 'POST',
            body: formData
          })
          .then(res => res.json())
          .then(data => console.log('Quote saved to Google Sheets:', data))
          .catch(err => console.error('Sheet save failed:', err));
        }

        // Show success animation or modal
        alert(`Thank you, ${name}! Your free website quote request has been received. Our team will contact you within 24 hours.`);
        
        // Reset form
        wizardForm.reset();
        currentStep = 1;
        updateWizard();
      }
    });
  }

  // Zoryvex Lounge Community Application Form handler
  const communityForm = document.getElementById('community-join-form');
  if (communityForm) {
    communityForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(communityForm);
      formData.append('form_type', 'community');
      
      // Gather all selected skills checkbox values
      const selectedSkills = [];
      const skillCheckboxes = communityForm.querySelectorAll('input[name="skills"]:checked');
      skillCheckboxes.forEach(cb => selectedSkills.push(cb.value));
      
      // Remove original parameters and replace with array entries for Apps Script parameters mapping
      formData.delete('skills');
      selectedSkills.forEach(skill => formData.append('skills', skill));

      const name = formData.get('name') || 'Applicant';

      if (window.GOOGLE_SHEETS_URL && window.GOOGLE_SHEETS_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        fetch(window.GOOGLE_SHEETS_URL, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data => console.log('Community application saved to Google Sheets:', data))
        .catch(err => console.error('Sheet save failed:', err));
      }

      alert(`Thank you, ${name}! Your community application has been successfully submitted. Please make sure to join the WhatsApp Group!`);
      communityForm.reset();
    });
  }

  // ==========================================
  // 15. APPOINTMENT BOOKING CALENDAR SCHEDULER
  // ==========================================
  const calGrid = document.getElementById('cal-days-grid');
  const calTitle = document.getElementById('cal-month-title');
  const slotsContainer = document.getElementById('time-slots-container');
  const bookConsultationBtn = document.getElementById('confirm-booking-btn');

  let selectedDate = null;
  let selectedTime = null;

  const buildCalendar = () => {
    if (!calGrid) return;

    calGrid.innerHTML = '';
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // Current month

    // Calendar Month Name
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    calTitle.innerText = `${monthNames[month]} ${year}`;

    // Get first day of month
    const firstDay = new Date(year, month, 1).getDay();
    // Get total days in month
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Fill Empty days until first day
    for (let i = 0; i < firstDay; i++) {
      const emptyDiv = document.createElement('div');
      calGrid.appendChild(emptyDiv);
    }

    // Populate actual days
    for (let day = 1; day <= totalDays; day++) {
      const btn = document.createElement('button');
      btn.className = 'calendar-day-btn';
      btn.innerText = day;

      const dateStr = `${year}-${month + 1}-${day}`;
      const dayDate = new Date(year, month, day);

      // Disable past days
      if (dayDate < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
        btn.disabled = true;
      } else {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          document.querySelectorAll('.calendar-day-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          selectedDate = dateStr;
          
          // Show time slots
          buildTimeSlots();
        });
      }

      calGrid.appendChild(btn);
    }
  };

  const buildTimeSlots = () => {
    slotsContainer.innerHTML = '';
    const slots = ["10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM", "5:00 PM"];
    
    slots.forEach(slot => {
      const btn = document.createElement('button');
      btn.className = 'time-slot-btn';
      btn.innerText = slot;
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedTime = slot;
      });
      slotsContainer.appendChild(btn);
    });
  };

  if (calGrid) {
    buildCalendar();
  }

  if (bookConsultationBtn) {
    bookConsultationBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!selectedDate || !selectedTime) {
        alert("Please select a date and an available time slot first!");
        return;
      }
      alert(`Awesome! Your consultation booking is confirmed on ${selectedDate} at ${selectedTime}. We will send you a calendar invite shortly.`);
      
      // Close booking modal if open
      const bookingModal = document.getElementById('booking-modal');
      if (bookingModal) {
        bookingModal.classList.remove('show');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Open/Close Booking Modal from CTA triggers
  const bookingModal = document.getElementById('booking-modal');
  const openBookingBtns = document.querySelectorAll('.open-booking-trigger');
  
  openBookingBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (bookingModal) {
        bookingModal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeBookingModalBtn = document.getElementById('close-booking-modal');
  if (closeBookingModalBtn) {
    closeBookingModalBtn.addEventListener('click', () => {
      bookingModal.classList.remove('show');
      document.body.style.overflow = 'auto';
    });
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('show');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // ==========================================
  // 16. MOCK LIVE CHATBOT WIDGET
  // ==========================================
  const chatToggle = document.getElementById('chat-toggle');
  const chatBox = document.getElementById('chat-box');
  const closeChat = document.getElementById('close-chat');
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');

  if (chatToggle && chatBox) {
    chatToggle.addEventListener('click', () => {
      chatBox.classList.toggle('show');
    });

    if (closeChat) {
      closeChat.addEventListener('click', () => {
        chatBox.classList.remove('show');
      });
    }

    const appendMessage = (text, sender) => {
      const msg = document.createElement('div');
      msg.className = `chat-msg ${sender}`;
      msg.innerText = text;
      chatMessages.appendChild(msg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const handleBotResponse = (userText) => {
      const cleanText = userText.toLowerCase().trim();
      let reply = "I'm here to help! Tell me about your business. You can ask about our 'pricing', 'delivery time', or 'how to book' a free consultation.";

      if (cleanText.includes('pricing') || cleanText.includes('cost') || cleanText.includes('cheap')) {
        reply = "We offer clear, upfront pricing. Our packages start at $499 for local shops, and we also have an interactive calculator on this page to build custom estimates!";
      } else if (cleanText.includes('time') || cleanText.includes('days') || cleanText.includes('slow')) {
        reply = "Standard websites are delivered in 7-14 days. Rush delivery (3-5 days) is available if you need to launch quickly!";
      } else if (cleanText.includes('book') || cleanText.includes('consultation') || cleanText.includes('call')) {
        reply = "You can book a free consultation directly on our website! Scroll down to the Contact form or click the 'Book Consultation' button at the top.";
      } else if (cleanText.includes('hello') || cleanText.includes('hi') || cleanText.includes('hey')) {
        reply = "Hey there! 👋 Welcome to Zoryvex Studio. How can we help grow your business online today?";
      }

      setTimeout(() => {
        appendMessage(reply, 'bot');
      }, 800);
    };

    const sendUserMessage = () => {
      const text = chatInput.value.trim();
      if (!text) return;

      appendMessage(text, 'user');
      chatInput.value = '';
      
      handleBotResponse(text);
    };

    chatSend.addEventListener('click', sendUserMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendUserMessage();
    });
  }

  // ==========================================
  // 15. BLOG ARTICLE MODAL LISTENER BINDINGS
  // ==========================================
  const blogModal = document.getElementById('blog-article-modal');
  const closeBlogModalBtn = document.getElementById('close-blog-modal');
  const readMoreBtns = document.querySelectorAll('.blog-read-more');

  readMoreBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openBlogArticleModal(index + 1);
    });
  });

  if (closeBlogModalBtn) {
    closeBlogModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.closeBlogArticleModal();
    });
  }
  if (blogModal) {
    blogModal.addEventListener('click', (e) => {
      if (e.target === blogModal) {
        window.closeBlogArticleModal();
      }
    });
  }

});
