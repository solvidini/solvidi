"use client"

import { FC } from "react"
import { FaSoundcloud, FaSpotify } from "react-icons/fa"
import { ExternalLink } from "../ExternalLink"
import { IAudioLinksProps } from "./AudioPlayer.types"

export const AudioLinks: FC<IAudioLinksProps> = ({ soundCloud, spotify }) => {
	return (
		<div className="flex gap-sm">
			<ExternalLink to={soundCloud}>
				<FaSoundcloud className="w-[30px] h-[30px] text-light hover:text-highlight-light hover:scale-[1.2] transition-all" />
			</ExternalLink>
			<ExternalLink to={spotify}>
				<FaSpotify className="w-[30px] h-[30px] text-light hover:text-highlight-light hover:scale-[1.2] transition-all" />
			</ExternalLink>
		</div>
	)
}
