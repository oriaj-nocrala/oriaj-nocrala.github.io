document.getElementById("year").textContent = new Date().getFullYear();

const translations = {
  es: {
    "nav-about": "Sobre mí",
    "nav-projects": "Proyectos",
    "nav-skills": "Skills",
    "nav-contact": "Contacto",
    "hero-eyebrow": "Hola, soy",
    "hero-tagline": "Entusiasta de los sistemas. Amante de Linux. BTW, uso Arch. Fuera de la coña: me interesa más entender cómo funcionan las cosas por dentro —kernels, memoria, shaders— que quedarme usando un framework como caja negra.",
    "hero-btn-projects": "Ver proyectos",
    "hero-btn-contact": "Contactame",
    "about-title": "Sobre mí",
    "about-text": "Ingeniero de software con acento en sistemas: me la paso más cómodo escribiendo un kernel en Rust, un allocator o un compositor para Wayland que ajustando un CSS. Aun así, también construyo productos completos de punta a punta —backend, frontend, apps móviles— cuando hace falta. Lo que de verdad me engancha es entender cómo funcionan las cosas por dentro: memoria, concurrencia, shaders, rendimiento.",
    "projects-title": "Proyectos",
    "proj-rain-desc": "Salvapantallas de lluvia nativo para Wayland, con simulación física de gotas cayendo por el escritorio usando wgpu.",
    "proj-kernel-desc": "Un kernel simple escrito en Rust, hecho como ejercicio para aprender sobre desarrollo de sistemas operativos.",
    "proj-cartel-desc": "Cartel 3D ultra realista renderizado con shaders para Android.",
    "proj-text3d-desc": "Motor de renderizado de texto 3D de alto rendimiento en C, con OpenGL y Signed Distance Fields para texto nítido y escalable en tiempo real.",
    "card-link": "Ver repositorio →",
    "skills-title": "Skills",
    "skill-systems": "Desarrollo de sistemas / kernels",
    "skill-web": "Desarrollo web",
    "contact-title": "Contacto",
    "contact-text": "¿Querés escribirme? Encontrame acá:",
    "contact-email": "Email",
  },
  en: {
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-skills": "Skills",
    "nav-contact": "Contact",
    "hero-eyebrow": "Hi, I'm",
    "hero-tagline": "Systems enthusiast. Linux lover. BTW, I use Arch. Joke aside: I care more about understanding how things work underneath —kernels, memory, shaders— than treating a framework as a black box.",
    "hero-btn-projects": "View projects",
    "hero-btn-contact": "Get in touch",
    "about-title": "About me",
    "about-text": "Software engineer with a systems bent: I'm happier writing a kernel in Rust, an allocator, or a Wayland compositor than tweaking a CSS file. That said, I also build complete products end to end —backend, frontend, mobile apps— when needed. What really hooks me is understanding how things work underneath: memory, concurrency, shaders, performance.",
    "projects-title": "Projects",
    "proj-rain-desc": "A native Wayland rain screensaver, running a physics simulation of raindrops falling across your desktop with wgpu.",
    "proj-kernel-desc": "A simple kernel written in Rust, built as an exercise to learn operating systems development.",
    "proj-cartel-desc": "An ultra-realistic 3D poster rendered with shaders for Android.",
    "proj-text3d-desc": "A high-performance 3D text rendering engine in C, using OpenGL and Signed Distance Fields for crisp, scalable real-time text.",
    "card-link": "View repository →",
    "skills-title": "Skills",
    "skill-systems": "Systems programming / kernels",
    "skill-web": "Web development",
    "contact-title": "Contact",
    "contact-text": "Want to reach out? Find me here:",
    "contact-email": "Email",
  },
};

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang][key];
    if (text !== undefined) el.textContent = text;
  });
  const langToggle = document.getElementById("lang-toggle");
  langToggle.textContent = lang === "es" ? "EN" : "ES";
  langToggle.setAttribute(
    "aria-label",
    lang === "es" ? "Switch to English" : "Cambiar a español"
  );
  localStorage.setItem("lang", lang);
}

const savedLang = localStorage.getItem("lang");
const initialLang =
  savedLang || (navigator.language.startsWith("en") ? "en" : "es");
applyLang(initialLang);

document.getElementById("lang-toggle").addEventListener("click", () => {
  applyLang(document.documentElement.lang === "es" ? "en" : "es");
});

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
  );
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
applyTheme(savedTheme || systemTheme);

document.getElementById("theme-toggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});
