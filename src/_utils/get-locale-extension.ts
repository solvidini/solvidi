import { Locale } from "@/i18n-config"

export const getLocaleExtension = (locale: Locale) => {
	switch (locale) {
		case "pl":
			return "pl"
		case "pt":
			return "pt"
		case "jp":
			return "jp"
		case "us":
		default:
			return "com"
	}
}
