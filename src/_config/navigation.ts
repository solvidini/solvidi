import { Dictionary } from "@/_contexts/locale-context"

interface INavigation {
	title: keyof Dictionary["common"]
	to: string
}

export const navigation: INavigation[] = [
	{
		title: "about",
		to: "/about",
	},
	{
		title: "music",
		to: "/music",
	},
	{
		title: "it",
		to: "/it",
	},
	{
		title: "featured",
		to: "/featured",
	},
	{
		title: "contact",
		to: "/contact",
	},
]
