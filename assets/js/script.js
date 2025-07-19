const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.nav-btn.prev');
const nextBtn = document.querySelector('.nav-btn.next');
const dotsContainer = document.querySelector('.dots');

let activeIndex = 4;

// Cria os dots dinamicamente
for (let i = 0; i < cards.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === activeIndex) dot.classList.add('active');
    dot.addEventListener('click', () => {
        activeIndex = i;
        updateCarousel();
    });
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const containerWidth = carousel.parentElement.offsetWidth;
    const overlap = 90; // mesmo valor do margin-left negativo
    const cardSpacing = cardWidth - overlap;

    const offset = cardSpacing * activeIndex - (containerWidth / 2 - cardWidth / 2);
    carousel.style.transform = `translateX(${-offset}px)`;

    cards.forEach((card, idx) => {
        const distance = Math.abs(idx - activeIndex);

        const scale = Math.max(0.4, 1 - distance * 0.2);

        card.style.transform = `scale(${scale})`;
        card.style.transition = 'transform 0.3s ease';

        card.style.zIndex = idx === activeIndex ? 10 : 1;
        card.style.opacity = idx === activeIndex ? '1' : '0.8';

        card.classList.toggle('active', idx === activeIndex);
    });

    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
    });
}

prevBtn.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % cards.length;
    updateCarousel();
});

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateCarousel, 200);
});

function checkFade() {
    const divs = document.querySelectorAll('div');

    divs.forEach(div => {

        if (
            div.classList.contains('language') ||
            div.closest('.language') || // ignora divs dentro da .language
            div.id === 'header' || // evita apagar o header
            div.closest('#header') // ignora filhos do header
        ) return;

        const rect = div.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calcula o quanto da div está visível (entre 0 e 1)
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(windowHeight, rect.bottom);
        const visibleHeight = visibleBottom - visibleTop;
        const totalHeight = rect.height;

        let visibilityRatio = visibleHeight / totalHeight;

        // Se estiver totalmente fora da tela, visibilidade é 0
        if (rect.bottom <= 0 || rect.top >= windowHeight) {
            visibilityRatio = 0;
        }

        // Garante que fique entre 0 e 1
        visibilityRatio = Math.max(0, Math.min(1, visibilityRatio));

        // Aplica a opacidade baseada na visibilidade
        div.style.opacity = visibilityRatio;
    });
}

let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // Rolando para baixo
        header.classList.add('hide');
    } else {
        // Rolando para cima
        header.classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
});

document.getElementById('btn-github').addEventListener('click', () => {
    window.open('https://github.com/guilherme-luiz-pinheiro', '_blank');
});

document.getElementById('btn-linkedin').addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/guilherme-luiz-pinheiro/', '_blank');
});
document.getElementById('btn-whatsapp').addEventListener('click', () => {
    const mensagem = encodeURIComponent('Olá Guilherme. Gostaria de mais informações!');
    const numero = '5511977315574';
    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, '_blank');
});
document.getElementById('btn-voltar').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // rolagem suave
    });
});
const btnVoltar = document.getElementById('btn-voltar');

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        // Oculta suavemente ao voltar ao topo
        btnVoltar.classList.remove('show');
    } else {
        // Mostra suavemente ao rolar para baixo
        btnVoltar.classList.add('show');
    }
});

btnVoltar.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

