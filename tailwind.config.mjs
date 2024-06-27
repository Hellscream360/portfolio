/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  backgroundImage: {
			"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			"gradient-conic":
			  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
		  },
		  animation: {
			grid: "grid 15s linear infinite",
			logolist: "logolist var(--duration) infinite linear",
			"logolist-vertical": "logolist-vertical var(--duration) linear infinite",
			rotate: "rotate var(--spark) linear infinite both",
			"spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
			slide: "slide var(--speed) ease-in-out infinite alternate",
		  },
		  keyframes: {
			grid: {
			  "0%": { transform: "translateY(-50%)" },
			  "100%": { transform: "translateY(0)" },
			},
			logolist: {
			  from: { transform: "translateX(0)" },
			  to: { transform: "translateX(calc(-100% - var(--gap)))" },
			},
			"logolist-vertical": {
			  from: { transform: "translateY(0)" },
			  to: { transform: "translateY(calc(-100% - var(--gap)))" },
			},
		  },
		},
	  },
	plugins: [],
}
