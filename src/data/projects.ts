export interface Project {
    title: string;
    role?: string;
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

export const projects: Project[] = [
    {
        title: "Summa (Grupo Argos)",
        role: "Expert Consultant & Tech Lead",
        description: "Led the full revitalization of the 'Becarios de Fundación Argos' scholarship platform. Redesigned the architecture and delivered innovative features for application workflows, dramatically accelerating critical selection and management processes.",
        tech: ["Software Architecture", "Technical Leadership", "Full-Stack Development"],
        image: "summa.jpg",
        imageClass: 'object-contain bg-white',
        metrics: [
            { value: "4", label: "Engineers Led" },
            { value: "5", label: "Modules in Prod" },
            { value: "100%", label: "Agile Delivery" }
        ]
    },
    {
        title: "Femsa Salud (Yza & Cruz Verde)",
        role: "Mobile Tech Lead",
        description: "Successfully deployed production-grade React Native applications for two major pharmacy chains (Yza and Cruz Verde). Shipped 5+ core business features and achieved a 30% performance boost across the entire mobile experience, ensuring a seamless and fast UX for hundreds of thousands of users.",
        tech: ["React Native", "Mobile Optimization", "Architecture", "CI/CD"],
        image: "femsa.png",
        imageClass: 'object-contain',
        metrics: [
            { value: "+5", label: "Core Features" },
            { value: "30%", label: "Performance Gain" },
            { value: "100K+", label: "Users Impacted" }
        ]
    },
    {
        title: "Cencosud",
        role: "Software Quality Consultant",
        description: "Administered and scaled SonarQube at the enterprise level, analyzing over 3,400 software projects. Positively impacted 20+ development teams and 10+ core products, drastically raising code quality standards and reducing technical debt across the entire organization.",
        tech: ["SonarQube", "DevSecOps", "Code Quality", "CI/CD"],
        image: "cenco.png",
        imageClass: 'object-contain',
        metrics: [
            { value: "+3.4K", label: "Projects Analyzed" },
            { value: "20+", label: "Teams Advised" },
            { value: "10+", label: "Core Products" }
        ]
    },
    {
        title: "Monetta Project",
        role: "Co‑founder & CTO",
        demo: 'https://monetta.es',
        description: "Built a blockchain-powered digital wallet with a native token on the Polygon network. Cross-platform ecosystem (Android, iOS, Web CMS). Led a team of 10 engineers, defined the entire system architecture, and applied cutting-edge design patterns that resulted in a highly scalable and reliable platform.",
        tech: ["TypeScript", "NestJS", "React", "React Native", "Redux", "PostgreSQL", "Polygon", "TailwindCSS"],
        image: "monetta.png",
        metrics: [
            { value: "10", label: "Engineers Led" },
            { value: "3", label: "Platforms" },
            { value: "50K+", label: "Daily Txns" }
        ],
        imageClass: 'object-contain'
    },
    {
        title: "ObtenMas App",
        role: "Technical Lead & Developer",
        description: "Geolocation-based banking app serving thousands of daily users to locate branches, ATMs, and financial services in real time. Optimized for high availability and sub-second response times at scale.",
        tech: ["JavaScript", "AngularJS", "Google Maps API", "CSS"],
        image: "obtenmas.webp",
        imageClass: 'object-cover',
        metrics: [
            { value: "10", label: "Engineers" },
            { value: "50K+", label: "Daily Txns" },
            { value: "99.9%", label: "Uptime" }
        ],
        demo: 'https://obtenmas.com'
    },
    {
        title: "PagaTodo App",
        role: "Technical Lead & Developer",
        description: "Led the development of a flagship mobile banking platform enabling bill payments, P2P transfers, virtual card issuance, and scheduled payments. Architected for high-volume secure transactions operating 24/7 with zero downtime.",
        tech: ["TypeScript", "React Native", "Redux", "RESTful APIs"],
        image: "pagatodo.png",
        imageClass: 'object-cover',
        metrics: [
            { value: "100K+", label: "Users" },
            { value: "24/7", label: "Availability" },
            { value: "4.5★", label: "Store Rating" }
        ],
        demo: 'https://www.pagatodo.com'
    },
    {
        title: "CMS Davivienda",
        role: "Technical Lead & Developer",
        description: "Built a full-featured private CMS to manage geolocation data for 500+ bank branches and ATM networks. The system included real-time CRUD operations, role-based access control, bulk data import, and an interactive map dashboard — processing over 2M queries per month.",
        tech: ["JavaScript", "Node.js", "AngularJS", "PostgreSQL", "Google Maps API"],
        image: "cms_davivienda.png",
        metrics: [
            { value: "500+", label: "Locations Managed" },
            { value: "Real-time", label: "Data Sync" },
            { value: "2M+", label: "Queries/mo" }
        ],
        imageClass: 'object-contain'
    },
    {
        title: "Daviplata Map",
        role: "Technical Lead & Developer",
        description: "Designed and deployed the official geolocation map for Daviplata — Colombia's largest digital wallet — enabling millions of users to locate 15,000+ deposit, withdrawal, and payment points nationwide. Built a custom clustering engine and filtering system that reduced map load times by 40%.",
        tech: ["JavaScript", "AngularJS", "Google Maps API", "RESTful APIs", "CSS"],
        image: "daviplata_map.png",
        imageClass: 'object-contain',
        metrics: [
            { value: "15K+", label: "Points Mapped" },
            { value: "40%", label: "Faster Load" },
            { value: "1M+", label: "Monthly Users" }
        ]
    },
    {
        title: "Davivienda Map",
        role: "Technical Lead & Developer",
        description: "Built the customer-facing branch and ATM locator for Davivienda, one of Colombia's top 3 banks. Integrated 500+ branches and 2,000+ ATMs with real-time service status, hours of operation, and turn-by-turn directions. Delivered a fully responsive solution used across web and mobile channels.",
        tech: ["JavaScript", "AngularJS", "Google Maps API", "RESTful APIs", "CSS"],
        image: "davivienda_map.png",
        imageClass: 'object-contain',
        metrics: [
            { value: "2,500+", label: "Points Mapped" },
            { value: "500+", label: "Branches" },
            { value: "99.9%", label: "Uptime" }
        ]
    },
    {
        title: "OWO App",
        role: "Project Manager & Lead Developer",
        description: "Led full end-to-end delivery of a mobile + CMS commission-based platform for recharges and bill payments. Defined architecture, enforced code quality standards, and managed a 5-person team. Delivered 2 weeks ahead of schedule with zero critical bugs post-launch.",
        tech: ["JavaScript", "AngularJS", "Node.js", "CSS"],
        image: "owo.png",
        imageClass: 'object-contain',
        metrics: [
            { value: "10K+", label: "Users" },
            { value: "5", label: "Team Members" },
            { value: "300+", label: "Daily Txns" }
        ],
        demo: 'https://owo.com.co'
    },
    {
        title: "Multiplatform SDK (Mobile & Cordova)",
        role: "Mobile Technical Lead",
        description: "Engineered a cross-platform SDK (Android, iOS, Cordova) powering digital onboarding services with face comparison and OCR integrations. Adopted by 3+ financial institutions across Latin America, verifying 30K+ users securely.",
        tech: ["Android", "iOS", "Cordova", "JavaScript", "Biometrics", "OCR"],
        image: "reconoser.png",
        metrics: [
            { value: "30K+", label: "Users Verified" },
            { value: "10", label: "Team Members" },
            { value: "4", label: "Products Shipped" }
        ],
        imageClass: 'object-contain'
    },
    {
        title: "SuRed App",
        role: "Backend Developer",
        description: "Developed the backend for a nationwide money-transfer application enabling users to send money across cities in Colombia with physical point withdrawals. Built robust APIs with Spring Boot and Node.js for high-reliability financial transactions.",
        tech: ["JavaScript", "Node.js", "React Native", "Spring Boot", "RESTful APIs"],
        image: "sured.png",
        imageClass: 'object-contain',
        metrics: [
            { value: "50+", label: "Cities Covered" },
            { value: "24/7", label: "Availability" },
            { value: "10K+", label: "Monthly Txns" }
        ],
        demo: 'https://www.sured.com.co'
    },
    {
        title: "R‑Sales",
        role: "Frontend Developer",
        description: "Built an Android application and CMS suite to manage field sales teams: GPS route tracking, order scheduling, real-time reporting, and operations control. Streamlined field operations for enterprise clients.",
        tech: ["JavaScript", "AngularJS", "SenchaTouch", "Python", "CSS"],
        image: "adatec.png",
        imageClass: 'object-contain',
        metrics: [
            { value: "200+", label: "Field Workers" },
            { value: "Real-time", label: "GPS Tracking" },
            { value: "5x", label: "Efficiency Gain" }
        ],
        demo: 'https://ventasremotas.com/#/signin'
    }
];
