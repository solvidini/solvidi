import { FC } from "react"
import { BsPauseFill, BsPlayFill } from "react-icons/bs"
import { twMerge } from "tailwind-merge"
import { ISongListProps } from "../AudioPlayer.types"

export const SongList: FC<ISongListProps> = ({
	songs,
	currentSongIndex,
	isPlaying,
	className,
	chooseSongByIndex,
}) => {
	const handleSongChoose = (index: number) => {
		chooseSongByIndex(index)
	}

	return (
		<ul
			className={twMerge(
				"w-full bg-dark/80 rounded-md p-xs max-h-[240px] overflow-y-auto",
				className,
			)}
		>
			{songs.map((song, index) => {
				const isCurrentSong = currentSongIndex === index

				return (
					<li
						key={index}
						className="w-full"
					>
						<button
							className={twMerge(
								"flex items-center gap-xs w-full py-sm px-xs rounded-md cursor-pointer group/song hover:bg-black/80 outline-highlight-light",
								isCurrentSong && "bg-black/80",
							)}
							onClick={() => handleSongChoose(index)}
						>
							{!isCurrentSong && (
								<>
									<div className="text-center w-[16px] h-[16px] block group-hover/song:hidden leading-[1]">
										{index + 1}
									</div>
									<BsPlayFill
										className="w-[16px] h-[16px] hidden group-hover/song:block transition-transform"
										aria-hidden="true"
									/>
								</>
							)}
							{isCurrentSong && (
								<>
									{isPlaying ? (
										<BsPauseFill
											className="w-[16px] h-[16px] transition-transform"
											aria-hidden="true"
										/>
									) : (
										<BsPlayFill
											className="w-[16px] h-[16px] transition-transform"
											aria-hidden="true"
										/>
									)}
								</>
							)}
							<span className="truncate">{song.title}</span>
							<span className="ml-auto text-gray-400">{song.length}</span>
						</button>
					</li>
				)
			})}
		</ul>
	)
}
