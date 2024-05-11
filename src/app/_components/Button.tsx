import { ButtonHTMLAttributes, FC } from "react"
import { twMerge } from "tailwind-merge"

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	children,
	className,
	...props
}) => (
	<div
		className={twMerge(
			"relative",
			"before:absolute before:rotate-x-180 before:bg-secondary before:hover:bg-highlight/80 before:transition-colors before:w-[110%] before:h-[120%] before:cp-button before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
		)}
	>
		<button
			type="button"
			{...props}
			className={twMerge(
				"flex items-center justify-center gap-2 min-w-[140px] w-full px-4 py-2 text-sm font-medium bg-black cp-button outline-highlight-light",
				className,
			)}
		>
			{children}
		</button>
	</div>
)
