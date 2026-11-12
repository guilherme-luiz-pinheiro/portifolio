/* =========================================================
   PORTFÓLIO — INTERAÇÕES E MICROANIMAÇÕES
========================================================= */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const translations = {
  pt: {
    "nav.home":"Home","nav.about":"Sobre","nav.projects":"Projetos","nav.services":"Serviços","nav.contact":"Contato","nav.cv":"Baixar CV",
    "hero.role":"DESENVOLVEDOR FULL STACK","hero.greeting":"Olá, eu sou","hero.tagline":"Crio soluções digitais completas: do design à programação.",
    "hero.description":"Desenvolvedor com experiência em aplicações web, desktop e mobile. Transformo necessidades reais em soluções digitais eficientes, intuitivas e bem estruturadas.",
    "hero.projects":"Explorar projetos","hero.contact":"Vamos conversar","hero.fact1":"Desenvolvimento","hero.fact2":"Experiências digitais","hero.fact3":"Visão completa","hero.note":"Código com propósito.",
    "about.eyebrow":"MINHA JORNADA","about.title":"Tecnologia, criatividade e resolução de problemas.",
    "about.p1":"Sou desenvolvedor com experiência no desenvolvimento de aplicações web, desktop e mobile. Tenho foco em soluções Full Stack, utilizando tecnologias como C#/.NET, JavaScript, HTML/CSS, bancos de dados relacionais, consumo de APIs REST e versionamento com Git.",
    "about.p2":"Já atuei em projetos de sustentação e evolução de sistemas, criação de funcionalidades, testes e documentação técnica. Gosto de entender o problema por trás de cada demanda e transformar necessidades do negócio em soluções eficientes, escaláveis e alinhadas aos usuários.",
    "soft.eyebrow":"ALÉM DO CÓDIGO","soft.title":"Soft skills que fazem diferença.","soft.subtitle":"Competências que levo para cada projeto e colaboração.",
    "soft.communication":"Comunicação","soft.communicationDesc":"Transmitir ideias com clareza e ouvir diferentes perspectivas.","soft.adaptability":"Adaptabilidade","soft.adaptabilityDesc":"Ajustar-se a novos cenários, tecnologias e prioridades.","soft.organization":"Organização","soft.organizationDesc":"Estruturar tarefas e cumprir prazos com consistência.","soft.problem":"Resolução de problemas","soft.problemDesc":"Analisar cenários e encontrar soluções práticas.","soft.teamwork":"Trabalho em equipe","soft.teamworkDesc":"Colaborar para alcançar objetivos compartilhados.",
    "services.eyebrow":"O QUE POSSO DESENVOLVER","services.title":"Soluções digitais para gerar valor.","services.subtitle":"Da concepção à implementação, com foco em qualidade e experiência de uso.",
    "services.websites":"Sites responsivos","services.websitesDesc":"Sites modernos que se adaptam a diferentes dispositivos e tamanhos de tela.","services.systems":"Sistemas web","services.systemsDesc":"Sistemas sob medida para gestão, controle de processos e visualização de dados.","services.apis":"APIs RESTful","services.apisDesc":"Integrações seguras e eficientes para conectar aplicações e serviços.","services.dashboards":"Dashboards","services.dashboardsDesc":"Painéis visuais com indicadores que facilitam a análise de informações.","services.landing":"Landing pages","services.landingDesc":"Páginas rápidas e objetivas para apresentar produtos, serviços e campanhas.","services.integrations":"Integrações","services.integrationsDesc":"Conexão entre sistemas e automação de processos para reduzir tarefas manuais.",
    "tools.eyebrow":"STACK & FERRAMENTAS","tools.title":"Tecnologias que fazem parte da minha rotina.",
    "projects.eyebrow":"PORTFÓLIO","projects.title":"Projetos realizados.","projects.subtitle":"Alguns projetos e experiências que representam minha jornada em desenvolvimento.",
    "projects.typeWeb":"WEB / EM DESENVOLVIMENTO","projects.typePersonal":"PROJETO PESSOAL","projects.typeApp":"APLICAÇÃO","projects.buscgame":"Versão aprimorada de um buscador e comparador de preços de jogos.","projects.portfolio":"Projeto desenvolvido desde o wireframe e mockup até a implementação da interface.","projects.other":"Outro projeto","projects.otherDesc":"Adicione aqui a descrição do projeto, seu objetivo e as tecnologias utilizadas.","projects.details":"Ver detalhes","projects.all":"Ver todos no GitHub","projects.open":"Abrir repositório","projects.loading":"Carregando projetos do GitHub...","projects.error":"Não foi possível carregar os projetos automaticamente. Acesse todos os repositórios no GitHub.",
    "projects.buscgameExtra":"Projeto de busca e comparação de preços. Atualize este texto com o escopo, os desafios e o link real do projeto.","projects.portfolioExtra":"Projeto pessoal de interface e apresentação profissional. Atualize este texto com os detalhes do processo.","projects.otherExtra":"Inclua aqui contexto, funcionalidades, tecnologias e resultados deste projeto.",
    "contact.eyebrow":"CONTATO","contact.title":"Bora conversar?","contact.subtitle":"Tem uma ideia, oportunidade ou projeto? Envie uma mensagem.","contact.name":"Nome completo","contact.email":"E-mail","contact.message":"Sua mensagem","contact.send":"Enviar mensagem","footer.rights":"Todos os direitos reservados."
  },
  en: {
    "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.services":"Services","nav.contact":"Contact","nav.cv":"Download CV",
    "hero.role":"FULL STACK DEVELOPER","hero.greeting":"Hello, I'm","hero.tagline":"I create complete digital solutions: from design to development.",
    "hero.description":"Developer experienced in web, desktop and mobile applications. I turn real needs into efficient, intuitive and well-structured digital solutions.",
    "hero.projects":"Explore projects","hero.contact":"Let's talk","hero.fact1":"Development","hero.fact2":"Digital experiences","hero.fact3":"End-to-end vision","hero.note":"Code with purpose.",
    "about.eyebrow":"MY JOURNEY","about.title":"Technology, creativity and problem-solving.",
    "about.p1":"I'm a developer experienced in building web, desktop and mobile applications. I focus on Full Stack solutions using technologies such as C#/.NET, JavaScript, HTML/CSS, relational databases, REST APIs and Git version control.",
    "about.p2":"I've worked on system maintenance and evolution, feature development, testing and technical documentation. I enjoy understanding the problem behind each request and turning business needs into efficient, scalable solutions focused on users.",
    "soft.eyebrow":"BEYOND CODE","soft.title":"Soft skills that make a difference.","soft.subtitle":"The skills I bring to every project and collaboration.",
    "soft.communication":"Communication","soft.communicationDesc":"Express ideas clearly and listen to different perspectives.","soft.adaptability":"Adaptability","soft.adaptabilityDesc":"Adjust to new scenarios, technologies and priorities.","soft.organization":"Organization","soft.organizationDesc":"Structure tasks and consistently meet deadlines.","soft.problem":"Problem solving","soft.problemDesc":"Analyze situations and find practical solutions.","soft.teamwork":"Teamwork","soft.teamworkDesc":"Collaborate to achieve shared goals.",
    "services.eyebrow":"WHAT I CAN BUILD","services.title":"Digital solutions that create value.","services.subtitle":"From concept to implementation, focused on quality and user experience.",
    "services.websites":"Responsive websites","services.websitesDesc":"Modern websites that adapt to different devices and screen sizes.","services.systems":"Web systems","services.systemsDesc":"Custom systems for management, process control and data visualization.","services.apis":"RESTful APIs","services.apisDesc":"Secure and efficient integrations that connect applications and services.","services.dashboards":"Dashboards","services.dashboardsDesc":"Visual panels with indicators that make information easier to analyze.","services.landing":"Landing pages","services.landingDesc":"Fast, focused pages to present products, services and campaigns.","services.integrations":"Integrations","services.integrationsDesc":"Connect systems and automate processes to reduce manual tasks.",
    "tools.eyebrow":"STACK & TOOLS","tools.title":"Technologies that are part of my daily workflow.",
    "projects.eyebrow":"PORTFOLIO","projects.title":"Selected projects.","projects.subtitle":"Projects and experiences that represent my development journey.","projects.typeWeb":"WEB / IN DEVELOPMENT","projects.typePersonal":"PERSONAL PROJECT","projects.typeApp":"APPLICATION","projects.buscgame":"An improved version of a search and price comparison tool for video games.","projects.portfolio":"Project developed from wireframe and mockup through interface implementation.","projects.other":"Another project","projects.otherDesc":"Add the project's description, goal and technologies used here.","projects.details":"View details","projects.all":"View all on GitHub","projects.open":"Open repository","projects.loading":"Loading GitHub projects...","projects.error":"Could not load projects automatically. Browse all repositories on GitHub.","projects.buscgameExtra":"Search and price comparison project. Update this text with scope, challenges and the real project link.","projects.portfolioExtra":"Personal interface and professional presentation project. Update this text with process details.","projects.otherExtra":"Add context, features, technologies and project results here.",
    "contact.eyebrow":"CONTACT","contact.title":"Let's talk?","contact.subtitle":"Have an idea, opportunity or project? Send me a message.","contact.name":"Full name","contact.email":"Email address","contact.message":"Your message","contact.send":"Send message","footer.rights":"All rights reserved."
  },
  es: {
    "nav.home":"Inicio","nav.about":"Sobre mí","nav.projects":"Proyectos","nav.services":"Servicios","nav.contact":"Contacto","nav.cv":"Descargar CV",
    "hero.role":"DESARROLLADOR FULL STACK","hero.greeting":"Hola, soy","hero.tagline":"Creo soluciones digitales completas: del diseño al desarrollo.",
    "hero.description":"Desarrollador con experiencia en aplicaciones web, de escritorio y móviles. Transformo necesidades reales en soluciones digitales eficientes, intuitivas y bien estructuradas.",
    "hero.projects":"Explorar proyectos","hero.contact":"Hablemos","hero.fact1":"Desarrollo","hero.fact2":"Experiencias digitales","hero.fact3":"Visión integral","hero.note":"Código con propósito.",
    "about.eyebrow":"MI TRAYECTORIA","about.title":"Tecnología, creatividad y resolución de problemas.",
    "about.p1":"Soy desarrollador con experiencia en aplicaciones web, de escritorio y móviles. Me enfoco en soluciones Full Stack con tecnologías como C#/.NET, JavaScript, HTML/CSS, bases de datos relacionales, APIs REST y control de versiones con Git.",
    "about.p2":"He trabajado en mantenimiento y evolución de sistemas, desarrollo de funcionalidades, pruebas y documentación técnica. Me gusta comprender el problema detrás de cada solicitud y transformar las necesidades del negocio en soluciones eficientes y escalables.",
    "soft.eyebrow":"MÁS ALLÁ DEL CÓDIGO","soft.title":"Habilidades que marcan la diferencia.","soft.subtitle":"Competencias que aporto a cada proyecto y colaboración.",
    "soft.communication":"Comunicación","soft.communicationDesc":"Expresar ideas con claridad y escuchar diferentes perspectivas.","soft.adaptability":"Adaptabilidad","soft.adaptabilityDesc":"Adaptarse a nuevos escenarios, tecnologías y prioridades.","soft.organization":"Organización","soft.organizationDesc":"Estructurar tareas y cumplir plazos con constancia.","soft.problem":"Resolución de problemas","soft.problemDesc":"Analizar situaciones y encontrar soluciones prácticas.","soft.teamwork":"Trabajo en equipo","soft.teamworkDesc":"Colaborar para alcanzar objetivos compartidos.",
    "services.eyebrow":"QUÉ PUEDO DESARROLLAR","services.title":"Soluciones digitales que generan valor.","services.subtitle":"Desde la idea hasta la implementación, con foco en calidad y experiencia de usuario.",
    "services.websites":"Sitios responsivos","services.websitesDesc":"Sitios modernos que se adaptan a diferentes dispositivos y tamaños de pantalla.","services.systems":"Sistemas web","services.systemsDesc":"Sistemas personalizados para gestión, control de procesos y visualización de datos.","services.apis":"APIs RESTful","services.apisDesc":"Integraciones seguras y eficientes para conectar aplicaciones y servicios.","services.dashboards":"Dashboards","services.dashboardsDesc":"Paneles visuales con indicadores que facilitan el análisis de información.","services.landing":"Landing pages","services.landingDesc":"Páginas rápidas y claras para presentar productos, servicios y campañas.","services.integrations":"Integraciones","services.integrationsDesc":"Conexión de sistemas y automatización de procesos para reducir tareas manuales.",
    "tools.eyebrow":"STACK Y HERRAMIENTAS","tools.title":"Tecnologías que forman parte de mi rutina.",
    "projects.eyebrow":"PORTAFOLIO","projects.title":"Proyectos realizados.","projects.subtitle":"Proyectos y experiencias que representan mi trayectoria en desarrollo.","projects.typeWeb":"WEB / EN DESARROLLO","projects.typePersonal":"PROYECTO PERSONAL","projects.typeApp":"APLICACIÓN","projects.buscgame":"Versión mejorada de un buscador y comparador de precios de videojuegos.","projects.portfolio":"Proyecto desarrollado desde el wireframe y mockup hasta la implementación de la interfaz.","projects.other":"Otro proyecto","projects.otherDesc":"Añade aquí la descripción, el objetivo y las tecnologías utilizadas.","projects.details":"Ver detalles","projects.all":"Ver todos en GitHub","projects.open":"Abrir repositorio","projects.loading":"Cargando proyectos de GitHub...","projects.error":"No se pudieron cargar los proyectos automáticamente. Consulta todos los repositorios en GitHub.","projects.buscgameExtra":"Proyecto de búsqueda y comparación de precios. Actualiza este texto con el alcance, los retos y el enlace real.","projects.portfolioExtra":"Proyecto personal de interfaz y presentación profesional. Actualiza este texto con los detalles del proceso.","projects.otherExtra":"Incluye aquí el contexto, las funciones, las tecnologías y los resultados.",
    "contact.eyebrow":"CONTACTO","contact.title":"¿Hablamos?","contact.subtitle":"¿Tienes una idea, oportunidad o proyecto? Envíame un mensaje.","contact.name":"Nombre completo","contact.email":"Correo electrónico","contact.message":"Tu mensaje","contact.send":"Enviar mensaje","footer.rights":"Todos los derechos reservados."
  }
};

