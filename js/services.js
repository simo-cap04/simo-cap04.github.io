// LOGICA REPARTI E SERVIZI PARAFARMACIA
function initServices() {
    
    // ==========================================
    // 1. CARICAMENTO REPARTI (Con foto e click per espandere)
    // ==========================================
    const repartiContainer = document.getElementById('services-grid');
    if (repartiContainer) {
        repartiContainer.innerHTML = '';
        SERVICES.forEach(service => {
            const el = document.createElement('div');
            el.className = 'bg-white rounded-2xl shadow-sm border border-slate-100 border-t-4 border-t-sky-500 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full';
            
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

    // ==========================================
    // 2. CARICAMENTO SERVIZI (Con Icone, Testo visibile e NESSUN click)
    // ==========================================
    const pharmacyContainer = document.getElementById('pharmacy-services-grid');
    if (pharmacyContainer) {
        pharmacyContainer.innerHTML = '';
        PHARMACY_SERVICES.forEach(service => {
            const el = document.createElement('div');
            el.className = 'h-full';
            
            // Nuova Card statica ma con animazione al passaggio del mouse
            el.innerHTML = `
                <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default text-center flex flex-col items-center relative overflow-hidden h-full">
                    
                    ${service.badge ? `
                    <span class="${service.badgeColor} absolute top-4 right-4 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider z-10">
                        ${service.badge}
                    </span>` : ''}
                    
                    <div class="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-sky-500 group-hover:scale-110 transition-all duration-500 shadow-inner relative z-10">
                        <i data-lucide="${service.icon || 'activity'}" class="w-10 h-10 text-sky-500 group-hover:text-white transition-colors duration-300"></i>
                    </div>
                    
                    <h3 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-sky-600 transition-colors relative z-10">${service.title}</h3>
                    
                    <p class="text-slate-500 leading-relaxed text-sm flex-grow relative z-10">
                        ${service.short}
                    </p>
                    
                    <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-sky-50 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>
                </div>
            `;
            pharmacyContainer.appendChild(el);
        });
    }       

    // Crea il contenitore del modale nel DOM se non esiste già (Serve solo per i Reparti)
    if (!document.getElementById('service-modal')) {
        createModalElement();
    }

    // Re-inizializza le icone
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ==========================================
// FUNZIONI PER IL MODALE (Usato solo per i Reparti)
// ==========================================

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

function openServiceModal(id, type) {
    const item = SERVICES.find(s => s.id === id);
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
