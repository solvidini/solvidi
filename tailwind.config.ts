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
				barlow: ["var(--font-barlow)"],
			},
			backgroundImage: {
				"luxury-pattern": "url('/luxury-pattern.jpg')",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			dropShadow: {
				element: "0 4px 3px rgba(0,0,0,.3)",
			},
			boxShadow: {
				outer: "0 0 6px rgba(0,0,0,.6)",
				inner: "inset 0 0 8px rgba(0,0,0,.6)",
			},
			spacing: {
				em: "1em",
				xxs: "4px",
				xs: "8px",
				sm: "12px",
				md: "16px",
				lg: "22px",
				xl: "28px",
				xxl: "34px",
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
				waveQuiet: {
					"0%": { transform: "scaleY(0.3)" },
					"25%": { transform: "scaleY(0.6)" },
					"50%": { transform: "scaleY(0.4)" },
					"75%": { transform: "scaleY(0.8)" },
					"100%": { transform: "scaleY(0.3)" },
				},
				waveNormal: {
					"0%": { transform: "scaleY(0.2)" },
					"25%": { transform: "scaleY(0.8)" },
					"50%": { transform: "scaleY(0.4)" },
					"75%": { transform: "scaleY(0.5)" },
					"100%": { transform: "scaleY(0.2)" },
				},
				waveLoud: {
					"0%": { transform: "scaleY(0.1)" },
					"25%": { transform: "scaleY(1.2)" },
					"50%": { transform: "scaleY(0.6)" },
					"75%": { transform: "scaleY(1.0)" },
					"100%": { transform: "scaleY(0.1)" },
				},
				speaker: {
					"0%": { transform: "scale(0.95)" },
					"10%": { transform: "scale(0.85)" },
					"11%": { transform: "scale(0.95)" },
					"25%": { transform: "scale(1.02)" },
					"50%": { transform: "scale(0.85)" },
					"75%": { transform: "scale(1.0)" },
					"100%": { transform: "scale(0.85)" },
				},
			},
			animation: {
				bounceRight: "bounceRight 1s ease-in-out infinite",
				bounceLeft: "bounceLeft 1s ease-in-out infinite",
				waveQuiet: "waveQuiet 1s ease-in-out infinite",
				waveNormal: "waveNormal 1s ease-in-out infinite",
				waveLoud: "waveLoud 1s ease-in-out infinite",
				speaker: "speaker 1s ease-in-out infinite",
			},
			colors: {
				...colors,
			},
		},
	},
	plugins: [require("tailwindcss-3d")],
}

export default config
