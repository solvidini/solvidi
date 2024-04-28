import { useLocale } from "@/_contexts/locale-context"
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
			className={twMerge("text-xs",
				className,
				pathname === getLocaleUrl(to)
					? "text-white animate-text-glow"
					: "text-gray-200",
				isDrawer && "text-sm"
			)}
			href={getLocaleUrl(to)}>
			{children}
		</Link>
	)
}