const languageConfig = {
  pt: { label: "PT-BR", flag: "https://flagcdn.com/w40/br.png", htmlLang: "pt-BR" },
  en: { label: "EN-US", flag: "https://flagcdn.com/w40/us.png", htmlLang: "en" },
  es: { label: "ES", flag: "https://flagcdn.com/w40/es.png", htmlLang: "es" }
};

function detectLanguage() {
  const saved = localStorage.getItem("portfolio-language");
  if (saved && translations[saved]) return saved;
  const browser = (navigator.languages?.[0] || navigator.language || "pt-BR").slice(0, 2).toLowerCase();
  return translations[browser] ? browser : "pt";
}

function setLanguage(language, persist = true) {
  const dictionary = translations[language] || translations.pt;
  const config = languageConfig[language] || languageConfig.pt;
  document.documentElement.lang = config.htmlLang;

  $$("[data-i18n]").forEach(element => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  $$("[data-i18n-placeholder]").forEach(element => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value !== undefined) {
      element.placeholder = value;
      element.setAttribute("aria-label", value);
    }
  });

  $("#language-label").textContent = config.label;
  $("#language-flag").src = config.flag;
  $$("[data-language]").forEach(button => {
    button.setAttribute("aria-current", String(button.dataset.language === language));
  });
  if (persist) localStorage.setItem("portfolio-language", language);
}

