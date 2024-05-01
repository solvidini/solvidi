export const i18n = {
	locales: ["us", "pl", "pt", "jp"],
	defaultLocale: "us",
} as const

export type Locale = (typeof i18n)["locales"][number]
