import Image from "next/image"

import { FC } from "react"
import { twMerge } from "tailwind-merge"

interface ISpeakerProps {
	className?: string
}

export const Speaker: FC<ISpeakerProps> = ({ className }) => (
	<div
		className={twMerge(
			"relative w-[100px] h-[100px] select-none pointer-events-none bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-[2px] border-[#333] animate-speaker",
			className,
		)}
	>
		<div
			className={twMerge(
				"relative w-[84px] h-[84px] bg-speaker rounded-full border-[4px] border-[#333] flex items-center justify-center",
				"after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[20px] after:h-[20px] after:bg-[#222] after:rounded-full after:border-[2px] after:border-[#555]",
			)}
		>
			<Image
				className="opacity-20"
				src="/sun.png"
				alt=""
				width={50}
				height={50}
			/>
		</div>
		<div className="absolute left-[1px] bg-[#222] w-[4px] h-[4px] rounded-full" />
		<div className="absolute right-[1px] bg-[#222] w-[4px] h-[4px] rounded-full" />
		<div className="absolute top-[1px] bg-[#222] w-[4px] h-[4px] rounded-full" />
		<div className="absolute bottom-[1px] bg-[#222] w-[4px] h-[4px] rounded-full" />
	</div>
)