const languageControl = $(".language");
const languageToggle = $("#language-toggle");
languageToggle.addEventListener("click", () => {
  const open = languageControl.classList.toggle("is-open");
  languageToggle.setAttribute("aria-expanded", String(open));
});
$$("[data-language]").forEach(button => button.addEventListener("click", () => {
  setLanguage(button.dataset.language);
  languageControl.classList.remove("is-open");
  languageToggle.setAttribute("aria-expanded", "false");
}));
document.addEventListener("click", event => {
  if (!languageControl.contains(event.target)) {
    languageControl.classList.remove("is-open");
    languageToggle.setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    languageControl.classList.remove("is-open");
    languageToggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});
setLanguage(detectLanguage(), false);

/* Theme */
const themeToggle = $("#theme-toggle");
function applyTheme(theme, persist = true) {
  const selected = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = selected;
  themeToggle.innerHTML = selected === "light" ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
  themeToggle.setAttribute("aria-label", selected === "light" ? "Ativar tema escuro" : "Ativar tema claro");
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", selected === "light" ? "#f5f6f8" : "#090b10");
  if (persist) localStorage.setItem("portfolio-theme", selected);
}
applyTheme(localStorage.getItem("portfolio-theme") || "dark", false);
themeToggle.addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light"));

/* Mobile navigation */
const menu = $("#menu");
const menuToggle = $("#menu-toggle");
menuToggle.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});
$$(".menu a").forEach(link => link.addEventListener("click", () => {
  menu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
}));

