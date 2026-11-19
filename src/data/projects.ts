export type ProjectCategory = "ai" | "fintech" | "enterprise";

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    role?: string;
    period?: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    image?: string;
    imageClass?: string;
    metrics?: Array<{
        value: string;
        label: string;
    }>;
}

export const categoryLabels: Record<ProjectCategory, string> = {
    ai: "AI Engineering",
    fintech: "Fintech & Mobile Banking",
    enterprise: "Enterprise & Platforms",
};

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
        metrics: [
            { value: "Agents", label: "Multi-agent orchestration" },
            { value: "5", label: "Business verticals" },
            { value: "2026", label: "Launching" }
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    }
];
