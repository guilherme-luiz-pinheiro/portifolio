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
        card.style.opacity = idx === activeIndex ? '1' : '0.5';

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

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
window.addEventListener('resize', checkFade);

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

// Inicializa
updateCarousel();