$(function () {
    $(".br").click(function () {
        // Menu
        $(".menu li:nth-child(1) button").text("Home");
        $(".menu li:nth-child(2) button").text("Sobre");
        $(".menu li:nth-child(3) button").text("Projetos");
        $(".menu li:nth-child(4) button").text("Serviços");
        $(".menu li:nth-child(5) button").text("Contatos");
        $(".menu li:nth-child(6) button").html('Baixar CV <svg width="20px"...</svg>');
        $(".menu-texto").text("PT-BR");
        $(".language-selected").text("pt-BR").removeClass("change-en change-es").addClass("change-br");

        // Perfil
        $(".textoPerfil h4:first").text("DESENVOLVEDOR FULLSTACK");
        $(".textoPerfil h4.blue-fade").text("Crio soluções digitais completas:");
        $(".textoPerfil h4:last").text("do design à programação");

        // Seção "Minha jornada"
        $("#sobre h1").html("&#123;Minha jornada&#125;");
        $("#sobre p").html(`Sou desenvolvedor com experiência em desenvolvimento de aplicações web, desktop e
                mobile. Tenho foco em soluções Full Stack, com domínio em tecnologias como <span class="azul">C#/.NET, JavaScript, HTML/CSS, bancos de dados relacionais</span>, consumo de APIs REST e versionamento com Git.
                Já atuei em projetos de sustentação e evolução de sistemas, criação de funcionalidades do zero, testes e
                documentação técnica. Busco constantemente aprimorar minhas habilidades técnicas e contribuir com
                soluções eficientes, escaláveis e alinhadas às necessidades do negócio.`);

        // Soft Skills
        $(".softskills .box-branco h2").text("<Softskills>");
        $(".softskill .container").eq(0).find("p").html("Comunicação<span style='color: #0055ff;'>&gt;</span><br><span class='extra-text'>Capacidade de expressar ideias de forma clara e eficaz, tanto verbalmente quanto por escrito.</span>");
        $(".softskill .container").eq(1).find("p").html("Adaptabilidade<span class='azul'>&gt;</span><br><span class='extra-text'>Capacidade de se ajustar rapidamente a novas situações.</span>");
        $(".softskill .container").eq(2).find("p").html("Organização<span class='azul'>&gt;</span><br><span class='extra-text'>Manter tarefas estruturadas e cumprir prazos com eficiência.</span>");
        $(".softskill .container").eq(3).find("p").html("Resolução de problemas<span class='azul'>&gt;</span><br><span class='extra-text'>Habilidade de analisar situações e encontrar soluções práticas.</span>");
        $(".softskill .container").eq(4).find("p").html("Trabalho em equipe<span class='azul'>&gt;</span><br><span class='extra-text'>Colaboração eficaz com colegas para alcançar objetivos comuns.</span>");

        // Serviços
        $(".box-azul h2").text("[Serviços]");
        let servicos = [
            {
                titulo: "Sites Responsivos",
                subtitulo: "Layouts adaptáveis",
                descricao: "Desenvolvimento de sites responsivos que se adaptam a diferentes tamanhos de tela, garantindo boa experiência para todos os usuários."
            },
            {
                titulo: "Sistemas Web",
                subtitulo: "Solução online",
                descricao: "Criação de sistemas web sob medida com funcionalidades customizadas, completas para controle, gestão e visualização eficiente de dados."
            },
            {
                titulo: "APIs RESTful",
                subtitulo: "Comunicação ágil",
                descricao: "Desenvolvimento de APIs RESTful eficientes e seguras, permitindo a integração ágil entre sistemas, plataformas e tecnologias diversas."
            },
            {
                titulo: "Dashboards",
                subtitulo: "Painéis visuais",
                descricao: "Criação de dashboards modernos e interativos com gráficos, tabelas e indicadores em tempo real, facilitando a análise detalhada de métricas."
            },
            {
                titulo: "Landing Pages",
                subtitulo: "Conversão alta",
                descricao: "Criação de landing pages atrativas, rápidas e otimizadas para campanhas de marketing digital, coleta de leads ou lançamentos."
            },
            {
                titulo: "Integrações",
                subtitulo: "Conexões úteis",
                descricao: "Integração de sistemas com APIs de redes sociais ou CRMs, para ampliação de funcionalidades e automatização inteligente de processos."
            }
        ];
        $(".servico > div").each(function (index) {
            $(this).find("h4").text(servicos[index].titulo);
            $(this).find("p.azul").text(servicos[index].subtitulo);
            $(this).find("p").last().text(servicos[index].descricao);
        });
        // Ferramentas
        $("#ferramentas h2").html("Ferramentas e tecnologias<br>que domino:");

        // Nomes das ferramentas
        $(".ferramenta .react p").text("React");
        $(".ferramenta .javascript p").text("JavaScript");
        $(".ferramenta .css p").text("CSS");
        $(".ferramenta .html p").text("HTML");
        $(".ferramenta .java p").text("Java");
        $(".ferramenta .python p").text("Python");
        $(".ferramenta .sql p").text("SQL");
        $(".ferramenta svg + p").text("C-Sharp");

        // Projetos
        $("#projetos h2").text("Projetos realizados");
        $("#projetos h3").text("Veja na prática como aplico minhas habilidades em projetos reais.");

        $(".card").each(function (i, el) {
            const $card = $(el);
            const h3 = $card.find("h3").text().trim();

            if (h3 === "Buscgame 2.0" || h3 === "Buscgame 2.0") {
                $card.find("h3").text("Buscgame 2.0");
                $card.find("p").text("Em desenvolvimento. Versão aprimorada do Buscgame, site buscador e comparador dos melhores preços pra jogos de vídeo game.");
            } else if (h3 === "Portfolio" || h3 === "Portafolio") {
                $card.find("h3").text("Portfólio");
                $card.find("p").text("Projeto desenvolvido integralmente, incluindo a criação do wireframe, mockup e a implementação do layout com HTML e CSS.");
            } else if (h3.includes("Another Project") || h3.includes("Otro Proyecto")) {
                $card.find("h3").text("Outro Projeto");
                $card.find("p").text("Descrição breve do projeto.");
            }
        });
        // Rodapé
        $("footer h3").eq(0).text("Contato");
        $("footer p").eq(0).text("Envie uma mensagem");
        $("footer h3").eq(1).text("Mapa do site");
        $("footer p").eq(1).text("Todas as páginas");
        $("footer h3").eq(2).text("Contato");
        $("button[type='submit']").text("Enviar");

        $(".contatos ul li").eq(0).find("a").text("Home");
        $(".contatos ul li").eq(1).find("a").text("Sobre");
        $(".contatos ul li").eq(2).find("a").text("Projetos");
        $(".contatos ul li").eq(3).find("a").text("Serviços");
        $(".contatos ul li").eq(4).find("a").text("Contatos");

        $("footer .copyright").text("© 2025 Guilherme Pinheiro — Todos os direitos reservados.");
    });

    // Exemplo: mesma lógica para .en e .es pode ser adicionada aqui
});

