// ───── Theme ─────
(function initTheme() {
  var saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

function formatDate(dateStr) {
  var d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

document.addEventListener('DOMContentLoaded', function () {

  // ───── Theme toggle ─────
  var themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    var theme = document.documentElement.getAttribute('data-theme');
    themeBtn.textContent = theme === 'dark' ? 'Light' : 'Dark';
    themeBtn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      themeBtn.textContent = next === 'dark' ? 'Light' : 'Dark';
    });
  }

  // ───── Mobile sidebar ─────
  var hamburger = document.getElementById('hamburger');
  var overlay = document.getElementById('sidebarOverlay');
  if (hamburger && overlay) {
    hamburger.addEventListener('click', function () {
      overlay.classList.add('open');
    });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  }

  // ───── Featured Projects (Home) ─────
  var featuredEl = document.getElementById('featuredProjects');
  if (featuredEl && !document.getElementById('allProjects')) {
    var featured = DATA.projects.filter(function (p) { return p.featured; });
    featuredEl.innerHTML = featured.map(projectItemHTML).join('');
  }

  // ───── All Projects (Projects page) ─────
  var allProjectsEl = document.getElementById('allProjects');
  var filterBarEl = document.getElementById('filterBar');

  if (allProjectsEl) {
    var currentFilter = 'All';

    if (filterBarEl) {
      var allTags = ['All'];
      DATA.projects.forEach(function (p) {
        p.tags.forEach(function (t) {
          if (allTags.indexOf(t) === -1) allTags.push(t);
        });
      });

      filterBarEl.innerHTML = allTags.map(function (tag) {
        return '<button class="filter-btn' + (tag === 'All' ? ' active' : '') + '" data-tag="' + tag + '">' + tag + '</button>';
      }).join('');

      filterBarEl.addEventListener('click', function (e) {
        if (e.target.classList.contains('filter-btn')) {
          filterBarEl.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
          e.target.classList.add('active');
          currentFilter = e.target.getAttribute('data-tag');
          renderProjects();
        }
      });
    }

    function renderProjects() {
      var filtered = currentFilter === 'All'
        ? DATA.projects
        : DATA.projects.filter(function (p) { return p.tags.indexOf(currentFilter) !== -1; });
      allProjectsEl.innerHTML = filtered.map(projectItemHTML).join('');
    }

    renderProjects();
  }

  // ───── Skills ─────
  var skillIds = ['skillsGrid', 'resumeSkills'];
  skillIds.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.innerHTML = '<ul class="skills-list">' + DATA.skills.map(function (s) {
        var items = s.items.map(function (item) { return '<li>' + item + '</li>'; }).join('');
        return '<li class="skill-group"><h3>' + s.category + '</h3><ul>' + items + '</ul></li>';
      }).join('') + '</ul>';
    }
  });

  // ───── Blog list (Home + Blog page) ─────
  var recentEl = document.getElementById('recentPosts');
  if (recentEl) {
    recentEl.innerHTML = DATA.blogPosts.slice(0, 3).map(blogListItemHTML).join('');
  }

  var allPostsEl = document.getElementById('allPosts');
  if (allPostsEl) {
    allPostsEl.innerHTML = DATA.blogPosts.map(blogListItemHTML).join('');
  }

  // ───── Single Blog Post ─────
  var blogPostEl = document.getElementById('blogPost');
  if (blogPostEl) {
    var params = new URLSearchParams(window.location.search);
    var slug = params.get('slug');
    var post = DATA.blogPosts.find(function (p) { return p.slug === slug; });

    if (post) {
      document.title = post.title + ' — Piyush More';

      blogPostEl.innerHTML =
        '<a href="blog.html" class="back-link">&larr; Blog</a>' +
        '<h1>' + post.title + '</h1>' +
        '<p class="post-meta">' + formatDate(post.date) + ' &middot; ' + post.tags.join(', ') + '</p>' +
        '<div class="post-body" id="postBody">Loading...</div>';

      fetch('posts/' + slug + '.html')
        .then(function (res) {
          if (!res.ok) throw new Error('Not found');
          return res.text();
        })
        .then(function (html) {
          document.getElementById('postBody').innerHTML = html;
        })
        .catch(function () {
          document.getElementById('postBody').innerHTML =
            '<p style="color:var(--text-secondary);">Could not load post content.</p>';
        });
    } else {
      blogPostEl.innerHTML =
        '<a href="blog.html" class="back-link">&larr; Blog</a>' +
        '<h1>Post not found</h1>' +
        '<p style="color:var(--text-secondary);">The post you\'re looking for doesn\'t exist.</p>';
    }
  }

  // ───── Timeline (Resume) ─────
  var expEl = document.getElementById('experienceTimeline');
  if (expEl) {
    expEl.innerHTML = DATA.experience.map(timelineHTML).join('');
  }
  var eduEl = document.getElementById('educationTimeline');
  if (eduEl) {
    eduEl.innerHTML = DATA.education.map(timelineHTML).join('');
  }

  // ───── Contact Form ─────
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sent';
      setTimeout(function () {
        btn.textContent = 'Send';
        contactForm.reset();
      }, 3000);
    });
  }
});

// ───── HTML Generators ─────

function projectItemHTML(p) {
  var linksHTML = '<a href="' + p.github + '" target="_blank">Code</a>';
  if (p.live) linksHTML += ' &middot; <a href="' + p.live + '" target="_blank">Live</a>';

  return '<li class="project-item">' +
    '<h3>' + p.title + '</h3>' +
    '<p>' + p.description + '</p>' +
    '<div class="project-item-meta">' +
    '<span class="tags">' + p.tags.join(', ') + '</span>' +
    ' &middot; ' + linksHTML +
    '</div></li>';
}

function blogListItemHTML(post) {
  return '<li class="blog-list-item"><a href="post.html?slug=' + post.slug + '">' +
    '<h3>' + post.title + '</h3>' +
    '<span class="meta">' + formatDate(post.date) + ' &middot; ' + post.tags.join(', ') + '</span>' +
    '<p class="excerpt">' + post.excerpt + '</p>' +
    '</a></li>';
}

function timelineHTML(item) {
  return '<div class="timeline-item">' +
    '<h3>' + item.title + '</h3>' +
    '<span class="subtitle">' + item.company + '</span>' +
    '<p class="date">' + item.date + '</p>' +
    '<p>' + item.description + '</p>' +
    '</div>';
}
