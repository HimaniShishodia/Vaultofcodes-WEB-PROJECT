const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------- 1. DATA ---------------------- */

const PROGRAMS = [
  { icon: "◆", title: "Web Development", level: "Beginner → Advanced", duration: "12 weeks",
    desc: "HTML, CSS, JavaScript, React and Node — ship three real projects, not just exercises." },
  { icon: "◇", title: "Python for Everyone", level: "Beginner", duration: "8 weeks",
    desc: "Programming fundamentals, automation and data basics using real, small problems." },
  { icon: "✦", title: "AI & Prompt Engineering", level: "Intermediate", duration: "6 weeks",
    desc: "Working with LLMs, prompt design, and building simple AI-powered tools." },
  { icon: "▣", title: "Cybersecurity Fundamentals", level: "Beginner → Intermediate", duration: "10 weeks",
    desc: "Networking, threat models and defensive basics for anyone starting in security." },
  { icon: "◈", title: "Ethical Hacking", level: "Advanced", duration: "10 weeks",
    desc: "Hands-on penetration testing in controlled labs, from recon to reporting." },
  { icon: "▲", title: "Cloud & DevOps", level: "Intermediate", duration: "9 weeks",
    desc: "CI/CD, containers and deploying real applications the way teams actually do." }
];

const PRODUCTS = [
  { accent: "mint", name: "VaultVerify", category: "Trust infrastructure",
    desc: "Certificate and credential verification platform for institutions and employers.",
    benefit: "Verify any certificate in under 10 seconds." },
  { accent: "violet", name: "VaultCareer", category: "Career OS",
    desc: "Career guidance and student intelligence platform built on real hiring data.",
    benefit: "Personalised roadmaps, not generic advice." },
  { accent: "mint", name: "VaultHire", category: "Hiring infrastructure",
    desc: "Recruitment and internship management for teams hiring early-career talent.",
    benefit: "Connect vetted talent to real teams, faster." },
  { accent: "violet", name: "VaultCompiler", category: "Dev infrastructure",
    desc: "A cloud IDE and code execution engine used across every VaultofCodes program.",
    benefit: "Write and run real code — no local setup." }
];

const WHY_US = [
  { icon: "◆", title: "Practical learning", desc: "Every module ends in something you built, not just a quiz." },
  { icon: "◇", title: "Industry-focused skills", desc: "Curriculum shaped by what teams are actually hiring for." },
  { icon: "✦", title: "Real projects", desc: "Portfolio-ready work, reviewed by working engineers." },
  { icon: "▣", title: "Technology-first approach", desc: "We build software ourselves, then teach from that experience." },
  { icon: "◈", title: "Accessible learning", desc: "Free workshops and flexible pacing for every schedule." },
  { icon: "▲", title: "A community that ships", desc: "Peers, mentors and alumni who keep building after the course ends." }
];

const TESTIMONIALS = [
  { name: "Ananya Rao", role: "Web Dev cohort, 2025", quote: "I went from zero HTML to shipping a full-stack project in three months. The mentors actually review your code." },
  { name: "Rohit Verma", role: "Cybersecurity track", quote: "The labs feel like real incident response, not a slideshow. That's the whole reason I stayed." },
  { name: "Sana Iqbal", role: "AI & Prompt Engineering", quote: "VaultCareer suggested a path I hadn't even considered — turned out to be exactly the right fit." },
  { name: "Devansh Patel", role: "Python for Everyone", quote: "Best free workshop I've taken. Signed up for a full program the same week." },
  { name: "Meera Nair", role: "Cloud & DevOps track", quote: "First place that made CI/CD actually click for me. Deployed my first pipeline in week two." }
];

/* ---------------------- 2. CARD RENDERING ---------------------- */

function renderPrograms() {
  const grid = document.getElementById("programGrid");
  grid.innerHTML = PROGRAMS.map((p) => `
    <article class="program-card reveal">
      <div class="program-card__icon">${p.icon}</div>
      <div class="program-card__meta"><span>${p.level}</span><span>·</span><span>${p.duration}</span></div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <a href="#" class="program-card__link">View curriculum →</a>
    </article>
  `).join("");
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = PRODUCTS.map((p) => `
    <article class="product-card product-card--${p.accent} reveal">
      <div class="product-card__top">
        <h3 class="product-card__name">${p.name}</h3>
        <span class="product-card__category">${p.category}</span>
      </div>
      <p>${p.desc}</p>
      <div class="product-card__benefit">${p.benefit}</div>
      <a href="#" class="product-card__link">Explore ${p.name} →</a>
    </article>
  `).join("");
}

function renderWhyUs() {
  const grid = document.getElementById("whyGrid");
  grid.innerHTML = WHY_US.map((w) => `
    <div class="why-item reveal">
      <div class="why-item__icon">${w.icon}</div>
      <div>
        <h3>${w.title}</h3>
        <p>${w.desc}</p>
      </div>
    </div>
  `).join("");
}

