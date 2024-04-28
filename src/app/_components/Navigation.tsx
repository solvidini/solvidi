"use client"

import { FC } from "react"

import { navigation } from "@/_config/navigation"
import { useLocale } from "@/_contexts/locale-context"
import { useUI } from "@/_contexts/ui-context"
import { LocaleLink } from "@/app/_components/LocaleLink"
import { twMerge } from "tailwind-merge"

interface INavigationProps {
	isDrawer?: boolean
}

export const Navigation: FC<INavigationProps> = ({ isDrawer = false }) => {
	const { dictionary: d } = useLocale()
	const { closeDrawer } = useUI()

	return (
		<nav className="z-10">
			<ul
				className={twMerge(
					"flex uppercase items-center justify-center gap-md flex-wrap",
					isDrawer ? "w-[300px]" : "w-auto",
				)}
			>
				{navigation.map((n) => (
					<li key={n.title}>
						<LocaleLink
							onClick={closeDrawer}
							isDrawer={isDrawer}
							to={n.to}
						>
							{d.common[n.title]}
						</LocaleLink>
					</li>
				))}
			</ul>
		</nav>
	)
}
