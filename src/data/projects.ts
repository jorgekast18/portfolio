import type { Lang } from "../i18n";

export type ProjectCategory = "ai" | "fintech" | "enterprise";

export interface CaseStudy {
    context: string;
    contribution: string[];
    results: string[];
}

interface Translatable {
    role?: string;
    period?: string;
    description: string;
    metricLabels?: string[];
    caseStudy?: CaseStudy;
}

export interface Project extends Translatable {
    id: string;
    title: string;
    category: ProjectCategory;
    tech: string[];
    github?: string;
    demo?: string;
    image?: string;
    imageClass?: string;
    metrics?: Array<{ value: string; label: string }>;
    es?: Partial<Translatable>;
}

export const projects: Project[] = [
    // ---------- AI Engineering ----------
    {
        id: "veqya",
        title: "Veqya",
        category: "ai",
        role: "Founder & AI Engineer",
        period: "Jan 2026 – Present · Pre-launch",
        description: "AI agent platform that runs appointments, schedules and sales for small businesses: medical and dental clinics, beauty salons, nail spas and sports-court bookings. I designed the multi-agent orchestration — the agent harness, tool calling against calendars and booking flows, AI usage policies, guardrails and customer segmentation.",
        tech: ["Python", "LLMs", "AI Agents", "Tool Calling", "NestJS", "Next.js", "n8n", "PostgreSQL"],
        image: "veqya.png",
        imageClass: "object-contain",
        metrics: [
            { value: "Agents", label: "Multi-agent orchestration" },
            { value: "5", label: "Business verticals" },
            { value: "2026", label: "Launching" }
        ],
        caseStudy: {
            context: "Small businesses such as clinics, beauty salons and sports venues lose bookings and sales when nobody answers messages in time, and most still manage their agenda by hand.",
            contribution: [
                "Designed a multi-agent architecture where specialized agents handle bookings, schedules and sales conversations.",
                "Built the agent harness and tool calling against calendars and booking flows, so agents act on real availability.",
                "Defined AI usage policies, guardrails and customer segmentation to keep conversations safe and on-brand.",
                "Built the platform with NestJS, Next.js, Python, n8n and PostgreSQL.",
            ],
            results: [
                "One platform adapted to 5 business verticals: medical and dental clinics, beauty salons, nail spas and sports-court bookings.",
                "Pre-launch in 2026.",
            ],
        },
        es: {
            role: "Fundador y AI Engineer",
            period: "Ene 2026 – Hoy · Por lanzar",
            description: "Plataforma de agentes de IA que gestiona citas, agendas y ventas de pequeños negocios: consultorios médicos y odontológicos, salones de belleza, spas de uñas y reserva de canchas. Diseñé la orquestación multiagente: el harness de agentes, el tool calling contra calendarios y flujos de reserva, las políticas de uso de IA, los guardrails y la segmentación de clientes.",
            metricLabels: ["Orquestación multiagente", "Verticales de negocio", "Lanzamiento"],
            caseStudy: {
                context: "Los pequeños negocios, como consultorios, salones de belleza y canchas, pierden reservas y ventas cuando nadie responde a tiempo, y la mayoría todavía maneja su agenda a mano.",
                contribution: [
                    "Diseñé una arquitectura multiagente donde agentes especializados atienden reservas, agendas y conversaciones de venta.",
                    "Construí el harness de agentes y el tool calling contra calendarios y flujos de reserva, para que los agentes actúen sobre disponibilidad real.",
                    "Definí políticas de uso de IA, guardrails y segmentación de clientes para mantener las conversaciones seguras y alineadas con cada marca.",
                    "Construí la plataforma con NestJS, Next.js, Python, n8n y PostgreSQL.",
                ],
                results: [
                    "Una sola plataforma adaptada a 5 verticales: consultorios médicos y odontológicos, salones de belleza, spas de uñas y reserva de canchas.",
                    "Lanzamiento previsto en 2026.",
                ],
            },
        },
    },
    {
        id: "shopping-assistant",
        title: "LLM Shopping Assistant",
        category: "ai",
        role: "Tech Lead · Amaris Consulting for Femsa Salud",
        period: "2026 · Developed and tested, pending launch",
        description: "Conversational assistant with tool calling inside a pharmacy retail app, guiding users through product discovery and purchases. Built on top of a NestJS Backend for Frontend with quality gates enforced in CI/CD.",
        tech: ["LLMs", "Tool Calling", "NestJS", "React Native", "TypeScript", "Bitrise"],
        image: "femsa.png",
        imageClass: "object-contain",
        es: {
            role: "Tech Lead · Amaris Consulting para Femsa Salud",
            period: "2026 · Desarrollado y probado, por lanzar",
            description: "Asistente conversacional con tool calling dentro de una app de farmacias, que guía a los usuarios en la búsqueda de productos y en sus compras. Construido sobre un Backend for Frontend en NestJS con quality gates en CI/CD.",
        },
    },
    {
        id: "payment-gateway",
        title: "Payment Gateway Product",
        category: "ai",
        role: "Personal project · Architecture showcase",
        period: "2026",
        description: "Production-style checkout that charges cards through an external payment gateway. NestJS API with hexagonal architecture and Railway Oriented use cases, React 19 SPA, every decision recorded as an ADR, and infrastructure as code with Terraform on AWS (App Runner, RDS, S3, CloudFront).",
        tech: ["NestJS", "React", "TypeScript", "Terraform", "AWS", "PostgreSQL", "Jest"],
        github: "https://github.com/jorgekast18/payment-gateway-product",
        demo: "https://d2d709ahd163ox.cloudfront.net",
        metrics: [
            { value: "97%+", label: "API test coverage" },
            { value: "IaC", label: "Terraform on AWS" },
            { value: "ADRs", label: "Documented decisions" }
        ],
        caseStudy: {
            context: "A complete product checkout — product, card and delivery, summary, final status — that charges a credit card through an external payment gateway and updates stock on the server.",
            contribution: [
                "Hexagonal architecture (ports and adapters): business logic lives in the domain and application layers, never in controllers.",
                "Railway Oriented use cases that return a typed result and stop at the first expected failure.",
                "Payment provider behind a vendor-neutral port; every secret, including the integrity signature, stays on the server.",
                "Money stored as integer cents; card data reduced to brand and last four digits, never persisted.",
                "Refresh-resilient React 19 client and infrastructure as code with Terraform on AWS (App Runner, RDS, S3, CloudFront).",
            ],
            results: [
                "Live demo with Swagger API documentation.",
                "Test coverage enforced above 80% in both apps; the API reaches 97%+ statements.",
                "Every architectural decision recorded as an ADR.",
            ],
        },
        es: {
            role: "Proyecto personal · Muestra de arquitectura",
            description: "Checkout con estándares de producción que cobra tarjetas a través de una pasarela de pagos externa. API en NestJS con arquitectura hexagonal y casos de uso Railway Oriented, SPA en React 19, cada decisión registrada como ADR e infraestructura como código con Terraform en AWS (App Runner, RDS, S3, CloudFront).",
            metricLabels: ["Cobertura de pruebas API", "Terraform en AWS", "Decisiones documentadas"],
            caseStudy: {
                context: "Un checkout completo (producto, tarjeta y envío, resumen y estado final) que cobra una tarjeta de crédito mediante una pasarela de pagos externa y actualiza el stock en el servidor.",
                contribution: [
                    "Arquitectura hexagonal (puertos y adaptadores): la lógica de negocio vive en las capas de dominio y aplicación, nunca en los controladores.",
                    "Casos de uso Railway Oriented que devuelven un resultado tipado y se detienen en el primer fallo esperado.",
                    "Proveedor de pagos detrás de un puerto agnóstico; todos los secretos, incluida la firma de integridad, se quedan en el servidor.",
                    "Montos guardados como centavos enteros; de la tarjeta solo se guardan la marca y los últimos cuatro dígitos.",
                    "Cliente en React 19 resistente a recargas e infraestructura como código con Terraform en AWS (App Runner, RDS, S3, CloudFront).",
                ],
                results: [
                    "Demo en vivo con documentación de la API en Swagger.",
                    "Cobertura de pruebas obligatoria por encima del 80% en ambas apps; la API supera el 97%.",
                    "Cada decisión de arquitectura documentada como ADR.",
                ],
            },
        },
    },

    // ---------- Enterprise ----------
    {
        id: "femsa",
        title: "Femsa Salud (Yza & Cruz Verde)",
        category: "enterprise",
        role: "Tech Lead · Amaris Consulting",
        period: "Dec 2024 – Present",
        description: "React Native apps for two pharmacy chains in Mexico and Chile. Improved app performance by 30%, shipped 5+ core features, built a NestJS Backend for Frontend and added SonarQube quality gates to the Bitrise pipeline.",
        tech: ["React Native", "TypeScript", "NestJS", "Contentful", "Bitrise", "SonarQube"],
        image: "femsa.png",
        imageClass: "object-contain",
        metrics: [
            { value: "30%", label: "Performance gain" },
            { value: "5+", label: "Core features" },
            { value: "100K+", label: "Users" }
        ],
        caseStudy: {
            context: "Femsa Salud runs pharmacy chains across Latin America. Its Yza (Mexico) and Cruz Verde (Chile) mobile apps needed better performance, new features and stronger quality controls.",
            contribution: [
                "Optimized performance and shipped core features in the Yza app (Mexico).",
                "Built a NestJS Backend for Frontend for the Cruz Verde app (Chile).",
                "Added SonarQube quality gates to the Bitrise CI/CD pipeline.",
                "Built an LLM shopping assistant with tool calling that guides users through purchases (tested, pending launch).",
            ],
            results: [
                "30% better app performance.",
                "5+ core features shipped for 100K+ users.",
            ],
        },
        es: {
            role: "Tech Lead · Amaris Consulting",
            period: "Dic 2024 – Hoy",
            description: "Apps en React Native para dos cadenas de farmacias en México y Chile. Mejoré el rendimiento en un 30%, entregué más de 5 funcionalidades clave, construí un Backend for Frontend en NestJS y agregué quality gates de SonarQube al pipeline de Bitrise.",
            metricLabels: ["Mejor rendimiento", "Funcionalidades clave", "Usuarios"],
            caseStudy: {
                context: "Femsa Salud opera cadenas de farmacias en Latinoamérica. Sus apps de Yza (México) y Cruz Verde (Chile) necesitaban mejor rendimiento, nuevas funcionalidades y controles de calidad más fuertes.",
                contribution: [
                    "Optimicé el rendimiento y entregué funcionalidades clave en la app de Yza (México).",
                    "Construí un Backend for Frontend en NestJS para la app de Cruz Verde (Chile).",
                    "Agregué quality gates de SonarQube al pipeline de CI/CD en Bitrise.",
                    "Construí un asistente de compras con LLM y tool calling que guía a los usuarios (probado, por lanzar).",
                ],
                results: [
                    "Rendimiento de la app un 30% mejor.",
                    "Más de 5 funcionalidades clave para más de 100.000 usuarios.",
                ],
            },
        },
    },
    {
        id: "cencosud",
        title: "Cencosud",
        category: "enterprise",
        role: "Software Engineer · Amaris Consulting",
        period: "May 2025 – Feb 2026",
        description: "Ran the organization-wide SonarQube platform: onboarded 3,500+ repositories, built GitHub Actions workflows that feed quality gates and Tech Lead reports, and advised 20+ teams on static analysis and code quality.",
        tech: ["SonarQube", "GitHub Actions", "DevSecOps", "Metabase", "AWS Bedrock"],
        image: "cenco.png",
        imageClass: "object-contain",
        metrics: [
            { value: "3,500+", label: "Repositories" },
            { value: "20+", label: "Teams advised" },
            { value: "10+", label: "Core products" }
        ],
        es: {
            role: "Software Engineer · Amaris Consulting",
            period: "May 2025 – Feb 2026",
            description: "Administré la plataforma de SonarQube de toda la organización: integré más de 3.500 repositorios, construí workflows de GitHub Actions que alimentan quality gates y reportes para Tech Leads, y asesoré a más de 20 equipos en análisis estático y calidad de código.",
            metricLabels: ["Repositorios", "Equipos asesorados", "Productos clave"],
        },
    },
    {
        id: "summa",
        title: "Summa (Grupo Argos)",
        category: "enterprise",
        role: "Tech Lead · Amaris Consulting",
        period: "Sep 2024 – Dec 2024",
        description: "Led 4 engineers on the Fundación Argos scholarship platform: redesigned the architecture, cut response times by about 45% and built new web services for candidate approval.",
        tech: ["NestJS", "AngularJS", "Software Architecture", "Azure DevOps"],
        image: "summa.jpg",
        imageClass: "object-contain bg-white",
        metrics: [
            { value: "4", label: "Engineers led" },
            { value: "~45%", label: "Faster responses" },
            { value: "5", label: "Modules in prod" }
        ],
        es: {
            period: "Sep 2024 – Dic 2024",
            description: "Lideré a 4 ingenieros en la plataforma de becas de la Fundación Argos: rediseñé la arquitectura, reduje los tiempos de respuesta en cerca de un 45% y construí nuevos servicios web para la aprobación de candidatos.",
            metricLabels: ["Ingenieros liderados", "Respuestas más rápidas", "Módulos en producción"],
        },
    },
    {
        id: "monetta",
        title: "Monetta",
        category: "fintech",
        role: "Co-Founder & CTO",
        period: "Jun 2021 – Feb 2023",
        demo: "https://monetta.es",
        description: "Blockchain digital wallet with a native token on Polygon. I built the engineering department from scratch, delivered 2 mobile apps and a CMS, closed 6 strategic partnerships and wrote 20+ engineering policies.",
        tech: ["TypeScript", "NestJS", "React Native", "Next.js", "FastAPI", "AWS", "PostgreSQL", "Polygon"],
        image: "monetta.png",
        imageClass: "object-contain",
        metrics: [
            { value: "10", label: "People in engineering" },
            { value: "+45%", label: "Team throughput" },
            { value: "1,000+", label: "Users" }
        ],
        caseStudy: {
            context: "Monetta is a digital wallet with a native token on the Polygon network. As co-founder and CTO, I had to build the technology area from zero while shipping the product.",
            contribution: [
                "Built the engineering department from scratch: 6 developers, 2 QA engineers and 2 DevOps engineers.",
                "Defined the architecture and delivered 2 mobile apps and 1 CMS on NestJS, React Native, Next.js, FastAPI and AWS.",
                "Wrote 20+ engineering policies: information security, backups, secure development, repositories and databases.",
                "Introduced Agile practices and closed 6 strategic partnerships.",
            ],
            results: [
                "+45% team throughput and −25% defects.",
                "6 partnerships that added 3 product modules for 1,000+ users.",
            ],
        },
        es: {
            role: "Cofundador y CTO",
            period: "Jun 2021 – Feb 2023",
            description: "Billetera digital blockchain con token nativo en Polygon. Armé el área de ingeniería desde cero, entregué 2 apps móviles y un CMS, cerré 6 alianzas estratégicas y escribí más de 20 políticas de ingeniería.",
            metricLabels: ["Personas en ingeniería", "Productividad del equipo", "Usuarios"],
            caseStudy: {
                context: "Monetta es una billetera digital con token nativo en la red Polygon. Como cofundador y CTO, tuve que construir el área de tecnología desde cero mientras sacábamos el producto.",
                contribution: [
                    "Armé el área de ingeniería desde cero: 6 desarrolladores, 2 QA y 2 DevOps.",
                    "Definí la arquitectura y entregué 2 apps móviles y 1 CMS con NestJS, React Native, Next.js, FastAPI y AWS.",
                    "Escribí más de 20 políticas de ingeniería: seguridad de la información, backups, desarrollo seguro, repositorios y bases de datos.",
                    "Implanté prácticas ágiles y cerré 6 alianzas estratégicas.",
                ],
                results: [
                    "+45% de productividad del equipo y −25% de defectos.",
                    "6 alianzas que sumaron 3 módulos de producto para más de 1.000 usuarios.",
                ],
            },
        },
    },

    // ---------- Fintech ----------
    {
        id: "obtenmas",
        title: "ObtenMas & PagaTodo",
        category: "fintech",
        role: "React Native Lead · Banco PagaTodo",
        period: "Feb 2023 – Feb 2024",
        description: "Led a team of 4 engineers in Colombia on two mobile banking apps (payments, transfers, virtual cards). Upgraded React Native and applied Clean Architecture in ObtenMas.",
        tech: ["React Native", "TypeScript", "Redux", "Spring Boot", "Azure DevOps"],
        image: "obtenmas.webp",
        imageClass: "object-cover",
        demo: "https://obtenmas.com",
        metrics: [
            { value: "45%", label: "Smaller app" },
            { value: "75%", label: "Better perf. tests" },
            { value: "100K+", label: "Users" }
        ],
        es: {
            description: "Lideré un equipo de 4 ingenieros en Colombia en dos apps de banca móvil (pagos, transferencias y tarjetas virtuales). Actualicé React Native y apliqué Clean Architecture en ObtenMas.",
            metricLabels: ["App más liviana", "Mejores pruebas de rendimiento", "Usuarios"],
        },
    },
    {
        id: "daviplata",
        title: "Daviplata Map",
        category: "fintech",
        role: "Technical Lead · Cetoco (freelance)",
        period: "2019 – 2024",
        description: "Official geolocation map for Daviplata, Colombia's largest digital wallet. Built in 8 months, then owned support and new features: a custom clustering engine and filtering for 15,000+ service points.",
        tech: ["JavaScript", "AngularJS", "Google Maps API", "REST APIs"],
        image: "daviplata_map.png",
        imageClass: "object-contain",
        metrics: [
            { value: "15K+", label: "Points mapped" },
            { value: "40%", label: "Faster load" },
            { value: "1M+", label: "Monthly users" }
        ],
        caseStudy: {
            context: "Daviplata is Colombia's largest digital wallet. Its users needed a reliable way to find the nearest point to deposit, withdraw or pay among more than 15,000 locations nationwide.",
            contribution: [
                "Led the build of the official geolocation map as Technical Lead, freelancing through Cetoco, and shipped it in 8 months.",
                "Designed a custom clustering engine and a filtering system so the map stays fast with thousands of points.",
                "Owned support and new features requested by the bank until 2024.",
            ],
            results: [
                "40% faster map load.",
                "15,000+ service points mapped for 1M+ monthly users.",
            ],
        },
        es: {
            role: "Technical Lead · Cetoco (freelance)",
            description: "Mapa oficial de geolocalización de Daviplata, la billetera digital más grande de Colombia. Lo construí en 8 meses y luego me encargué del soporte y de nuevas funcionalidades: un motor de clustering propio y filtros para más de 15.000 puntos de servicio.",
            metricLabels: ["Puntos mapeados", "Carga más rápida", "Usuarios mensuales"],
            caseStudy: {
                context: "Daviplata es la billetera digital más grande de Colombia. Sus usuarios necesitaban una forma confiable de encontrar el punto más cercano para depositar, retirar o pagar entre más de 15.000 ubicaciones en todo el país.",
                contribution: [
                    "Lideré la construcción del mapa oficial de geolocalización como Technical Lead, de forma freelance con Cetoco, y lo entregué en 8 meses.",
                    "Diseñé un motor de clustering propio y un sistema de filtros para que el mapa siga siendo rápido con miles de puntos.",
                    "Me encargué del soporte y de las nuevas funcionalidades que pidió el banco hasta 2024.",
                ],
                results: [
                    "Carga del mapa un 40% más rápida.",
                    "Más de 15.000 puntos de servicio para más de 1 millón de usuarios mensuales.",
                ],
            },
        },
    },
    {
        id: "davivienda",
        title: "Davivienda Map & CMS",
        category: "fintech",
        role: "Technical Lead · Cetoco (freelance)",
        period: "2019 – 2024",
        description: "Customer-facing branch and ATM locator for one of Colombia's top 3 banks, plus a private geolocation CMS with real-time sync, role-based access and bulk import.",
        tech: ["JavaScript", "Node.js", "AngularJS", "PostgreSQL", "Google Maps API"],
        image: "davivienda_map.png",
        imageClass: "object-contain",
        metrics: [
            { value: "2,500+", label: "Branches & ATMs" },
            { value: "2M+", label: "Queries / month" },
            { value: "99.9%", label: "Uptime" }
        ],
        es: {
            description: "Localizador de oficinas y cajeros para uno de los 3 bancos más grandes de Colombia, más un CMS privado de geolocalización con sincronización en tiempo real, control de acceso por roles y carga masiva.",
            metricLabels: ["Oficinas y cajeros", "Consultas al mes", "Disponibilidad"],
        },
    },
    {
        id: "owo",
        title: "OWO App",
        category: "fintech",
        role: "Technical Lead · Cetoco (freelance)",
        period: "Oct 2021 – Oct 2022",
        description: "Mobile app and web CMS for bill payments, entertainment PINs and money transfers. Led 3 developers, integrated 2 payment gateways and 5 providers, and used AWS Rekognition for image-based verification.",
        tech: ["Python", "FastAPI", "Flutter", "React", "AWS", "MongoDB"],
        image: "owo.png",
        imageClass: "object-contain",
        demo: "https://owo.com.co",
        metrics: [
            { value: "3", label: "Developers led" },
            { value: "2", label: "Payment gateways" },
            { value: "5", label: "Providers" }
        ],
        es: {
            description: "App móvil y CMS web para pago de servicios, pines de entretenimiento y transferencias. Lideré a 3 desarrolladores, integré 2 pasarelas de pago y 5 proveedores, y usé AWS Rekognition para verificación por imagen.",
            metricLabels: ["Desarrolladores liderados", "Pasarelas de pago", "Proveedores"],
        },
    },
    {
        id: "reconoser",
        title: "Identity Verification SDK",
        category: "fintech",
        role: "Mobile Technical Lead · reconoSER ID",
        period: "Oct 2019 – Nov 2021",
        description: "Multiplatform SDK (Android, iOS, hybrid) for digital onboarding with OCR, facial recognition and liveness detection. The anti-spoofing project helped clients cut e-commerce fraud by up to 85%.",
        tech: ["Kotlin", "Swift", "C# / .NET Core", "Flutter", "Biometrics", "Computer Vision"],
        image: "reconoser.png",
        imageClass: "object-contain",
        metrics: [
            { value: "85%", label: "Less fraud" },
            { value: "30K+", label: "Users verified" },
            { value: "3+", label: "Financial institutions" }
        ],
        caseStudy: {
            context: "reconoSER ID sells digital onboarding to financial institutions in Latin America. Its clients needed to verify identities remotely and stop impersonation fraud in e-commerce.",
            contribution: [
                "Led 5 developers and 2 QA engineers building the company's core product: a multiplatform identity-verification SDK for Android, iOS and hybrid apps.",
                "Integrated OCR for documents and facial recognition for identity matching.",
                "Delivered an anti-spoofing (liveness detection) project and 10 biometric anti-fraud solutions.",
            ],
            results: [
                "Up to 85% less e-commerce fraud for clients.",
                "30K+ users verified across 3+ financial institutions.",
            ],
        },
        es: {
            role: "Mobile Technical Lead · reconoSER ID",
            period: "Oct 2019 – Nov 2021",
            description: "SDK multiplataforma (Android, iOS e híbrido) para onboarding digital con OCR, reconocimiento facial y detección de vida. El proyecto anti-spoofing ayudó a los clientes a reducir el fraude en e-commerce hasta en un 85%.",
            metricLabels: ["Menos fraude", "Usuarios verificados", "Entidades financieras"],
            caseStudy: {
                context: "reconoSER ID vende onboarding digital a entidades financieras de Latinoamérica. Sus clientes necesitaban verificar identidades a distancia y frenar el fraude por suplantación en e-commerce.",
                contribution: [
                    "Lideré a 5 desarrolladores y 2 QA en el producto principal de la empresa: un SDK multiplataforma de verificación de identidad para Android, iOS y apps híbridas.",
                    "Integré OCR de documentos y reconocimiento facial para validar la identidad.",
                    "Entregué un proyecto anti-spoofing (detección de vida) y 10 soluciones biométricas contra el fraude.",
                ],
                results: [
                    "Hasta 85% menos fraude en e-commerce para los clientes.",
                    "Más de 30.000 usuarios verificados en más de 3 entidades financieras.",
                ],
            },
        },
    },
    {
        id: "sured",
        title: "SuRed Payment Gateway",
        category: "fintech",
        role: "Lead Backend Engineer · SuRed",
        period: "Feb 2019 – Oct 2019",
        description: "New payment gateway for a nationwide money-transfer network. Introduced hexagonal architecture and clean code, reducing duplicate code by 25%.",
        tech: ["Java", "Spring Boot", "Node.js", "AWS", "PostgreSQL"],
        image: "sured.png",
        imageClass: "object-contain",
        demo: "https://www.sured.com.co",
        metrics: [
            { value: "40%", label: "Faster processing" },
            { value: "10K+", label: "Customers" },
            { value: "50+", label: "Cities" }
        ],
        es: {
            description: "Nueva pasarela de pagos para una red nacional de giros. Introduje arquitectura hexagonal y código limpio, y reduje el código duplicado en un 25%.",
            metricLabels: ["Procesamiento más rápido", "Clientes", "Ciudades"],
        },
    },
    {
        id: "rsales",
        title: "R-Sales",
        category: "enterprise",
        role: "Frontend Lead · Adatec",
        period: "Nov 2016 – Feb 2019",
        description: "Migrated desktop sales software to a web platform and delivered an Android app and CMS for field sales teams: GPS route tracking, order scheduling and real-time reporting.",
        tech: ["JavaScript", "Angular", "Sencha Touch", "Python / Django", ".NET Core"],
        image: "adatec.png",
        imageClass: "object-contain",
        demo: "https://ventasremotas.com/#/signin",
        metrics: [
            { value: "200+", label: "Field workers" },
            { value: "85%", label: "More customer access" },
            { value: "5", label: "Modules delivered" }
        ],
        es: {
            period: "Nov 2016 – Feb 2019",
            description: "Migré un software de ventas de escritorio a una plataforma web y entregué una app Android y un CMS para equipos de ventas en campo: rutas con GPS, agenda de pedidos y reportes en tiempo real.",
            metricLabels: ["Vendedores en campo", "Más acceso de clientes", "Módulos entregados"],
        },
    }
];

/** Return the project with Spanish overrides applied when lang is "es". */
export function localizeProject(p: Project, lang: Lang): Project {
    if (lang !== "es" || !p.es) return p;
    const es = p.es;
    return {
        ...p,
        role: es.role ?? p.role,
        period: es.period ?? p.period,
        description: es.description ?? p.description,
        caseStudy: es.caseStudy ?? p.caseStudy,
        metrics: p.metrics?.map((m, i) => ({ ...m, label: es.metricLabels?.[i] ?? m.label })),
    };
}

export function getProjects(lang: Lang): Project[] {
    return projects.map((p) => localizeProject(p, lang));
}
