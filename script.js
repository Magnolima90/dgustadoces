// ============================================
// D'Gusta Doces - Script Principal
// ============================================

// Configuração do WhatsApp
// Número real do WhatsApp (incluindo código do país e DDD)
// Atualizado para contato: Kátia Maria (informado pelo usuário)
const WHATSAPP_NUMBER = '558592544333'; // Formato: 55 + DDD + Número (sem caracteres especiais)

// Mensagem padrão para o WhatsApp (usada quando nenhuma mensagem é passada)
const DEFAULT_WHATSAPP_MESSAGE = 'Olá Kátia Maria! Gostaria de fazer um pedido ou solicitar um orçamento.';

/**
 * Abre o WhatsApp com uma mensagem pré-preenchida
 * @param {string} message - Mensagem padrão
 */
function abrirWhatsApp(message) {
    const msg = (message && message.trim()) ? message : DEFAULT_WHATSAPP_MESSAGE;
    const encodedMessage = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

/* ============================================
   Orçamento Rápido - modal and form handlers
   ============================================ */

function openQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('active');
    // focus first input
    const first = document.getElementById('quoteDate') || document.getElementById('quoteQuantity');
    if (first) first.focus();
}

function closeQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('active');
}

function submitQuoteForm() {
    const date = document.getElementById('quoteDate').value || 'Não informado';
    const qty = document.getElementById('quoteQuantity').value || 'Não informado';
    const size = document.getElementById('quoteSize').value || 'Não informado';
    const flavor = document.getElementById('quoteFlavor').value || 'Não informado';
    const notes = document.getElementById('quoteNotes').value || '';

    // Validação: Quantidade e Sabor são obrigatórios (inline errors)
    const qtyInput = document.getElementById('quoteQuantity');
    const flavorInput = document.getElementById('quoteFlavor');
    const errQty = document.getElementById('errQuantity');
    const errFlavor = document.getElementById('errFlavor');
    // reset
    qtyInput.classList.remove('input-error');
    flavorInput.classList.remove('input-error');
    if (errQty) errQty.textContent = '';
    if (errFlavor) errFlavor.textContent = '';

    let hasError = false;
    if (!qtyInput.value || Number(qtyInput.value) <= 0) {
        qtyInput.classList.add('input-error');
        if (errQty) errQty.textContent = 'Por favor informe a quantidade (unidades).';
        hasError = true;
    }
    if (!flavorInput.value || !flavorInput.value.trim()) {
        flavorInput.classList.add('input-error');
        if (errFlavor) errFlavor.textContent = 'Por favor informe o sabor desejado.';
        hasError = true;
    }
    if (hasError) {
        // focus first error
        if (qtyInput.classList.contains('input-error')) qtyInput.focus();
        else flavorInput.focus();
        return;
    }

    const messageLines = [
        `Olá Kátia Maria! Solicito um orçamento para:`,
        `- Data: ${date}`,
        `- Quantidade: ${qtyInput.value}`,
        `- Tamanho/Porções: ${size}`,
        `- Sabor: ${flavorInput.value}`
    ];

    if (notes.trim()) {
        messageLines.push(`- Observações: ${notes.trim()}`);
    }

    const fullMessage = messageLines.join('\n');
    abrirWhatsApp(fullMessage);
    closeQuoteModal();
}

// Close modal on Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeQuoteModal();
});


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
    if (!navMenu || !menuToggle) return;
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

/**
 * Fecha o menu quando um link é clicado
 */
function closeMenu() {
    if (!navMenu || !menuToggle) return;
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
}

// Event listeners do menu (com checagens)
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

if (navLinks && navLinks.length) {
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

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
// CONTADORES DE ESTATÍSTICAS
// ============================================

const statNumbers = document.querySelectorAll('.estatistica-numero');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';

    if (prefersReducedMotion) {
        el.textContent = target.toFixed(decimals) + suffix;
        return;
    }

    const duration = 1500;
    const startTime = performance.now();

    function tick(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (progress < 1) {
            requestAnimationFrame(tick);
        }
    }

    requestAnimationFrame(tick);
}

if (statNumbers.length) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => statsObserver.observe(el));
}

// ============================================
// NAVBAR FIXA - SCROLL EFEITO
// ============================================

const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-light)';
        }
    });
}

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
            const navHeight = navbar ? navbar.offsetHeight : 0;
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
    // inicialização concluída
    // console logs removidos para produção
});

// ============================================
// VALIDAÇÃO DE PERFORMANCE
// ============================================

// Monitora o tempo de carregamento (silencioso — usar para analytics se necessário)
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        try {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            // enviar para analytics se desejar
        } catch (err) {
            // ignore
        }
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