$(function () {
    $(".en").click(function () {
        // Menu
        $(".menu li:nth-child(1) button").text("Home");
        $(".menu li:nth-child(2) button").text("About");
        $(".menu li:nth-child(3) button").text("Projects");
        $(".menu li:nth-child(4) button").text("Services");
        $(".menu li:nth-child(5) button").text("Contact");
        $(".menu li:nth-child(6) button").html('Download CV <svg width="20px"...</svg>');
        $(".menu-texto").text("EN-US");
        $(".language-selected").text("en-US").removeClass("change-br change-es").addClass("change-en");

        // Profile
        $(".textoPerfil h4:first").text("FULLSTACK DEVELOPER");
        $(".textoPerfil h4.blue-fade").text("I create complete digital solutions:");
        $(".textoPerfil h4:last").text("from design to code");

        // About Section
        $("#sobre h1").html("&#123;My journey&#125;");
        $("#sobre p").html(`I'm a developer with experience in building web, desktop, and mobile applications. I specialize in Full Stack solutions, mastering technologies such as <span class="azul">C#/.NET, JavaScript, HTML/CSS, relational databases</span>, REST API consumption, and Git version control.
            I've worked on maintaining and evolving systems, creating features from scratch, testing, and writing technical documentation. I'm always improving my skills and delivering scalable, efficient solutions aligned with business needs.`);

        // Soft Skills
        $(".softskills .box-branco h2").text("<Softskills>");
        $(".softskill .container").eq(0).find("p").html("Communication<span style='color: #0055ff;'>&gt;</span><br><span class='extra-text'>Ability to express ideas clearly and effectively, both verbally and in writing.</span>");
        $(".softskill .container").eq(1).find("p").html("Adaptability<span class='azul'>&gt;</span><br><span class='extra-text'>Ability to quickly adjust to new situations.</span>");
        $(".softskill .container").eq(2).find("p").html("Organization<span class='azul'>&gt;</span><br><span class='extra-text'>Keep tasks organized and meet deadlines efficiently.</span>");
        $(".softskill .container").eq(3).find("p").html("Problem Solving<span class='azul'>&gt;</span><br><span class='extra-text'>Skill to analyze situations and find practical solutions.</span>");
        $(".softskill .container").eq(4).find("p").html("Teamwork<span class='azul'>&gt;</span><br><span class='extra-text'>Effective collaboration with colleagues to achieve common goals.</span>");

        // Services
        $(".box-azul h2").text("[Services]");
        let services = [
            {
                titulo: "Responsive Websites",
                subtitulo: "Adaptive layouts",
                descricao: "Development of responsive websites that adapt to different screen sizes, ensuring a good user experience."
            },
            {
                titulo: "Web Systems",
                subtitulo: "Online solution",
                descricao: "Custom-built web systems with complete functionalities for data control, management, and visualization."
            },
            {
                titulo: "RESTful APIs",
                subtitulo: "Agile communication",
                descricao: "Efficient and secure RESTful API development, enabling fast integration between systems and platforms."
            },
            {
                titulo: "Dashboards",
                subtitulo: "Visual panels",
                descricao: "Modern and interactive dashboards with real-time charts, tables, and KPIs to support detailed metric analysis."
            },
            {
                titulo: "Landing Pages",
                subtitulo: "High conversion",
                descricao: "Attractive, fast, and optimized landing pages for marketing campaigns, lead generation, or product launches."
            },
            {
                titulo: "Integrations",
                subtitulo: "Useful connections",
                descricao: "System integration with APIs from social networks or CRMs to expand features and automate processes."
            }
        ];
        $(".servico > div").each(function (index) {
            $(this).find("h4").text(services[index].titulo);
            $(this).find("p.azul").text(services[index].subtitulo);
            $(this).find("p").last().text(services[index].descricao);
        });
        // Ferramentas e Projetos - Tradução para Inglês
        // Ferramentas
        $("#ferramentas h2").html("Tools and technologies<br>that I master:");

        // Nomes das ferramentas
        $(".ferramenta .react p").text("React");
        $(".ferramenta .javascript p").text("JavaScript");
        $(".ferramenta .css p").text("CSS");
        $(".ferramenta .html p").text("HTML");
        $(".ferramenta .java p").text("Java");
        $(".ferramenta .python p").text("Python");
        $(".ferramenta .sql p").text("SQL");
        $(".ferramenta svg + p").text("C-Sharp");

        // Projetos
        $("#projetos h2").text("Projects");
        $("#projetos h3").text("See how I apply my skills in real-world projects.");

        $(".card").each(function (i, el) {
            const $card = $(el);
            const h3 = $card.find("h3").text().trim();

            if (h3 === "Buscgame 2.0") {
                $card.find("h3").text("Buscgame 2.0");
                $card.find("p").text("In development. Improved version of Buscgame, a site that searches and compares the best prices for video games.");
            } else if (h3 === "Portfólio") {
                $card.find("h3").text("Portfolio");
                $card.find("p").text("Fully developed project, including wireframe, mockup, and layout implementation using HTML and CSS.");
            } else if (h3.includes("Outro Projeto")) {
                $card.find("h3").text("Another Project");
                $card.find("p").text("Brief project description.");
            }
        });

        // Footer
        $("footer h3").eq(0).text("Contact");
        $("footer p").eq(0).text("Send a message");
        $("footer h3").eq(1).text("Site map");
        $("footer p").eq(1).text("All pages");
        $("footer h3").eq(2).text("Contact");
        $("button[type='submit']").text("Send");

        $(".contatos ul li").eq(0).find("a").text("Home");
        $(".contatos ul li").eq(1).find("a").text("About");
        $(".contatos ul li").eq(2).find("a").text("Projects");
        $(".contatos ul li").eq(3).find("a").text("Services");
        $(".contatos ul li").eq(4).find("a").text("Contact");

        $("footer .copyright").text("© 2025 Guilherme Pinheiro — All rights reserved.");
    });
});

