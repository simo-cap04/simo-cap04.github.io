// MAIN NAVIGATION & INITIALIZATION

function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target page
    const target = document.getElementById(pageId);
    if(target) target.classList.add('active');

    // Update Navbar active state (Desktop)
    document.querySelectorAll('.nav-link').forEach(link => {
        if(link.getAttribute('data-target') === pageId) {
            link.classList.add('text-sky-600', 'border-b-2', 'border-sky-600');
            link.classList.remove('text-slate-500');
        } else {
            link.classList.remove('text-sky-600', 'border-b-2', 'border-sky-600');
            link.classList.add('text-slate-500');
        }
    });

    // Close Mobile Menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    });
}

// INIZIALIZZAZIONE ALL'AVVIO
document.addEventListener('DOMContentLoaded', () => {
    // 1. Avvia i moduli
    initCarousel();
    initServices();
    initSocial();
    
    // 2. Crea le icone Lucide
    if(typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 3. Highlight Home Tab
    const homeLink = document.querySelector('.nav-link[data-target="home"]');
    if(homeLink) {
        homeLink.classList.add('text-sky-600', 'border-b-2', 'border-sky-600');
        homeLink.classList.remove('text-slate-500');
    }
});