"use client"

import { useLocale } from "@/app/_contexts/locale-context"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ILocaleLinkProps {
	children: ReactNode
	to: string
	onClick?(): void
	className?: string
	isDrawer?: boolean
}

export const LocaleLink: FC<ILocaleLinkProps> = ({
	children,
	to,
	onClick,
	className,
	isDrawer,
}) => {
	const pathname = usePathname()
	const { getLocaleUrl } = useLocale()

	return (
		<Link
			onClick={onClick}
			className={twMerge(
				"text-sm leading-[1.6rem] transition-colors outline-highlight-light",
				pathname === getLocaleUrl(to)
					? "text-white underline underline-offset-4 decoration-tertiary"
					: "text-light",
				isDrawer && "text-md",
				className,
			)}
			href={getLocaleUrl(to)}
		>
			{children}
		</Link>
	)
}
