document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DYNAMIC DATES
  // ==========================================
  const insertDynamicDates = () => {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    
    document.querySelectorAll('.dynamic-date').forEach(el => {
      el.innerText = formattedDate;
    });
  };
  insertDynamicDates();

  // ==========================================
  // 2. SCROLL PROGRESS BAR
  // ==========================================
  const progressBar = document.getElementById('scroll-progress-bar');
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  });

  // ==========================================
  // 3. TABLE OF CONTENTS SCROLL SPY
  // ==========================================
  const sections = document.querySelectorAll('.policy-section');
  const tocLinks = document.querySelectorAll('.toc-link');

  const updateActiveTOC = () => {
    let current = '';
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      // Triggers slightly before the section hits top
      if (scrollPos >= (sectionTop - 180)) {
        current = section.getAttribute('id');
      }
    });

    tocLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };
  window.addEventListener('scroll', updateActiveTOC);
  updateActiveTOC(); // Initial run

  // Smooth scroll offset for TOC links
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 150,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==========================================
  // 4. SEARCH WITHIN POLICY DOCUMENT
  // ==========================================
  const searchInput = document.getElementById('policy-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      sections.forEach(section => {
        const text = section.innerText.toLowerCase();
        if (query === '' || text.includes(query)) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
      
      // Update Table of Contents visibility based on active sections
      tocLinks.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          if (targetSection.style.display === 'none') {
            link.parentElement.style.display = 'none';
          } else {
            link.parentElement.style.display = 'block';
          }
        }
      });
    });
  }

  // ==========================================
  // 5. PRINT & DOWNLOAD PDF
  // ==========================================
  const printBtn = document.getElementById('btn-print-policy');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  const pdfBtn = document.getElementById('btn-download-pdf');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
      alert("Opening print layout. Please select 'Save as PDF' as your Destination Printer to download this document as a PDF file.");
      window.print();
    });
  }

  // ==========================================
  // 6. COOKIE PREFERENCES MODAL
  // ==========================================
  const cookiePrefBtn = document.getElementById('btn-cookie-preferences');
  const cookieModal = document.getElementById('cookie-pref-modal');
  const closeCookieModal = document.getElementById('close-cookie-modal');
  const saveCookieBtn = document.getElementById('save-cookie-pref-btn');
  
  const chkAnalytics = document.getElementById('chk-cookie-analytics');
  const chkPref = document.getElementById('chk-cookie-pref');

  const openCookieModal = () => {
    if (!cookieModal) return;
    
    // Load current values
    const consentAnalytics = localStorage.getItem('bf_cookie_analytics') !== 'declined';
    const consentPref = localStorage.getItem('bf_cookie_pref') !== 'declined';
    
    if (chkAnalytics) chkAnalytics.checked = consentAnalytics;
    if (chkPref) chkPref.checked = consentPref;

    cookieModal.classList.add('active');
    cookieModal.setAttribute('aria-hidden', 'false');
  };

  const hideCookieModal = () => {
    if (cookieModal) {
      cookieModal.classList.remove('active');
      cookieModal.setAttribute('aria-hidden', 'true');
    }
  };

  if (cookiePrefBtn) cookiePrefBtn.addEventListener('click', openCookieModal);
  if (closeCookieModal) closeCookieModal.addEventListener('click', hideCookieModal);
  
  if (saveCookieBtn) {
    saveCookieBtn.addEventListener('click', () => {
      const analyticsVal = chkAnalytics && chkAnalytics.checked ? 'accepted' : 'declined';
      const prefVal = chkPref && chkPref.checked ? 'accepted' : 'declined';
      
      localStorage.setItem('bf_cookie_analytics', analyticsVal);
      localStorage.setItem('bf_cookie_pref', prefVal);
      localStorage.setItem('bf_cookie_consent', 'accepted'); // Accept overall
      
      alert('Your cookie preferences have been updated!');
      hideCookieModal();
    });
  }

  // Close modals on clicking outside content
  window.addEventListener('click', (e) => {
    if (e.target === cookieModal) hideCookieModal();
    if (e.target === dataModal) hideDataModal();
  });

  // ==========================================
  // 7. DATA REQUESTS MODAL (REQUEST/DELETE)
  // ==========================================
  const requestDataBtn = document.getElementById('btn-request-data');
  const deleteDataBtn = document.getElementById('btn-delete-data');
  const dataModal = document.getElementById('data-request-modal');
  const closeDataModal = document.getElementById('close-data-modal');
  
  const dataModalTitle = document.getElementById('data-modal-title');
  const dataModalDesc = document.getElementById('data-modal-desc');
  const dataSubmitBtn = document.getElementById('data-submit-btn');

  const openDataModal = (mode) => {
    if (!dataModal) return;
    
    if (mode === 'request') {
      dataModalTitle.innerText = 'Request My Stored Data';
      dataModalDesc.innerText = 'Submit your registered email address below. We will compile a report of your personal files and send it to you within 48 hours.';
      dataSubmitBtn.innerText = 'Submit Request';
    } else {
      dataModalTitle.innerText = 'Request Data Deletion';
      dataModalDesc.innerText = 'Enter your email to request deletion of all your stored records. Once submitted, our Data Protection Officer will verify ownership and clear your data files.';
      dataSubmitBtn.innerText = 'Request Deletion';
    }
    
    dataModal.classList.add('active');
    dataModal.setAttribute('aria-hidden', 'false');
  };

  const hideDataModal = () => {
    if (dataModal) {
      dataModal.classList.remove('active');
      dataModal.setAttribute('aria-hidden', 'true');
    }
  };

  if (requestDataBtn) requestDataBtn.addEventListener('click', () => openDataModal('request'));
  if (deleteDataBtn) deleteDataBtn.addEventListener('click', () => openDataModal('delete'));
  if (closeDataModal) closeDataModal.addEventListener('click', hideDataModal);

});
