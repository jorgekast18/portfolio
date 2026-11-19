export type Lang = "en" | "es";

export const ui = {
    en: {
        nav: { home: "Home", projects: "Projects", cv: "Experience", about: "About", contact: "Contact", menu: "Open menu", switchTo: "Español", switchLabel: "Ver en español" },
        footer: { tagline: "Senior Software Engineer & AI Engineer · Cali, Colombia · Open to remote and relocation", built: "Built with Astro" },
        common: {
            liveDemo: "Live demo ↗", source: "Source code ↗", caseStudy: "Read case study →", downloadCv: "Download CV (PDF)",
            emailMe: "Email me", getInTouch: "Get in touch", linkedin: "LinkedIn ↗", connectLinkedin: "Connect on LinkedIn",
            openTo: "I'm open to AI Engineer, Senior Software Engineer and Tech Lead roles — remote or with relocation.",
            location: "Cali, Colombia · Open to remote roles and relocation", techStack: "Tech stack", skip: "Skip to content",
        },
        home: {
            title: "AI Engineer &", title2: "Senior Software Engineer",
            intro: "I build LLM agents, RAG pipelines and the production software around them — on top of 10+ years shipping fintech, mobile banking and enterprise products used by more than a million people in Latin America.",
            seeWork: "See my work",
            stats: ["years building products", "monthly users on apps I built", "less fraud with biometrics", "engineers led as CTO"],
            nowKicker: "Now", aiTitle: "AI engineering in production",
            aiIntro: "Multi-agent orchestration, tool calling, RAG and guardrails — built with the same engineering discipline I applied for a decade in regulated, high-traffic fintech systems.",
            trackKicker: "Track record", trackTitle: "Fintech, mobile and enterprise at scale",
            allProjects: "All projects", fullExperience: "Full experience",
            logos: "Companies I have built for", ctaTitle: "Building something with AI?",
            portraitAlt: "Portrait of Jorge Castaño",
        },
        projects: {
            pageTitle: "Projects", kicker: "Projects", title: "Work I have built and led",
            intro: "From AI agents to mobile banking used by millions — what I built, my role, and the results.",
            description: "AI agents, fintech and enterprise products built and led by Jorge Castaño: Veqya, Daviplata, Davivienda, Monetta, Femsa Salud, Cencosud and more.",
            ctaTitle: "Interested in working together?",
            categories: { ai: "AI Engineering", fintech: "Fintech & Mobile Banking", enterprise: "Enterprise & Platforms" },
        },
        case: { back: "← All projects", context: "Context", contribution: "What I did", results: "Results", stack: "Stack" },
        cv: {
            pageTitle: "Experience", kicker: "Experience", title: "10+ years shipping products that scale",
            intro: "Senior Software Engineer and Tech Lead focused on AI engineering, with a background in fintech, mobile banking and enterprise platforms.",
            description: "Experience of Jorge Castaño: AI engineering, Tech Lead at Amaris Consulting, Co-Founder & CTO at Monetta, mobile banking for Davivienda, Daviplata and Banco PagaTodo.",
            experience: "Professional experience", education: "Education", skills: "Skills",
            languages: "Languages: Spanish (native) · English (intermediate, B1)",
        },
        about: {
            pageTitle: "About", kicker: "About", hi: "Hi, I'm Jorge.",
            description: "About Jorge Castaño: Senior Software Engineer and AI Engineer from Cali, Colombia, with 10+ years in fintech, mobile banking and enterprise software.",
            p1: "I'm a Senior Software Engineer and AI Engineer from Cali, Colombia. For more than 10 years I've built fintech, mobile banking and enterprise products — from geolocation tools used by over a million people every month to a blockchain wallet I co-founded as CTO.",
            p2: "Today I focus on AI engineering: designing agents, RAG pipelines and the production software around them. I'm the founder of Veqya, an AI agent platform for small businesses, and I'm pursuing an M.Sc. in Computer Engineering at Universidad de Granada.",
            whatIDo: "What I do", howIWork: "How I work", ctaTitle: "Let's work together", viewExperience: "View my experience",
            focus: [
                { title: "AI engineering", text: "LLM agents, multi-agent orchestration, tool calling and RAG — taken to production with evaluation, guardrails and clear AI usage policies." },
                { title: "Production architecture", text: "Microservices, hexagonal and clean architecture, CI/CD and infrastructure as code on AWS and GCP." },
                { title: "Mobile & full stack", text: "End-to-end delivery from the API and the database to the app in the store, with React Native, NestJS, Next.js and Python." },
                { title: "Technical leadership", text: "Building and mentoring cross-functional teams — up to 10 engineers as CTO — with Agile delivery and measurable quality." },
            ],
            principles: [
                { title: "Simple solutions to complex problems", text: "Complex systems don't need complex code. I favor designs others can understand, test and extend." },
                { title: "Measure what matters", text: "Performance, fraud, response times, defects: I like work that ends in a number someone cares about." },
                { title: "Teams over heroes", text: "Great products come from great teams. I invest in mentoring, reviews and shared standards." },
                { title: "Technology serves the business", text: "Every technical decision should move a product or business goal forward." },
            ],
        },
        notFound: { title: "Page not found", text: "This page couldn't be found.", back: "Back to home" },
    },
    es: {
        nav: { home: "Inicio", projects: "Proyectos", cv: "Experiencia", about: "Sobre mí", contact: "Contacto", menu: "Abrir menú", switchTo: "English", switchLabel: "View in English" },
        footer: { tagline: "Senior Software Engineer & AI Engineer · Cali, Colombia · Abierto a remoto y reubicación", built: "Hecho con Astro" },
        common: {
            liveDemo: "Ver en vivo ↗", source: "Código fuente ↗", caseStudy: "Leer caso de estudio →", downloadCv: "Descargar CV (PDF)",
            emailMe: "Escríbeme", getInTouch: "Contáctame", linkedin: "LinkedIn ↗", connectLinkedin: "Conectemos en LinkedIn",
            openTo: "Estoy abierto a roles de AI Engineer, Senior Software Engineer y Tech Lead, en remoto o con reubicación.",
            location: "Cali, Colombia · Abierto a roles remotos y a reubicación", techStack: "Tecnologías", skip: "Ir al contenido",
        },
        home: {
            title: "AI Engineer &", title2: "Senior Software Engineer",
            intro: "Construyo agentes con LLMs, pipelines RAG y el software de producción que los rodea, sobre más de 10 años entregando productos de fintech, banca móvil y software empresarial que usan más de un millón de personas en Latinoamérica.",
            seeWork: "Ver mi trabajo",
            stats: ["años construyendo productos", "usuarios mensuales en apps que construí", "menos fraude con biometría", "personas lideradas como CTO"],
            nowKicker: "Hoy", aiTitle: "IA en producción",
            aiIntro: "Orquestación multiagente, tool calling, RAG y guardrails, con la misma disciplina de ingeniería que apliqué durante una década en sistemas fintech regulados y de alto tráfico.",
            trackKicker: "Trayectoria", trackTitle: "Fintech, móvil y software empresarial a escala",
            allProjects: "Todos los proyectos", fullExperience: "Experiencia completa",
            logos: "Empresas para las que he construido", ctaTitle: "¿Estás construyendo algo con IA?",
            portraitAlt: "Retrato de Jorge Castaño",
        },
        projects: {
            pageTitle: "Proyectos", kicker: "Proyectos", title: "Lo que he construido y liderado",
            intro: "De agentes de IA a banca móvil usada por millones: qué construí, cuál fue mi rol y qué resultados obtuve.",
            description: "Agentes de IA, fintech y productos empresariales construidos y liderados por Jorge Castaño: Veqya, Daviplata, Davivienda, Monetta, Femsa Salud, Cencosud y más.",
            ctaTitle: "¿Trabajamos juntos?",
            categories: { ai: "Ingeniería de IA", fintech: "Fintech y banca móvil", enterprise: "Empresas y plataformas" },
        },
        case: { back: "← Todos los proyectos", context: "Contexto", contribution: "Qué hice", results: "Resultados", stack: "Tecnologías" },
        cv: {
            pageTitle: "Experiencia", kicker: "Experiencia", title: "Más de 10 años entregando productos que escalan",
            intro: "Senior Software Engineer y Tech Lead enfocado en ingeniería de IA, con trayectoria en fintech, banca móvil y plataformas empresariales.",
            description: "Experiencia de Jorge Castaño: ingeniería de IA, Tech Lead en Amaris Consulting, cofundador y CTO de Monetta, banca móvil para Davivienda, Daviplata y Banco PagaTodo.",
            experience: "Experiencia profesional", education: "Educación", skills: "Habilidades",
            languages: "Idiomas: español (nativo) · inglés (intermedio, B1)",
        },
        about: {
            pageTitle: "Sobre mí", kicker: "Sobre mí", hi: "Hola, soy Jorge.",
            description: "Sobre Jorge Castaño: Senior Software Engineer y AI Engineer de Cali, Colombia, con más de 10 años en fintech, banca móvil y software empresarial.",
            p1: "Soy Senior Software Engineer y AI Engineer, de Cali, Colombia. Durante más de 10 años he construido productos de fintech, banca móvil y software empresarial: desde herramientas de geolocalización que usan más de un millón de personas al mes hasta una billetera blockchain que cofundé como CTO.",
            p2: "Hoy me enfoco en ingeniería de IA: diseñar agentes, pipelines RAG y el software de producción que los rodea. Soy fundador de Veqya, una plataforma de agentes de IA para pequeños negocios, y curso el Máster en Ingeniería Informática en la Universidad de Granada.",
            whatIDo: "Qué hago", howIWork: "Cómo trabajo", ctaTitle: "Trabajemos juntos", viewExperience: "Ver mi experiencia",
            focus: [
                { title: "Ingeniería de IA", text: "Agentes con LLMs, orquestación multiagente, tool calling y RAG, llevados a producción con evaluación, guardrails y políticas claras de uso de IA." },
                { title: "Arquitectura en producción", text: "Microservicios, arquitectura hexagonal y limpia, CI/CD e infraestructura como código en AWS y GCP." },
                { title: "Móvil y full stack", text: "Entrega de punta a punta, desde la API y la base de datos hasta la app en la tienda, con React Native, NestJS, Next.js y Python." },
                { title: "Liderazgo técnico", text: "Formar y mentorear equipos multidisciplinarios, de hasta 10 personas como CTO, con entrega ágil y calidad medible." },
            ],
            principles: [
                { title: "Soluciones simples a problemas complejos", text: "Un sistema complejo no necesita código complejo. Prefiero diseños que otros puedan entender, probar y extender." },
                { title: "Medir lo que importa", text: "Rendimiento, fraude, tiempos de respuesta, defectos: me gusta el trabajo que termina en un número que a alguien le importa." },
                { title: "Equipos antes que héroes", text: "Los grandes productos salen de grandes equipos. Invierto en mentoría, revisiones y estándares compartidos." },
                { title: "La tecnología sirve al negocio", text: "Cada decisión técnica debe acercar un objetivo de producto o de negocio." },
            ],
        },
        notFound: { title: "Página no encontrada", text: "No encontramos esta página.", back: "Volver al inicio" },
    },
} as const;

export function t(lang: Lang) {
    return ui[lang];
}

/** Prefix an internal path with the language segment. */
export function localePath(lang: Lang, path = ""): string {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    const clean = path.replace(/^\//, "");
    return lang === "es" ? `${base}/es/${clean}` : `${base}/${clean}`;
}

/** Path of the same page in the other language. */
export function alternatePath(lang: Lang, pathname: string): string {
    const stripped = pathname.replace(/^\/es(\/|$)/, "/");
    return lang === "es" ? stripped : `/es${stripped === "/" ? "/" : stripped}`;
}
