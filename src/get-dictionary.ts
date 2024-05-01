import type { Locale } from "./i18n-config"

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
	us: () => import("./dictionaries/en.json").then((m) => m.default),
	pl: () => import("./dictionaries/pl.json").then((m) => m.default),
	pt: () => import("./dictionaries/pt.json").then((m) => m.default),
	jp: () => import("./dictionaries/jp.json").then((m) => m.default),
}

export const fetchDictionary = async (locale: Locale) =>
	dictionaries[locale]?.() ?? dictionaries.us()
