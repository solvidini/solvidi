export const i18n = {
	locales: [
		"pl", // Poland
		"us", // USA
		"gb", // England
		"es", // Spanish
	],
	defaultLocale: "us",
} as const

export type Locale = (typeof i18n)["locales"][number]