/* Scroll progress, sticky header, top button and current section */
const header = $("#header");
const backToTop = $("#btn-voltar");
const progress = $("#scroll-progress");
const sections = $$("main section[id]");
function handleScroll() {
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0}%`;
  header.classList.toggle("is-scrolled", scrollY > 20);
  backToTop.classList.toggle("is-visible", scrollY > 450);

  let current = "";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 155) current = section.id;
  });
  $$(".menu a").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}
window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("resize", handleScroll);
handleScroll();
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* Reveal elements as the user scrolls; stagger groups for a layered entrance */
const revealTargets = $$(".section-heading, .about-content, .section-intro, .softskill-card, .service-card, .tool-item, .project-card, .carousel-shell, .contact-panel, .hero-content, .hero-visual");
revealTargets.forEach((element, index) => {
  element.classList.add("reveal");
  if (element.matches(".softskill-card, .service-card, .tool-item, .project-card")) {
    element.style.transitionDelay = `${(index % 5) * 65}ms`;
  }
});
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
revealTargets.forEach(element => revealObserver.observe(element));

/* Project cards expand to reveal additional information */
$$(".project-action").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    details.hidden = expanded;
    const label = $("span", button);
    const language = document.documentElement.lang.startsWith("en") ? "en" :
      document.documentElement.lang.startsWith("es") ? "es" : "pt";
    label.textContent = expanded
      ? translations[language]["projects.details"]
      : (language === "en" ? "Hide details" : language === "es" ? "Ocultar detalles" : "Ocultar detalhes");
    $("i", button).className = expanded ? "fa-solid fa-arrow-up-right-from-square" : "fa-solid fa-chevron-up";
  });
});

/* Gentle 3D tilt on pointer devices; disabled on touch and reduced-motion */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  $$(".softskill-card, .service-card, .tool-item").forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.transform = `perspective(800px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateY(-3px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

/* Responsive carousel */
const track = $(".carousel-track");
const cards = $$(".project-card", track);
const dotsContainer = $(".carousel-dots");
const previousButton = $(".carousel-button.prev");
const nextButton = $(".carousel-button.next");
let carouselIndex = 0;

function visibleCards() {
  if (window.innerWidth <= 520) return 1;
  if (window.innerWidth <= 980) return 2;
  return 3;
}
function maxCarouselIndex() { return Math.max(0, cards.length - visibleCards()); }
function updateCarousel() {
  if (!cards.length) return;
  carouselIndex = Math.min(carouselIndex, maxCarouselIndex());
  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(track).gap) || 0;
  track.style.transform = `translateX(-${carouselIndex * (cardWidth + gap)}px)`;
  previousButton.disabled = carouselIndex === 0;
  nextButton.disabled = carouselIndex >= maxCarouselIndex();
  $$(".carousel-dots button").forEach((dot, index) => dot.setAttribute("aria-current", String(index === carouselIndex)));
}
function buildCarouselDots() {
  dotsContainer.innerHTML = "";
  for (let index = 0; index <= maxCarouselIndex(); index++) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Ir para projeto ${index + 1}`);
    dot.addEventListener("click", () => { carouselIndex = index; updateCarousel(); });
    dotsContainer.appendChild(dot);
  }
  updateCarousel();
}
previousButton.addEventListener("click", () => { carouselIndex = Math.max(0, carouselIndex - 1); updateCarousel(); });
nextButton.addEventListener("click", () => { carouselIndex = Math.min(maxCarouselIndex(), carouselIndex + 1); updateCarousel(); });
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(buildCarouselDots, 120);
});
buildCarouselDots();


/* Load public GitHub repositories and render clickable project cards.
   Repositories are fetched live so the portfolio stays in sync with GitHub. */
async function loadGithubProjects() {
  const username = "guilherme-luiz-pinheiro";
  const container = $("#github-projects");
  const status = $("#projects-status");
  if (!container || !status) return;

  const language = document.documentElement.lang.startsWith("en") ? "en" :
    document.documentElement.lang.startsWith("es") ? "es" : "pt";
  status.textContent = translations[language]["projects.loading"];

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=owner`, {
      headers: { "Accept": "application/vnd.github+json" }
    });
    if (!response.ok) throw new Error(`GitHub API: ${response.status}`);
    const repositories = await response.json();

    const curated = repositories
      .filter(repo => !repo.fork && !repo.archived)
      .map(repo => {
        const description = (repo.description || "").trim();
        const name = repo.name.replace(/[-_]/g, " ");
        const languageName = repo.language || "Código";
        const score = (repo.stargazers_count * 5) +
          (repo.topics?.length || 0) * 2 +
          (description ? 3 : 0) +
          (repo.homepage ? 2 : 0) +
          (repo.size > 0 ? 1 : 0);
        return { ...repo, displayName: name, displayDescription: description, languageName, score };
      })
      .sort((a, b) => b.score - a.score || new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 6);

    container.innerHTML = "";
    if (!curated.length) {
      status.textContent = translations[language]["projects.error"];
      container.innerHTML = `<div class="projects-empty">${translations[language]["projects.error"]}</div>`;
      return;
    }

    status.textContent = language === "en"
      ? `${curated.length} selected public repositories`
      : language === "es"
        ? `${curated.length} repositorios públicos seleccionados`
        : `${curated.length} repositórios públicos selecionados`;

    curated.forEach((repo, index) => {
      const card = document.createElement("a");
      card.className = "project-card reveal";
      card.href = repo.html_url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.setAttribute("aria-label", `${repo.name} — abrir repositório no GitHub`);

      const preview = document.createElement("div");
      preview.className = "project-preview";
      const icon = document.createElement("i");
      icon.className = "fa-brands fa-github";
      preview.appendChild(icon);

      const body = document.createElement("div");
      body.className = "project-body";

      const type = document.createElement("span");
      type.className = "project-type";
      type.textContent = repo.private ? "PRIVATE" : "OPEN SOURCE";

      const title = document.createElement("h3");
      title.textContent = repo.displayName;

      const description = document.createElement("p");
      description.textContent = repo.displayDescription ||
        (language === "en" ? "Public repository. Open it on GitHub to see the source code and details." :
         language === "es" ? "Repositorio público. Ábrelo en GitHub para ver el código y los detalles." :
         "Repositório público. Acesse o GitHub para conferir o código-fonte e os detalhes.");

      const meta = document.createElement("div");
      meta.className = "project-meta";
      const languageLabel = document.createElement("span");
      languageLabel.className = "project-language";
      languageLabel.textContent = repo.languageName;

      const openLabel = document.createElement("span");
      openLabel.className = "project-open";
      openLabel.textContent = translations[language]["projects.open"];
      const arrow = document.createElement("i");
      arrow.className = "fa-solid fa-arrow-up-right-from-square";
      openLabel.appendChild(arrow);

      meta.append(languageLabel, openLabel);
      body.append(type, title, description, meta);
      card.append(preview, body);
      container.appendChild(card);

      card.style.transitionDelay = `${(index % 3) * 70}ms`;
      requestAnimationFrame(() => card.classList.add("is-visible"));
    });
  } catch (error) {
    console.error("Erro ao carregar repositórios do GitHub:", error);
    status.textContent = translations[language]["projects.error"];
    container.innerHTML = `<div class="projects-empty">${translations[language]["projects.error"]} <a href="https://github.com/${username}?tab=repositories" target="_blank" rel="noopener">GitHub</a></div>`;
  }
}

loadGithubProjects();

$("#year").textContent = new Date().getFullYear();
