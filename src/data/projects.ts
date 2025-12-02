export interface Project {
    title: string;
    role?: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    image?: string;
    imageClass?: string;
}

export const projects: Project[] = [
    {
        title: "Monetta Project",
        role: "Co‑founder & CTO",
        demo: 'https://monetta.es',
        description: "Digital wallet with own token, blockchain integration (Polygon), cross‑platform (Android, iOS, CMS). I led a team of 10 engineers, defined architecture, applied design patterns and development best practices.",
        tech: ["TypeScript", "NestJS", "React", "React Native", "Redux", "PostgreSQL", "Polygon", "TailwindCSS"],
        image: "../public/monetta.png",
        imageClass: 'object-contain'
    },
    {
        title: "ObtenMas App",
        role: "Technical Lead & Developer",
        description: "Map-based app for bank customers to locate branches, ATMs and bank services, showing services and schedules.",
        tech: ["JavaScript", "AngularJS", "CSS"],
        image: "../public/obtenmas.webp",
        imageClass: 'object-cover',
        demo: 'https://obtenmas.com'
    },
    {
        title: "PagaTodo App",
        role: "Technical Lead & Developer",
        description: "Digital banking app for payments, utilities, transfers, virtual cards and scheduling payments (mobile).",
        tech: ["TypeScript", "React Native", "Redux"],
        image: "../public/pagatodo.png",
        imageClass: 'object-cover',
        demo: 'https://www.pagatodo.com'
    },
    {
        title: "CMS Davivienda",
        role: "Technical Lead & Developer",
        description: "Private CMS to manage geolocation points for bank offices and ATMs, relational DB backend and web frontend.",
        tech: ["JavaScript", "Node.js", "AngularJS", "PostgreSQL", "CSS"],
        image: "../public/cms_davivienda.png",
        imageClass: 'object-contain'
    },
    {
        title: "Daviplata Map",
        role: "Technical Lead & Developer",
        description: "Geolocation map for digital wallet users to locate deposit/withdrawal/payment points.",
        tech: ["JavaScript", "AngularJS", "CSS"],
        image: "../public/daviplata_map.png",
        imageClass: 'object-contain'
    },
    {
        title: "Davivienda Map",
        role: "Technical Lead & Developer",
        description: "Map of bank branches / ATMs for customer convenience.",
        tech: ["JavaScript", "AngularJS", "CSS"],
        image: "../public/davivienda_map.png",
        imageClass: 'object-contain'
    },
    {
        title: "OWO App",
        role: "Project Manager & Lead Developer",
        description: "Full mobile + CMS project, with architecture definition and code quality practices, for recharges and bill payments commission‑based platform.",
        tech: ["JavaScript", "AngularJS", "CSS"],
        image: "../public/owo.png",
        imageClass: 'object-contain',
        demo: 'https://owo.com.co'
    },
    {
        title: "Multiplatform SDK (Mobile & Cordova)",
        role: "Mobile Technical Lead",
        description: "SDK for Android / iOS / hybrid apps, enabling digital onboarding services, face comparison & OCR integrations.",
        tech: ["Android", "iOS", "Cordova", "JavaScript"],
        image: "../public/reconoser.png",
        imageClass: 'object-contain'
    },
    {
        title: "SuRed App",
        role: "Backend Developer",
        description: "Money‑transfer application to send money across cities in Colombia, with withdrawals at physical points. Backend + React Native + Spring Boot.",
        tech: ["JavaScript", "Node.js", "React Native", "Spring Boot", "CSS"],
        image: "../public/sured.png",
        imageClass: 'object-contain',
        demo: 'https://www.sured.com.co'
    },
    {
        title: "R‑Sales",
        role: "Frontend Developer",
        description: "Android application + CMS to manage field workers: route tracking, order scheduling and operations control.",
        tech: ["JavaScript", "AngularJS", "SenchaTouch", "Python", "CSS"],
        image: "../public/adatec.png",
        imageClass: 'object-contain',
        demo: 'https://ventasremotas.com/#/signin'
    }
];