function initialsOf(name) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function avatarColor(index) {
  return index % 2 === 0
    ? "linear-gradient(135deg, #5EEAD4, #1F9E86)"
    : "linear-gradient(135deg, #8B7CFF, #5C4CE0)";
}

function renderMarquee() {
  const track = document.getElementById("marqueeTrack");
  const cardsHtml = TESTIMONIALS.map((t, i) => `
    <div class="t-card">
      <p class="t-card__quote">“${t.quote}”</p>
      <div class="t-card__person">
        <div class="t-card__avatar" style="background:${avatarColor(i)}">${initialsOf(t.name)}</div>
        <div>
          <div class="t-card__name">${t.name}</div>
          <div class="t-card__role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join("");

  // Duplicate the set once so the CSS marquee animation (-50%) loops seamlessly.
  track.innerHTML = cardsHtml + cardsHtml;
}

/* ---------------------- 3. NAVBAR ---------------------- */

function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
  });

  toggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the mobile menu when a link is tapped.
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------------------- 4. SCROLL REVEAL ---------------------- */

function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* ---------------------- 5. ANIMATED COUNTERS ---------------------- */

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    // Ease-out for a natural "settling" finish.
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = value.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }

  if (prefersReducedMotion) {
    el.textContent = target.toLocaleString() + suffix;
    return;
  }
  requestAnimationFrame(tick);
}

function initCounters() {
  const nums = document.querySelectorAll(".stat-block__num");
  if (!("IntersectionObserver" in window)) {
    nums.forEach(animateCounter);
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  nums.forEach((el) => observer.observe(el));
}

/* ---------------------- 6. HERO CANVAS PARTICLE NETWORK ---------------------- */

function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  const ctx = canvas.getContext("2d");
  const hero = canvas.closest(".hero");

  let width, height, particles;
  const mouse = { x: null, y: null };
  const PARTICLE_COUNT = 70;
  const LINK_DISTANCE = 130;

  function resize() {
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  function createParticles() {
    particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    // Move + draw particles
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(148, 197, 190, 0.55)";
      ctx.fill();
    });

    // Draw links between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DISTANCE) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(94, 234, 212, ${0.12 * (1 - dist / LINK_DISTANCE)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Mouse-follow glow that also links to nearby particles
    if (mouse.x !== null) {
      particles.forEach((p) => {
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(139, 124, 255, ${0.22 * (1 - dist / 160)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    }

    requestAnimationFrame(step);
  }

  resize();
  createParticles();

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  hero.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  if (!prefersReducedMotion) {
    requestAnimationFrame(step);
  } else {
    // Draw a single static frame instead of animating.
    step();
  }
}

/* ---------------------- 7. MAGNETIC BUTTONS ---------------------- */

function initMagneticButtons() {
  if (prefersReducedMotion) return;

  document.querySelectorAll(".magnetic").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${relX * 0.25}px, ${relY * 0.35}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0, 0)";
    });
  });
}

/* ---------------------- 8. TERMINAL TYPEWRITER ---------------------- */

const TERMINAL_LINES = [
  "$ vault init career",
  "> setting up your learning path...",
  "$ vault build project --track web-dev",
  "> compiling skills: html, css, js ✓",
  "$ vault deploy portfolio",
  "> shipped. you're hireable. ✦"
];

function initTerminalTypewriter() {
  const codeEl = document.getElementById("terminalCode");
  const cursorEl = document.getElementById("terminalCursor");

  if (prefersReducedMotion) {
    codeEl.textContent = TERMINAL_LINES.join("\n");
    cursorEl.style.display = "none";
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;
  let displayed = "";

  function typeNextChar() {
    const currentLine = TERMINAL_LINES[lineIndex];

    if (charIndex < currentLine.length) {
      displayed += currentLine[charIndex];
      charIndex++;
      codeEl.textContent = displayed;
      setTimeout(typeNextChar, 28 + Math.random() * 30);
    } else {
      displayed += "\n";
      lineIndex++;
      charIndex = 0;

      if (lineIndex < TERMINAL_LINES.length) {
        codeEl.textContent = displayed;
        setTimeout(typeNextChar, 260);
      } else {
        // Finished typing all lines — pause, then restart the loop.
        setTimeout(() => {
          displayed = "";
          lineIndex = 0;
          charIndex = 0;
          codeEl.textContent = "";
          typeNextChar();
        }, 2600);
      }
    }
  }

  typeNextChar();
}

/* ---------------------- 9. MISC ---------------------- */

function initFooterYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

function initSmoothAnchors() {
  // Native CSS `scroll-behavior: smooth` handles the scroll itself;
  // this just accounts for the fixed navbar height so headings aren't hidden underneath it.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: y, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  });
}

/* ---------------------- INIT ---------------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderPrograms();
  renderProducts();
  renderWhyUs();
  renderMarquee();

  initNavbar();
  initScrollReveal();
  initCounters();
  initHeroCanvas();
  initMagneticButtons();
  initTerminalTypewriter();
  initFooterYear();
  initSmoothAnchors();
});