import type { Lang } from "../i18n";

type L = { en: string; es: string };

export interface Job {
    title: L;
    company: L;
    date: L;
    bullets: L[];
    tags?: string[];
}

export const jobs: Job[] = [
    {
        title: { en: "Founder & AI Engineer", es: "Fundador y AI Engineer" },
        company: { en: "Veqya", es: "Veqya" },
        date: { en: "Jan 2026 – Present", es: "Ene 2026 – Hoy" },
        tags: ["Python", "LLMs", "AI Agents", "NestJS", "Next.js", "n8n", "PostgreSQL"],
        bullets: [
            { en: "Building an AI agent platform that runs appointments, schedules and sales for small businesses (clinics, salons, sports venues).", es: "Construyo una plataforma de agentes de IA que gestiona citas, agendas y ventas de pequeños negocios (consultorios, salones de belleza, canchas)." },
            { en: "Designed the multi-agent orchestration: agent harness, tool calling, AI usage policies, guardrails and customer segmentation.", es: "Diseñé la orquestación multiagente: harness de agentes, tool calling, políticas de uso de IA, guardrails y segmentación de clientes." },
        ],
    },
    {
        title: { en: "Tech Lead & Senior Software Engineer", es: "Tech Lead y Senior Software Engineer" },
        company: { en: "Amaris Consulting", es: "Amaris Consulting" },
        date: { en: "Sep 2024 – Present", es: "Sep 2024 – Hoy" },
        tags: ["TypeScript", "React Native", "NestJS", "LLMs", "GitHub Actions", "SonarQube"],
        bullets: [
            { en: "Femsa Salud, Cruz Verde Chile (Apr 2026 – Present): built an LLM shopping assistant with tool calling (tested, pending launch), a NestJS Backend for Frontend and SonarQube quality gates in CI/CD.", es: "Femsa Salud, Cruz Verde Chile (abr 2026 – hoy): construí un asistente de compras con LLM y tool calling (probado, por lanzar), un Backend for Frontend en NestJS y quality gates de SonarQube en CI/CD." },
            { en: "Cencosud (May 2025 – Feb 2026): ran the organization-wide SonarQube platform, onboarding 3,500+ repositories and advising 20+ teams.", es: "Cencosud (may 2025 – feb 2026): administré la plataforma de SonarQube de toda la organización, integré más de 3.500 repositorios y asesoré a más de 20 equipos." },
            { en: "Femsa Salud, Yza Mexico (Dec 2024 – May 2025): improved app performance by 30% and shipped 5+ core features for 100K+ users.", es: "Femsa Salud, Yza México (dic 2024 – may 2025): mejoré el rendimiento de la app en un 30% y entregué más de 5 funcionalidades clave para más de 100.000 usuarios." },
            { en: "Summa, Grupo Argos (Sep – Dec 2024): led 4 engineers and cut response times by about 45%.", es: "Summa, Grupo Argos (sep – dic 2024): lideré a 4 ingenieros y reduje los tiempos de respuesta en cerca de un 45%." },
        ],
    },
    {
        title: { en: "React Native Lead", es: "React Native Lead" },
        company: { en: "Banco PagaTodo (Mexico, remote)", es: "Banco PagaTodo (México, remoto)" },
        date: { en: "Feb 2023 – Feb 2024", es: "Feb 2023 – Feb 2024" },
        tags: ["React Native", "Redux", "Spring Boot", "Azure DevOps"],
        bullets: [
            { en: "Led a team of 4 engineers in Colombia on the ObtenMas and PagaTodo mobile banking apps.", es: "Lideré un equipo de 4 ingenieros en Colombia en las apps de banca móvil ObtenMas y PagaTodo." },
            { en: "Upgraded React Native and applied Clean Architecture: 45% smaller app, 75% better performance test results.", es: "Actualicé React Native y apliqué Clean Architecture: app un 45% más liviana y pruebas de rendimiento un 75% mejores." },
        ],
    },
    {
        title: { en: "Lecturer, Systems Engineering (part-time)", es: "Docente de Ingeniería de Sistemas (medio tiempo)" },
        company: { en: "Corporación Universitaria Autónoma de Nariño", es: "Corporación Universitaria Autónoma de Nariño" },
        date: { en: "Feb 2022 – May 2023", es: "Feb 2022 – May 2023" },
        bullets: [
            { en: "Taught Data Structures, Programming Fundamentals, Databases, Software Engineering I & II and Programming Languages.", es: "Dicté Estructuras de Datos, Fundamentos de Programación, Bases de Datos, Ingeniería de Software I y II y Lenguajes de Programación." },
        ],
    },
    {
        title: { en: "Co-Founder & CTO", es: "Cofundador y CTO" },
        company: { en: "Monetta", es: "Monetta" },
        date: { en: "Jun 2021 – Feb 2023", es: "Jun 2021 – Feb 2023" },
        tags: ["TypeScript", "NestJS", "React Native", "Next.js", "FastAPI", "AWS", "Polygon"],
        bullets: [
            { en: "Built the engineering department from scratch: 6 developers, 2 QA engineers and 2 DevOps engineers.", es: "Armé el área de ingeniería desde cero: 6 desarrolladores, 2 QA y 2 DevOps." },
            { en: "Delivered 2 mobile apps and 1 CMS; closed 6 strategic partnerships that added 3 product modules for 1,000+ users.", es: "Entregué 2 apps móviles y 1 CMS; cerré 6 alianzas estratégicas que sumaron 3 módulos de producto para más de 1.000 usuarios." },
            { en: "Wrote 20+ engineering policies and introduced Agile practices: +45% throughput, −25% defects.", es: "Escribí más de 20 políticas de ingeniería e implanté prácticas ágiles: +45% de productividad y −25% de defectos." },
        ],
    },
    {
        title: { en: "Technical Lead (freelance)", es: "Technical Lead (freelance)" },
        company: { en: "Cetoco — clients Davivienda, Daviplata, OWO", es: "Cetoco — clientes Davivienda, Daviplata, OWO" },
        date: { en: "2019 – 2024", es: "2019 – 2024" },
        tags: ["JavaScript", "Node.js", "AngularJS", "Python", "FastAPI", "Flutter", "Google Maps API"],
        bullets: [
            { en: "Built Daviplata's official geolocation map in 8 months, then owned support and features: 15K+ points, 40% faster load, 1M+ monthly users.", es: "Construí el mapa oficial de geolocalización de Daviplata en 8 meses y luego me encargué del soporte y las nuevas funcionalidades: más de 15.000 puntos, carga un 40% más rápida y más de 1 millón de usuarios mensuales." },
            { en: "Built Davivienda's branch and ATM locator (2,500+ points, 99.9% uptime) and a geolocation CMS serving 2M+ queries per month.", es: "Construí el localizador de oficinas y cajeros de Davivienda (más de 2.500 puntos, 99,9% de disponibilidad) y un CMS de geolocalización con más de 2 millones de consultas al mes." },
            { en: "OWO (Oct 2021 – Oct 2022): led 3 developers; integrated 2 payment gateways and 5 providers.", es: "OWO (oct 2021 – oct 2022): lideré a 3 desarrolladores e integré 2 pasarelas de pago y 5 proveedores." },
        ],
    },
    {
        title: { en: "Mobile Technical Lead", es: "Mobile Technical Lead" },
        company: { en: "reconoSER ID", es: "reconoSER ID" },
        date: { en: "Oct 2019 – Nov 2021", es: "Oct 2019 – Nov 2021" },
        tags: ["Kotlin", "Swift", "C# / .NET Core", "Flutter", "Biometrics"],
        bullets: [
            { en: "Led 5 developers and 2 QA engineers building the mobile identity-verification SDK sold to enterprise clients.", es: "Lideré a 5 desarrolladores y 2 QA en el SDK móvil de verificación de identidad que la empresa vende a sus clientes." },
            { en: "Anti-spoofing (liveness detection) project that helped clients cut e-commerce fraud by up to 85%.", es: "Proyecto anti-spoofing (detección de vida) que ayudó a los clientes a reducir el fraude en e-commerce hasta en un 85%." },
        ],
    },
    {
        title: { en: "Lead Backend Engineer", es: "Lead Backend Engineer" },
        company: { en: "SuRed", es: "SuRed" },
        date: { en: "Feb 2019 – Oct 2019", es: "Feb 2019 – Oct 2019" },
        tags: ["Java", "Spring Boot", "Node.js", "AWS", "PostgreSQL"],
        bullets: [
            { en: "Led a new payment gateway for 10,000+ customers, cutting processing time by 40%.", es: "Lideré una nueva pasarela de pagos para más de 10.000 clientes y reduje el tiempo de procesamiento en un 40%." },
            { en: "Introduced hexagonal architecture and clean code, reducing duplicate code by 25%.", es: "Introduje arquitectura hexagonal y código limpio, y reduje el código duplicado en un 25%." },
        ],
    },
    {
        title: { en: "Frontend Lead", es: "Frontend Lead" },
        company: { en: "Adatec", es: "Adatec" },
        date: { en: "Nov 2016 – Feb 2019", es: "Nov 2016 – Feb 2019" },
        tags: ["JavaScript", "Angular", "Sencha Touch", "Django", ".NET Core"],
        bullets: [
            { en: "Migrated desktop sales software to a web platform, increasing customer access by 85%.", es: "Migré un software de ventas de escritorio a una plataforma web y aumenté el acceso de clientes en un 85%." },
            { en: "Delivered 5 modules for the R-Sales field-sales app used by 200+ field workers.", es: "Entregué 5 módulos de la app de ventas en campo R-Sales, usada por más de 200 vendedores." },
        ],
    },
];

