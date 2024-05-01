import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface IHeaderProps {
	children: ReactNode
	className?: string
}

export const Header: FC<IHeaderProps> = ({ children, className }) => (
	<div
		className={twMerge(
			"drop-shadow-element inline-flex items-center justify-center relative w-auto h-[40px] cp-header bg-primary text-center px-[48px]",
			className,
		)}
	>
		<h2 className="text-lg">{children}</h2>
	</div>
)
