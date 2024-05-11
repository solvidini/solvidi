import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface IExternalLinkProps {
	children: ReactNode
	to: string
	className?: string
}

export const ExternalLink: FC<IExternalLinkProps> = ({
	children,
	to,
	className,
}) => (
	<a
		className={twMerge(
			"transition-all duration-300 ease-in-out outline-highlight-light",
			className,
		)}
		href={to}
		target="_blank"
		rel="noopener noreferrer"
	>
		{children}
	</a>
)