$(function () {
    $(".es").click(function () {
        // Menú
        $(".menu li:nth-child(1) button").text("Inicio");
        $(".menu li:nth-child(2) button").text("Sobre mí");
        $(".menu li:nth-child(3) button").text("Proyectos");
        $(".menu li:nth-child(4) button").text("Servicios");
        $(".menu li:nth-child(5) button").text("Contacto");
        $(".menu li:nth-child(6) button").html('Descargar CV <svg width="20px"...</svg>');
        $(".menu-texto").text("ES");
        $(".language-selected").text("es").removeClass("change-br change-en").addClass("change-es");

        // Perfil
        $(".textoPerfil h4:first").text("DESARROLLADOR FULLSTACK");
        $(".textoPerfil h4.blue-fade").text("Creo soluciones digitales completas:");
        $(".textoPerfil h4:last").text("del diseño a la programación");

        // Sección "Sobre mí"
        $("#sobre h1").html("&#123;Mi trayectoria&#125;");
        $("#sobre p").html(`Soy desarrollador con experiencia en el desarrollo de aplicaciones web, de escritorio y móviles. Me enfoco en soluciones Full Stack, dominando tecnologías como <span class="azul">C#/.NET, JavaScript, HTML/CSS, bases de datos relacionales</span>, consumo de APIs REST y control de versiones con Git.
            He trabajado en mantenimiento y evolución de sistemas, creación de nuevas funcionalidades, pruebas y documentación técnica. Siempre busco mejorar mis habilidades y contribuir con soluciones eficientes y escalables, alineadas a las necesidades del negocio.`);

        // Habilidades blandas
        $(".softskills .box-branco h2").text("<Habilidades>");
        $(".softskill .container").eq(0).find("p").html("Comunicación<span style='color: #0055ff;'>&gt;</span><br><span class='extra-text'>Capacidad para expresar ideas claramente, tanto de forma oral como escrita.</span>");
        $(".softskill .container").eq(1).find("p").html("Adaptabilidad<span class='azul'>&gt;</span><br><span class='extra-text'>Capacidad para ajustarse rápidamente a nuevas situaciones.</span>");
        $(".softskill .container").eq(2).find("p").html("Organización<span class='azul'>&gt;</span><br><span class='extra-text'>Mantener las tareas estructuradas y cumplir con los plazos de forma eficiente.</span>");
        $(".softskill .container").eq(3).find("p").html("Resolución de problemas<span class='azul'>&gt;</span><br><span class='extra-text'>Habilidad para analizar situaciones y encontrar soluciones prácticas.</span>");
        $(".softskill .container").eq(4).find("p").html("Trabajo en equipo<span class='azul'>&gt;</span><br><span class='extra-text'>Colaboración efectiva con colegas para lograr objetivos comunes.</span>");

        // Servicios
        $(".box-azul h2").text("[Servicios]");
        let servicios = [
            {
                titulo: "Sitios Responsivos",
                subtitulo: "Diseños adaptativos",
                descricao: "Desarrollo de sitios web responsivos que se adaptan a diferentes tamaños de pantalla, garantizando una buena experiencia al usuario."
            },
            {
                titulo: "Sistemas Web",
                subtitulo: "Solución en línea",
                descricao: "Creación de sistemas web personalizados con funcionalidades completas para el control, gestión y visualización de datos."
            },
            {
                titulo: "APIs RESTful",
                subtitulo: "Comunicación ágil",
                descricao: "Desarrollo de APIs RESTful eficientes y seguras, permitiendo integración ágil entre plataformas y sistemas diversos."
            },
            {
                titulo: "Paneles",
                subtitulo: "Visualización de datos",
                descricao: "Creación de paneles interactivos con gráficos, tablas e indicadores en tiempo real para facilitar el análisis de métricas."
            },
            {
                titulo: "Landing Pages",
                subtitulo: "Alta conversión",
                descricao: "Páginas atractivas y optimizadas para campañas de marketing digital, generación de leads o lanzamientos."
            },
            {
                titulo: "Integraciones",
                subtitulo: "Conexiones útiles",
                descricao: "Integración de sistemas con APIs de redes sociales o CRMs para ampliar funcionalidades y automatizar procesos."
            }
        ];
        $(".servico > div").each(function (index) {
            $(this).find("h4").text(servicios[index].titulo);
            $(this).find("p.azul").text(servicios[index].subtitulo);
            $(this).find("p").last().text(servicios[index].descricao);
        });
        // Ferramentas e Projetos - Tradução para Espanhol
        // Ferramentas
        $("#ferramentas h2").html("Herramientas y tecnologías<br>que domino:");

        // Nomes das ferramentas
        $(".ferramenta .react p").text("React");
        $(".ferramenta .javascript p").text("JavaScript");
        $(".ferramenta .css p").text("CSS");
        $(".ferramenta .html p").text("HTML");
        $(".ferramenta .java p").text("Java");
        $(".ferramenta .python p").text("Python");
        $(".ferramenta .sql p").text("SQL");
        $(".ferramenta svg + p").text("C-Sharp");

        // Projetos
        $("#projetos h2").text("Proyectos");
        $("#projetos h3").text("Mira cómo aplico mis habilidades en proyectos reales.");

        $(".card").each(function (i, el) {
            const $card = $(el);
            const h3 = $card.find("h3").text().trim();

            if (h3 === "Buscgame 2.0") {
                $card.find("h3").text("Buscgame 2.0");
                $card.find("p").text("En desarrollo. Versión mejorada de Buscgame, un sitio que busca y compara los mejores precios de videojuegos.");
            } else if (h3 === "Portfólio") {
                $card.find("h3").text("Portafolio");
                $card.find("p").text("Proyecto desarrollado completamente, incluyendo wireframe, mockup e implementación del diseño con HTML y CSS.");
            } else if (h3.includes("Outro Projeto")) {
                $card.find("h3").text("Otro Proyecto");
                $card.find("p").text("Descripción breve del proyecto.");
            }
        });

        // Pie de página
        $("footer h3").eq(0).text("Contacto");
        $("footer p").eq(0).text("Envíame un mensaje");
        $("footer h3").eq(1).text("Mapa del sitio");
        $("footer p").eq(1).text("Todas las páginas");
        $("footer h3").eq(2).text("Contacto");
        $("button[type='submit']").text("Enviar"); // ou "Enviar mensaje", se preferir mais claro

        $(".contatos ul li").eq(0).find("a").text("Inicio");
        $(".contatos ul li").eq(1).find("a").text("Sobre mí");
        $(".contatos ul li").eq(2).find("a").text("Proyectos");
        $(".contatos ul li").eq(3).find("a").text("Servicios");
        $(".contatos ul li").eq(4).find("a").text("Contacto");

        $("footer .copyright").text("© 2025 Guilherme Pinheiro — Todos los derechos reservados.");
    });
});
window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
window.addEventListener('resize', checkFade);
// Inicializa
updateCarousel();