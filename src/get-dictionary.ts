import type { Locale } from "./i18n-config"

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
	pl: () => import("./dictionaries/pl.json").then((m) => m.default),
	us: () => import("./dictionaries/en.json").then((m) => m.default),
	gb: () => import("./dictionaries/en.json").then((m) => m.default),
	es: () => import("./dictionaries/es.json").then((m) => m.default),
}

export const fetchDictionary = async (locale: Locale) =>
	dictionaries[locale]?.() ?? dictionaries.us()
