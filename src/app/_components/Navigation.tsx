"use client"

import { FC } from "react"

import { navigation } from "@/_config/navigation"
import { LocaleLink } from "@/app/_components/LocaleLink"
import { useLocale } from "@/app/_contexts/locale-context"
import { useUI } from "@/app/_contexts/ui-context"

interface INavigationProps {
	isDrawer?: boolean
}

export const Navigation: FC<INavigationProps> = ({ isDrawer = false }) => {
	const { dictionary: d } = useLocale()
	const { closeDrawer } = useUI()

	return (
		<nav className="z-10">
			<ul className="flex uppercase items-center justify-center gap-md flex-wrap">
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
