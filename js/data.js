// CONFIGURAZIONE DATI

// 1. DATI CAROSELLO
const CAROUSEL_SLIDES = [
    {
        id: 1,
        title: "Farmaci da banco",
        subtitle: "Tutto il necessario per il tuo pronto intervento quotidiano e l'automedicazione.",
        image: "images/slide_farmaci.webp"
    },
    {
        id: 2,
        title: "Omeopatia",
        subtitle: "Ritrova l'equilibrio naturale con la nostra selezione di rimedi omeopatici.",
        image: "images/slide_omeopatia.webp" 
    },
    {
        id: 3,
        title: "Fitoterapia",
        subtitle: "Il potere delle piante officinali per il benessere del tuo corpo.",
        image: "images/slide_fitoterapia.webp"
    },
    {
        id: 4,
        title: "Veterinaria",
        subtitle: "Prodotti specifici e cura per i tuoi piccoli amici a quattro zampe.",
        image: "images/slide_veterinaria.webp"
    },
    {
        id: 5,
        title: "Cosmetica",
        subtitle: "Bellezza e salute per la tua pelle con i migliori marchi dermatologici.",
        image: "images/slide_cosmetica.webp"
    },
    {
        id: 6,
        title: "Dispositivi Medici",
        subtitle: "Strumenti elettromedicali e supporti ortopedici per la tua salute e il tuo recupero.",
        image: "images/slide_dispositivi.webp"
    }
];

// 2. DATI REPARTI (ex SERVIZI)
const SERVICES = [
    {
        id: 1,
        image: CAROUSEL_SLIDES[0].image,
        title: CAROUSEL_SLIDES[0].title,
        short: CAROUSEL_SLIDES[0].subtitle,
        details: "Nel nostro reparto dedicato ai farmaci da banco (SOP e OTC), troverai tutto il necessario per l'automedicazione e il pronto intervento quotidiano. I nostri farmacisti sono a tua completa disposizione per consigliarti il prodotto più adatto per alleviare i sintomi dei disturbi più comuni, come mal di testa, raffreddore, problemi gastrointestinali o dolori muscolari, garantendoti sempre un consiglio professionale e sicuro."
    },
    {
        id: 2,
        image: CAROUSEL_SLIDES[1].image,
        title: CAROUSEL_SLIDES[1].title,
        short: CAROUSEL_SLIDES[1].subtitle,
        details: "L'omeopatia offre un approccio dolce e naturale per il trattamento di diverse problematiche fisiche ed emotive. Presso la nostra parafarmacia puoi trovare un'ampia selezione di rimedi omeopatici, dai granuli alle gocce. Ti offriamo consulenze personalizzate per aiutarti a ristabilire il tuo naturale equilibrio.
    },
    {
        id: 3,
        image: CAROUSEL_SLIDES[2].image,
        title: CAROUSEL_SLIDES[2].title,
        short: CAROUSEL_SLIDES[2].subtitle,
        details: "Il nostro reparto fitoterapico offre una selezione accurata di estratti secchi, tinture madri, oli essenziali, integratori e tisane di alta qualità. Affidati alla nostra competenza per scoprire come le proprietà delle piante possano supportare l'organismo nel gestire i piccoli disturbi quotidiani. Che si tratti di ritrovare il riposo notturno, favorire la digestione, contrastare lo stress o sostenere le difese immunitarie, ti guideremo nella scelta del rimedio naturale più indicato per le tue specifiche necessità."
    },
    {
        id: 4,
        image: CAROUSEL_SLIDES[3].image,
        title: CAROUSEL_SLIDES[3].title,
        short: CAROUSEL_SLIDES[3].subtitle,
        details: "La salute dei tuoi amici a quattro zampe è importante quanto la tua. Abbiamo dedicato un intero reparto alla veterinaria, offrendo farmaci con obbligo e senza obbligo di ricetta, antiparassitari, integratori e prodotti per l'igiene di cani, gatti e altri animali da compagnia. Ti supportiamo con consigli mirati per garantire il massimo benessere ai tuoi animali."
    },  
    {
        id: 5,
        image: CAROUSEL_SLIDES[4].image,
        title: CAROUSEL_SLIDES[4].title,
        short: CAROUSEL_SLIDES[4].subtitle,
        details: "Il nostro reparto di Dermocosmesi offre un'ampia gamma di trattamenti per ogni tipo di pelle, anche le più sensibili. I nostri esperti sono a disposizione per un'analisi personalizzata e per consigliarti le routine di bellezza più adatte a te. Selezioniamo rigorosamente solo marchi certificati, ipoallergenici e di altissima qualità per la cura del viso, del corpo e dei capelli. Ogni mese puoi prenotare un esame gratuito della pelle e dei capelli con microcamera"
    },
    {
        id: 6,
        image: CAROUSEL_SLIDES[5].image,
        title: CAROUSEL_SLIDES[5].title,
        short: CAROUSEL_SLIDES[5].subtitle,
        details: "Offriamo un vasto assortimento di dispositivi medici ed elettromedicali di alta precisione: misuratori di pressione, apparecchi per l'aerosolterapia, termometri, pulsossimetri e una selezione di supporti ortopedici leggeri. Il nostro personale è sempre a disposizione per illustrarti il corretto funzionamento di ogni strumento, garantendoti affidabilità e sicurezza per il monitoraggio della tua salute a casa."
    }
];


const PHARMACY_SERVICES = [
    {
        id: 101,
        title: "Misurazione Pressione",
        short: "Offriamo la misurazione della pressione arteriosa con strumentazione elettronica professionale. Un monitoraggio costante è un ottimo strumento di prevenzione cardiovascolare e ti aiutiamo a tenere traccia dei tuoi valori nel tempo.",
        icon: "activity", // Disegno: Tracciato battito cardiaco
        badge: "Gratuito",
        badgeColor: "bg-emerald-500" // Verde
    },
    {
        id: 102,
        title: "Consegna a Domicilio",
        short: "Per agevolare chi ha difficoltà a muoversi o non può recarsi fisicamente in parafarmacia, offriamo un servizio di consegna a domicilio per i paesi limitrofi. Contattaci telefonicamente o su WhatsApp per prenotare i tuoi prodotti e accordarci per la consegna.",
        icon: "truck", // Disegno: Furgoncino
        badge: "Gratuito",
        badgeColor: "bg-emerald-500" // Verde
    },
    {
        id: 103,
        title: "Bilancia Pesapersone",
        short: "Mettiamo a disposizione dei nostri clienti una bilancia pesapersone professionale con altimetro integrato. Uno strumento preciso per monitorare la tua forma fisica o per seguire l'andamento del tuo peso durante un percorso nutrizionale.",
        icon: "scale", // Disegno: Bilancia per il peso corporeo
        badge: "Gratuito",
        badgeColor: "bg-emerald-500" // Verde
    },
    {
        id: 104,
        title: "Foratura Lobi",
        short: "Effettuiamo la foratura dei lobi auricolari utilizzando esclusivamente sistemi monouso sterili a capsula. Ideale anche per i bambini, con una vasta scelta di orecchini ipoallergenici in materiale biocompatibile e nichel-safe. Su prenotazione.",
        icon: "gem", // Disegno: Diamante/Gioiello
        badge: "A pagamento",
        badgeColor: "bg-amber-500" // Arancione
    }
];



