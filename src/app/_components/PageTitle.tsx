import { FC, ReactNode } from "react"
import { BrushStrokeSVG } from "../_svg/brush-stroke"

interface IPageTitleProps {
	children: ReactNode
}

export const PageTitle: FC<IPageTitleProps> = ({ children }) => (
	<div className="relative w-full h-[90px] p-2 flex items-center justify-center">
		<BrushStrokeSVG className="fill-primary w-[500px] h-[70px]" />
		<h2 className="text-lg sm:text-xl font-bold z-1 absolute inset-0 flex items-center justify-center">
			{children}
		</h2>
	</div>
)
