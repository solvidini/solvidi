"use client"
import Image from "next/image"

import { FC } from "react"
import { BsPauseFill, BsPlayFill } from "react-icons/bs"
import { twMerge } from "tailwind-merge"
import { IAudioImageProps } from "../AudioPlayer.types"

export const AudioImage: FC<IAudioImageProps> = ({
	isPlaying,
	src,
	alt,
	className,
	onClick,
}) => {
	return (
		<div
			className={twMerge("relative w-[120px] h-[120px] group/image", className)}
		>
			<Image
				className="select-none w-full h-full rounded-md transition-all hover:scale-[1.1] hover:brightness-[1.2] cursor-pointer"
				src={src}
				alt={alt}
				onClick={onClick}
				width={120}
				height={120}
			/>
			{!isPlaying && (
				<BsPlayFill className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] opacity-1 pointer-events-none scale-0 group-hover/image:scale-[1] transition-transform" />
			)}
			{isPlaying && (
				<BsPauseFill className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] opacity-1 pointer-events-none scale-0 group-hover/image:scale-[1] transition-transform" />
			)}
		</div>
	)
}
