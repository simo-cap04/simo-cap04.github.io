// LOGICA REPARTI E SERVIZI PARAFARMACIA
function initServices() {
    
    // 1. CARICAMENTO REPARTI
    const repartiContainer = document.getElementById('services-grid');
    if (repartiContainer) {
        repartiContainer.innerHTML = '';
        SERVICES.forEach(service => {
            const el = document.createElement('div');
            el.className = 'bg-white rounded-2xl shadow-sm border border-slate-100 border-t-4 border-t-sky-500 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col';
            
            el.innerHTML = `
                <div class="h-56 overflow-hidden relative bg-slate-100">
                    <img src="${service.image}" alt="${service.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" onerror="this.src='https://placehold.co/600x400';">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div class="p-6 flex flex-col items-center text-center flex-grow">
                    <h3 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors">${service.title}</h3>
                    <p class="text-slate-500 text-sm mb-6 leading-relaxed">${service.short}</p>
                    <button onclick="openServiceModal(${service.id}, 'reparto')" class="mt-auto text-sky-600 hover:text-sky-800 font-semibold text-sm flex items-center gap-1.5 transition-colors outline-none group/btn">
                        <span>Leggi di più</span> 
                        <i data-lucide="arrow-right" class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"></i>
                    </button>
                </div>
            `;
            repartiContainer.appendChild(el);
        });
    }

    // 2. CARICAMENTO SERVIZI PARAFARMACIA
   // 2. CARICAMENTO SERVIZI PARAFARMACIA
    const pharmacyContainer = document.getElementById('pharmacy-services-grid');
    if (pharmacyContainer) {
        pharmacyContainer.innerHTML = '';
        PHARMACY_SERVICES.forEach(service => {
            const el = document.createElement('div');
            // Card con bordo superiore verde smeraldo, senza animazioni di zoom
            el.className = 'bg-white rounded-2xl shadow-sm border border-slate-100 border-t-4 border-t-emerald-500 hover:shadow-md transition-all duration-300 flex flex-col h-full';
            
            el.innerHTML = `
                <div class="p-6 md:p-8 flex flex-col flex-grow">
                    <div class="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                        <h3 class="text-xl font-bold text-slate-800">${service.title}</h3>
                        
                        <span class="${service.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                            ${service.badge}
                        </span>
                    </div>
                    
                    <p class="text-slate-600 text-sm leading-relaxed flex-grow">
                        ${service.details}
                    </p>
                </div>
            `;
            pharmacyContainer.appendChild(el);
        });
    }       

    // Crea il contenitore del modale nel DOM se non esiste già
    if (!document.getElementById('service-modal')) {
        createModalElement();
    }

    // Re-inizializza le icone
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Funzione per creare la struttura del pannello in sovraimpressione (Modale)
function createModalElement() {
    const modal = document.createElement('div');
    modal.id = 'service-modal';
    modal.className = 'fixed inset-0 z-[100] hidden items-center justify-center px-4 py-6 sm:px-0';
    
    modal.innerHTML = `
        <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 opacity-0" id="service-modal-backdrop" onclick="closeServiceModal()"></div>
        
        <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-auto overflow-hidden transform scale-95 opacity-0 transition-all duration-300 flex flex-col max-h-[90vh]" id="service-modal-panel">
            
            <button onclick="closeServiceModal()" class="absolute top-4 right-4 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center shadow-sm backdrop-blur-md transition-all outline-none">
                <i data-lucide="x" class="w-5 h-5"></i>
            </button>

            <div class="h-64 sm:h-80 w-full relative flex-shrink-0 bg-slate-100">
                <img id="modal-img" src="" alt="" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                <h3 id="modal-title" class="absolute bottom-6 left-6 right-6 text-2xl sm:text-3xl font-bold text-white drop-shadow-lg"></h3>
            </div>

            <div class="p-6 sm:p-8 overflow-y-auto">
                <div class="w-12 h-1 bg-sky-500 rounded-full mb-6"></div>
                <p id="modal-desc" class="text-slate-700 leading-relaxed text-base sm:text-lg"></p>
                
                <div class="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                    <button onclick="closeServiceModal(); navigateTo('contacts')" class="px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2">
                        Richiedi Informazioni <i data-lucide="mail" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Funzione per aprire il pannello e caricare i dati (adattata per entrambe le liste)
function openServiceModal(id, type) {
    // Sceglie in quale blocco dati cercare in base a cosa è stato cliccato
    const arrayToSearch = type === 'reparto' ? SERVICES : PHARMACY_SERVICES;
    const item = arrayToSearch.find(s => s.id === id);
    if (!item) return;

    const modal = document.getElementById('service-modal');
    const backdrop = document.getElementById('service-modal-backdrop');
    const panel = document.getElementById('service-modal-panel');
    
    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-img').alt = item.title;
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-desc').innerHTML = item.details.replace(/\n/g, '<br><br>');

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    void modal.offsetWidth;

    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-100');
    panel.classList.remove('scale-95', 'opacity-0');
    panel.classList.add('scale-100', 'opacity-100');

    document.body.style.overflow = 'hidden';

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Funzione per chiudere il pannello
function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    const backdrop = document.getElementById('service-modal-backdrop');
    const panel = document.getElementById('service-modal-panel');

    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0');
    panel.classList.remove('scale-100', 'opacity-100');
    panel.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }, 300);
}