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
			className={twMerge("text-sm leading-[1.6rem]",
				className,
				pathname === getLocaleUrl(to)
					? "text-black font-semibold"
					: "text-dark",
				isDrawer && "text-md"
			)}
			href={getLocaleUrl(to)}>
			{children}
		</Link>
	)
}
