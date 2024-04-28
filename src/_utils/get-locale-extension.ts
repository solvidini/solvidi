import { Locale } from "@/i18n-config"

export const getLocaleExtension = (locale: Locale) => {
	switch (locale) {
		case "pl":
			return "pl"
		case "gb":
			return "co.uk"
		case "es":
			return "es"
		case "us":
		default:
			return "com"
	}
}
