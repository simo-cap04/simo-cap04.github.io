// LOGICA SOCIAL (3 POST INSTAGRAM STATICI - ZERO COOKIE)
function initSocial() {
    const container = document.getElementById('social-grid');
    if (!container) return;

    // Funzione per creare una card Instagram statica ed elegante
    function createStaticInstaCard(link, imageUrl, altText) {
        return `
            <a href="${link}" target="_blank" class="block w-full max-w-[400px] h-[480px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative group border border-slate-100">
                
                <img src="${imageUrl}" alt="${altText}" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700">
                
                <div class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300"></div>
                
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-pink-600">
                    <i data-lucide="instagram" class="w-5 h-5"></i>
                </div>
                
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span class="bg-white text-slate-800 font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
                        Vai al post <i data-lucide="external-link" class="w-4 h-4 text-slate-400"></i>
                    </span>
                </div>
            </a>
        `;
    }

    // POST 1: Reel (DVJdlQpDHK_)
    const post1 = createStaticInstaCard(
        "https://www.instagram.com/p/DVJdlQpDHK_/",
        "images/festa_donna.webp",
        "Post Instagram 1"
    );

    // POST 2: Immagine (DU8CbR7DCi_)
    const post2 = createStaticInstaCard(
        "https://www.instagram.com/p/DU8CbR7DCi_/",
        "image/consulenza.webp",
        "Post Instagram 2"
    );

    // POST 3: Post originale (DT982GjDAOu)
    const post3 = createStaticInstaCard(
        "https://www.instagram.com/p/DT982GjDAOu/",
        "https://placehold.co/400x480/e2e8f0/64748b?text=Screenshot+Post+3",
        "Post Instagram 3"
    );
    
    // Inserisce i 3 post nella griglia
    container.innerHTML = post1 + post2 + post3;
    
    // Ricarica le icone (fondamentale quando si inietta HTML nuovo)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}


