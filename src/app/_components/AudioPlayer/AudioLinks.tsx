"use client"

import { FC } from "react"
import { FaSoundcloud, FaSpotify } from "react-icons/fa"
import { twMerge } from "tailwind-merge"
import { ExternalLink } from "../ExternalLink"
import { IAudioLinksProps } from "./AudioPlayer.types"

export const AudioLinks: FC<IAudioLinksProps> = ({
	soundCloud,
	spotify,
	className,
}) => {
	return (
		<div className={twMerge("flex gap-sm", className)}>
			<ExternalLink to={soundCloud}>
				<FaSoundcloud className="w-[30px] h-[30px] text-light hover:text-highlight-light hover:scale-[1.2] transition-all" />
			</ExternalLink>
			<ExternalLink to={spotify}>
				<FaSpotify className="w-[30px] h-[30px] text-light hover:text-highlight-light hover:scale-[1.2] transition-all" />
			</ExternalLink>
		</div>
	)
}
