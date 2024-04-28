import { ButtonHTMLAttributes, FC } from "react"
import { twMerge } from "tailwind-merge"
import { DotsSVG } from "../_svg/dots"

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	children,
	className,
	...props
}) => (
	<div className="relative">
		<DotsSVG className="absolute fill-primary h-[180%] -left-[10%] top-1/2 -translate-y-1/2" />
		<DotsSVG className="absolute fill-primary h-[180%] -right-[10%] top-1/2 -translate-y-1/2" />
		<button
			type="button"
			{...props}
			className={twMerge(
				"inline-flex items-center justify-center gap-2 min-w-[140px] w-full px-4 py-2 text-sm font-medium bg-primary cp-button before:absolute before:bg-black before:-z-10 before:w-[94%] before:h-[92%] before:cp-button before:hover:bg-primary before:transition-colors",
				className,
			)}>
			{children}
		</button>
	</div>
)
