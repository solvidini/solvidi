import { Dictionary } from "@/_contexts/locale-context"

interface INavigation {
	title: keyof Dictionary["common"]
	to: string
}

export const navigation: INavigation[] = [
	{
		title: "home",
		to: "/",
	},
	{
		title: "about",
		to: "/about",
	},
	{
		title: "music",
		to: "/music",
	},
	{
		title: "projects",
		to: "/projects",
	},
	{
		title: "contact",
		to: "/contact",
	},
]
