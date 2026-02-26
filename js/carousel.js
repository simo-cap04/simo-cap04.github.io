// LOGICA CAROSELLO
let currentSlide = 0;
const carouselContainer = document.getElementById('carousel-container');
const dotsContainer = document.getElementById('carousel-dots');
let carouselInterval;

function initCarousel() {
    if (!carouselContainer) return; 

    // Render Slides
    CAROUSEL_SLIDES.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        
        // Sfondo slide (rimane a 2 secondi)
        slideDiv.className = `slide absolute inset-0 w-full h-full transition-all duration-[2000ms] ease-in-out transform ${
            index === 0 
            ? 'opacity-100 scale-100 z-10' 
            : 'opacity-0 scale-105 z-0'
        }`;
        
        slideDiv.innerHTML = `
            <img 
                src="${slide.image}" 
                alt="${slide.title}" 
                class="absolute inset-0 w-full h-full object-cover"
                onerror="this.style.display='none';" 
            >
            
            <div class="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/30 z-10 pointer-events-none"></div>
            
            <div class="relative h-full flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 pointer-events-none">
                
                <div class="w-full max-w-3xl mx-auto text-center space-y-6 pointer-events-auto">
                    
                    <h2 class="slide-title text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-md transform transition-all duration-[1500ms] ease-out delay-[500ms] ${index === 0 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}">
                        ${slide.title}
                    </h2>
                    
                    <p class="slide-subtitle text-xl text-slate-200 font-medium transform transition-all duration-[1500ms] ease-out delay-[800ms] ${index === 0 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}">
                        ${slide.subtitle}
                    </p>
                    
                    <div class="slide-btn transform transition-all duration-[1500ms] ease-out delay-[1100ms] ${index === 0 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}">
                        
                        <button onclick="navigateTo('services')" class="mx-auto px-8 py-3 bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/50 hover:border-white backdrop-blur-md font-medium rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm">
                            Scopri di più <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </button>
                        
                    </div>
                </div>
            </div>
        `;
        carouselContainer.appendChild(slideDiv);

        // Render Dots
        const dot = document.createElement('button');
        dot.className = `h-2 rounded-full transition-all duration-700 ease-out z-30 relative ${index === 0 ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/80'}`;
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
    
    startInterval();
}

function updateCarouselUI() {
    const slides = document.querySelectorAll('.slide');
    const dots = dotsContainer.children;

    slides.forEach((slide, index) => {
        const title = slide.querySelector('.slide-title');
        const subtitle = slide.querySelector('.slide-subtitle');
        const btn = slide.querySelector('.slide-btn');

        if(index === currentSlide) {
            slide.classList.remove('opacity-0', 'scale-105', 'z-0');
            slide.classList.add('opacity-100', 'scale-100', 'z-10');
            
            // Entrata testi: rimuove la traslazione iniziale (translate-y-12)
            setTimeout(() => {
                if(title) title.classList.remove('translate-y-12', 'opacity-0');
                if(subtitle) subtitle.classList.remove('translate-y-12', 'opacity-0');
                if(btn) btn.classList.remove('translate-y-12', 'opacity-0');
            }, 50); 
        } else {
            slide.classList.remove('opacity-100', 'scale-100', 'z-10');
            slide.classList.add('opacity-0', 'scale-105', 'z-0');
            
            // Uscita testi: ripristina la traslazione (translate-y-12) per il prossimo giro
            if(title) title.classList.add('translate-y-12', 'opacity-0');
            if(subtitle) subtitle.classList.add('translate-y-12', 'opacity-0');
            if(btn) btn.classList.add('translate-y-12', 'opacity-0');
        }
    });

    Array.from(dots).forEach((dot, index) => {
        if(index === currentSlide) {
            dot.classList.remove('bg-white/50', 'w-2');
            dot.classList.add('bg-sky-500', 'w-8');
        } else {
            dot.classList.add('bg-white/50', 'w-2');
            dot.classList.remove('bg-sky-500', 'w-8');
        }
    });
}

function startInterval() {
    clearInterval(carouselInterval);
    // Timer lasciato a 7 secondi per dare tempo alla nuova animazione
    carouselInterval = setInterval(nextSlide, 7000); 
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % CAROUSEL_SLIDES.length;
    updateCarouselUI();
    startInterval();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length;
    updateCarouselUI();
    startInterval();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarouselUI();
    startInterval();
}