export const education = [
    { title: { en: "M.Sc. in Computer Engineering", es: "Máster en Ingeniería Informática" }, company: { en: "Universidad de Granada, Spain", es: "Universidad de Granada, España" }, date: { en: "Sep 2025 – Present", es: "Sep 2025 – Hoy" }, text: { en: "Deep learning and machine learning projects, distributed systems and software architecture.", es: "Proyectos de deep learning y machine learning, sistemas distribuidos y arquitectura de software." } },
    { title: { en: "B.Sc. in Systems Engineering", es: "Ingeniería de Sistemas" }, company: { en: "Universidad del Valle, Colombia", es: "Universidad del Valle, Colombia" }, date: { en: "2011 – 2017", es: "2011 – 2017" }, text: { en: "Software development, algorithms and system design.", es: "Desarrollo de software, algoritmos y diseño de sistemas." } },
    { title: { en: "Certificate in Information Security", es: "Diplomado en Seguridad de la Información" }, company: { en: "Universidad ICESI, Colombia", es: "Universidad ICESI, Colombia" }, date: { en: "2018", es: "2018" }, text: { en: "", es: "" } },
];

export const skills = [
    { group: { en: "AI & LLMs", es: "IA y LLMs" }, items: ["AI Agents", "Multi-agent orchestration", "Tool calling", "RAG", "Embeddings / pgvector", "Prompt engineering", "Guardrails & AI policies", "OpenAI API", "Google Gemini", "LangChain", "AWS Bedrock", "n8n"] },
    { group: { en: "ML & Computer Vision", es: "ML y visión por computador" }, items: ["Deep learning", "Neural networks", "PyTorch", "OpenCV", "Facial recognition", "Liveness detection", "AWS Rekognition"] },
    { group: { en: "Languages", es: "Lenguajes" }, items: ["Python", "TypeScript", "JavaScript", "Java", "C#", "Kotlin", "Swift", "Dart"] },
    { group: { en: "Backend & Frontend", es: "Backend y frontend" }, items: ["NestJS", "Node.js", "FastAPI", "Spring Boot", ".NET Core", "React", "Next.js", "React Native", "Flutter", "Angular"] },
    { group: { en: "Cloud & DevOps", es: "Cloud y DevOps" }, items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions", "SonarQube"] },
    { group: { en: "Architecture & Leadership", es: "Arquitectura y liderazgo" }, items: ["System design", "Hexagonal / Clean architecture", "Microservices", "Technical leadership", "Mentoring", "Agile / Scrum"] },
];

export const pick = (l: L, lang: Lang) => l[lang];
