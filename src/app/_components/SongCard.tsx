import { FC } from "react"
import { twMerge } from "tailwind-merge"

interface ISongCard {
	link: string
	theme?: boolean
	className?: string
}

export const SongCard: FC<ISongCard> = ({ link, theme, className }) => (
	<iframe className={twMerge("rounded-xl mx-auto", className)} src={theme ? `${link}&theme=0` : link} width="100%" height="152" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
)