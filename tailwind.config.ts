import type { Config } from "tailwindcss"
import { breakpoints, colors } from "./src/_config"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontSize: {
			"2xs": "10px",
			xs: "12px",
			sm: "14px",
			md: "16px",
			lg: "18px",
			xl: "24px",
			"2xl": "28px",
		},
		extend: {
			screens: {
				...breakpoints,
			},
			fontFamily: {
				sans: ["var(--font-inter)"],
				caveat: ["var(--font-caveat)"],
				playpen: ["var(--font-playpen)"],
			},
			backgroundImage: {
				"luxury-pattern": "url('/luxury-pattern.jpg')",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				outer: "0 0 6px rgba(0,0,0,.6)",
				inner: "inset 0 0 8px rgba(0,0,0,.6)",
			},
			spacing: {
				em: "1em",
				xs: "4px",
				sm: "8px",
				md: "12px",
				lg: "18px",
				xl: "24px",
			},
			maxWidth: {
				"con-min": "900px",
				con: "1100px",
				"con-max": "1600px",
			},
			keyframes: {
				bounceRight: {
					"0%, 100%": { transform: "translateX(-5%)" },
					"50%": { transform: "translateY(0)" },
				},
				bounceLeft: {
					"0%, 100%": { transform: "translateX(5%)" },
					"50%": { transform: "translateY(0)" },
				},
			},
			animation: {
				bounceRight: "bounceRight 1s ease-in-out infinite",
				bounceLeft: "bounceLeft 1s ease-in-out infinite",
			},
			colors: {
				...colors,
			},
		},
	},
	plugins: [],
}

export default config
