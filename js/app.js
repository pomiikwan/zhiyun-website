/* ============================================
   Zhiyun Digital - App.js
   Global interaction scripts
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initNavbar();
  initSearch();
  initBackToTop();
  highlightCurrentPage();
});

/* --- Sidebar --- */
function initSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const mainContent = document.querySelector('.main-content');
  const toggleBtn = document.querySelector('.sidebar-toggle');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

  // Toggle collapse
  if (toggleBtn && sidebar && mainContent) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      mainContent.classList.toggle('sidebar-collapsed');
    });
  }

  // Mobile menu
  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
    });
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 &&
          sidebar.classList.contains('mobile-open') &&
          !sidebar.contains(e.target) &&
          !mobileMenuBtn.contains(e.target)) {
        sidebar.classList.remove('mobile-open');
      }
    });
  }

  // Section expand/collapse
  document.querySelectorAll('.sidebar-section-title').forEach(title => {
    title.addEventListener('click', () => {
      title.classList.toggle('expanded');
      const items = title.nextElementSibling;
      if (items && items.classList.contains('sidebar-items')) {
        if (items.style.maxHeight) {
          items.style.maxHeight = null;
        } else {
          items.style.maxHeight = items.scrollHeight + 'px';
        }
      }
    });
  });
}

/* --- Navbar --- */
function initNavbar() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const sidebar = document.querySelector('.sidebar');

  // Close mobile menu on nav link click
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (sidebar) sidebar.classList.remove('mobile-open');
    });
  });
}

/* --- Search --- */
function initSearch() {
  const searchInput = document.querySelector('.navbar-search input');
  const searchResults = document.querySelector('.search-results');

  if (!searchInput || !searchResults) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length < 2) {
      searchResults.classList.remove('show');
      searchResults.innerHTML = '';
      return;
    }

    const results = searchSite(query);
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-result-item" style="color:var(--text-muted)">No results found</div>';
    } else {
      searchResults.innerHTML = results.map(r => `
        <a href="${r.href}" class="search-result-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          <div>
            <div style="color:var(--text-primary);font-weight:500">${r.title}</div>
            <div style="font-size:0.75rem;color:var(--text-muted)">${r.category}</div>
          </div>
        </a>
      `).join('');
    }
    searchResults.classList.add('show');
  });

  // Close search results on click outside
  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.remove('show');
    }
  });
}

function searchSite(query) {
  const results = [];
  if (typeof SITE_DATA === 'undefined') return results;

  // Search knowledge nodes
  Object.values(SITE_DATA.knowledgeNodes).forEach(node => {
    const text = (node.title + node.term + node.plainExplain + node.category).toLowerCase();
    if (text.includes(query)) {
      results.push({
        title: node.title,
        category: node.category,
        href: getRelativePath() + 'knowledge/' + node.href,
        score: text.indexOf(query)
      });
    }
  });

  // Search tasks
  Object.values(SITE_DATA.tasks).forEach(task => {
    const text = (task.title + task.summary + task.background).toLowerCase();
    if (text.includes(query)) {
      results.push({
        title: task.title,
        category: 'Core Task ' + task.id,
        href: getRelativePath() + 'tasks/' + task.href,
        score: text.indexOf(query) + 100
      });
    }
  });

  return results.sort((a, b) => a.score - b.score).slice(0, 8);
}

function getRelativePath() {
  const path = window.location.pathname;
  if (path.includes('/knowledge/') || path.includes('/tasks/')) {
    return '../';
  }
  return '';
}

/* --- Back to Top --- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --- Highlight Current Page --- */
function highlightCurrentPage() {
  const currentPath = window.location.pathname;

  // Navbar links
  document.querySelectorAll('.navbar-nav a').forEach(link => {
    if (currentPath.endsWith(link.getAttribute('href').replace('../', '')) ||
        currentPath.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });

  // Sidebar items
  document.querySelectorAll('.sidebar-item').forEach(item => {
    const href = item.getAttribute('href') || item.dataset.href;
    if (href && (currentPath.endsWith(href) || currentPath.endsWith(href.replace('../', '')))) {
      item.classList.add('active');
    }
  });
}

/* --- Utility: Create Sidebar HTML --- */
function createSidebarHTML(activeId) {
  if (typeof SITE_DATA === 'undefined') return '';

  let html = '';
  SITE_DATA.navigation.categories.forEach(cat => {
    const isActive = cat.children.includes(activeId);
    html += `<div class="sidebar-section">`;
    html += `<div class="sidebar-section-title ${isActive ? 'expanded' : ''}" onclick="this.classList.toggle('expanded');var n=this.nextElementSibling;if(n.style.maxHeight){n.style.maxHeight=null;}else{n.style.maxHeight=n.scrollHeight+'px';}">`;
    html += `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
    html += `<span>${cat.titleZh}</span></div>`;
    html += `<ul class="sidebar-items" style="${isActive ? 'max-height:500px' : ''}">`;

    cat.children.forEach(childId => {
      const node = SITE_DATA.knowledgeNodes[childId];
      if (node) {
        html += `<a href="${node.href}" class="sidebar-item ${childId === activeId ? 'active' : ''}">`;
        html += `<span>${node.title}</span></a>`;
      }
    });

    html += `</ul></div>`;
  });

  return html;
}

/* --- Utility: Create Navbar HTML --- */
function createNavbarHTML() {
  return `
    <div class="navbar-brand">
      <button class="sidebar-toggle" aria-label="Toggle sidebar">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
      <span>Zhiyun Digital</span>
    </div>
    <ul class="navbar-nav">
      <li><a href="../index.html"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>Home</a></li>
      <li><a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>Knowledge</a></li>
      <li><a href="../tasks/index.html"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>Tasks</a></li>
      <li><a href="../dashboard.html"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>Dashboard</a></li>
    </ul>
    <div class="navbar-search">
      <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <input type="text" placeholder="Search..." aria-label="Search">
      <div class="search-results"></div>
    </div>
    <button class="mobile-menu-btn" aria-label="Menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    </button>
  `;
}

/* --- Initialize Lucide Icons --- */
function initIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Run icon init after DOM load
document.addEventListener('DOMContentLoaded', initIcons);
