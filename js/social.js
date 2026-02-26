// LOGICA SOCIAL (3 POST INSTAGRAM)
function initSocial() {
    const container = document.getElementById('social-grid');
    if (!container) return;

    // Contenitore fisso: altezza 480px, overflow-hidden blocca lo scorrimento
    const wrapStart = `<div class="w-full max-w-[400px] h-[600px] bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden relative flex justify-center">`;
    const wrapEnd = `</div>`;

    // POST 1: Reel (DVJdlQpDHK_) - rimosso data-instgrm-captioned
    const post1 = wrapStart + `
        <blockquote class="instagram-media w-full" data-instgrm-permalink="https://www.instagram.com/p/DVJdlQpDHK_/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; margin: 0; padding:0; width:100%;">
        <div style="padding:16px;"> <a href="https://www.instagram.com/p/DVJdlQpDHK_/" target="_blank">Visualizza post</a></div>
        </blockquote>
    ` + wrapEnd;

    // POST 2: Immagine (DU8CbR7DCi_) - rimosso data-instgrm-captioned
    const post2 = wrapStart + `
        <blockquote class="instagram-media w-full" data-instgrm-permalink="https://www.instagram.com/p/DU8CbR7DCi_/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; margin: 0; padding:0; width:100%;">
        <div style="padding:16px;"> <a href="https://www.instagram.com/p/DU8CbR7DCi_/" target="_blank">Visualizza post</a></div>
        </blockquote>
    ` + wrapEnd;

    // POST 3: Post originale (DT982GjDAOu) - rimosso data-instgrm-captioned
    const post3 = wrapStart + `
        <blockquote class="instagram-media w-full" data-instgrm-permalink="https://www.instagram.com/p/DT982GjDAOu/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; margin: 0; padding:0; width:100%;">
        <div style="padding:16px;"> <a href="https://www.instagram.com/p/DT982GjDAOu/" target="_blank">Visualizza post</a></div>
        </blockquote>
    ` + wrapEnd;
    
    // Inserisce i 3 post nella griglia
    container.innerHTML = post1 + post2 + post3;

    // Richiama lo script ufficiale di Instagram per trasformare il codice nei riquadri visivi
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//www.instagram.com/embed.js";
        document.body.appendChild(script);
    } else {
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }
}