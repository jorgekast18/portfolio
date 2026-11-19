/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                jorge: {
                    "primary": "#F59E0B",
                    "primary-content": "#0C0C0E",
                    "secondary": "#FBBF24",
                    "secondary-content": "#0C0C0E",
                    "accent": "#F59E0B",
                    "accent-content": "#0C0C0E",
                    "neutral": "#1C1C1F",
                    "neutral-content": "#FAFAF9",
                    "base-100": "#0C0C0E",
                    "base-200": "#141416",
                    "base-300": "#26262A",
                    "base-content": "#FAFAF9",
                    "info": "#38BDF8",
                    "success": "#34D399",
                    "warning": "#FBBF24",
                    "error": "#F87171",
                    "--rounded-box": "1rem",
                    "--rounded-btn": "0.6rem",
                    "--rounded-badge": "999px",
                },
            },
        ],
    },
}
