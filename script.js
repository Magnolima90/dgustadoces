// ============================================
// D'Gusta Doces - Script Principal
// ============================================

// Configuração do WhatsApp
// Número real do WhatsApp (incluindo código do país e DDD)
// Atualizado para contato: Kátia Maria (informado pelo usuário)
const WHATSAPP_NUMBER = '558592544333'; // Formato: 55 + DDD + Número (sem caracteres especiais)

/**
 * Abre o WhatsApp com uma mensagem pré-preenchida
 * @param {string} message - Mensagem padrão
 */
function abrirWhatsApp(message = 'Olá! Vim pelo site e gostaria de fazer um pedido') {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// ============================================
// MENU RESPONSIVO
// ============================================

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

/**
 * Toggle do menu mobile
 */
function toggleMenu() {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

/**
 * Fecha o menu quando um link é clicado
 */
function closeMenu() {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
}

// Event listeners do menu
menuToggle.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Fecha o menu ao clicar fora
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        closeMenu();
    }
});

// ============================================
// ANIMAÇÕES DE SCROLL (FADE-IN)
// ============================================

/**
 * Observa elementos com classe 'fade-in' e os anima quando entram na viewport
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplica observer a todos os elementos com fade-in
const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(element => {
    observer.observe(element);
});

// ============================================
// NAVBAR FIXA - SCROLL EFEITO
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-light)';
    }
});

// ============================================
// ANIMAÇÃO SUAVE DE SCROLL PARA ÂNCORAS
// ============================================

// O scroll suave é definido no CSS (scroll-behavior: smooth)
// mas aqui adicionamos ajuste para a navbar fixa

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// EFEITOS DE HOVER NOS CARDS
// ============================================

const cards = document.querySelectorAll('.produto-card, .step, .galeria-item');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ============================================
// PRELOAD DE IMAGENS
// ============================================

/**
 * Pré-carrega imagens da pasta /fotos
 */
function preloadImages() {
    const imageFolder = './fotos/';
    // Adicione aqui os nomes das imagens quando forem adicionadas
    // const images = ['imagem1.jpg', 'imagem2.jpg', ...];
    // images.forEach(img => {
    //     const preload = new Image();
    //     preload.src = imageFolder + img;
    // });
}

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Pré-carrega imagens
    preloadImages();
    
    // Log de inicialização (remover em produção)
    console.log('✨ D\'Gusta Doces - Site carregado com sucesso!');
    console.log('📱 WhatsApp configurado:', WHATSAPP_NUMBER);
});

// ============================================
// VALIDAÇÃO DE PERFORMANCE
// ============================================

// Monitora o tempo de carregamento
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('⚡ Tempo de carregamento:', pageLoadTime + 'ms');
    });
}

// ============================================
// SERVICE WORKER (Opcional - para cache)
// ============================================

// Descomente para adicionar suporte offline
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registrado'))
            .catch(err => console.log('Erro ao registrar Service Worker'));
    });
}
*/
