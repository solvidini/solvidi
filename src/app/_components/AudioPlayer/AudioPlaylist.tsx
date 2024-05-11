"use client"

import { ISong } from "@/_data/music"
import { useLocale } from "@/app/_contexts/locale-context"
import { useMusic } from "@/app/_contexts/music-context"
import { reconvertDuration } from "@/app/_utils"
import { FC, useCallback, useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { IAudioPlaylistProps } from "./AudioPlayer.types"
import { AudioBar } from "./_components/AudioBar"
import { AudioControls } from "./_components/AudioControls"
import { AudioImage } from "./_components/AudioImage"
import { AudioLinks } from "./_components/AudioLinks"
import { SongList } from "./_components/SongList"

const preparePlaylistSongs = (songs: ISong[]) =>
	songs.map((song) => ({ ...song, id: `${song.id}-playlist` }))

export const AudioPlaylist: FC<IAudioPlaylistProps> = ({
	id,
	title,
	author,
	imageSrc,
	spotify,
	soundcloud,
	songs,
	className,
}) => {
	const { dictionary: d } = useLocale()
	const [playlistSongs] = useState<ISong[]>(preparePlaylistSongs(songs))
	const [songIndex, setSongIndex] = useState<number>(0)
	const { contextSong, setContextSong } = useMusic()
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [duration, setDuration] = useState<number>(0)
	const [currentTime, setCurrentTime] = useState<number>(0)

	const handleTimeUpdate = () => {
		if (!audioRef.current) {
			return
		}
		const time = parseFloat(audioRef.current.currentTime.toFixed(2))

		setCurrentTime(time)
	}

	const changeSongTimePosition = (position: number) => {
		if (!audioRef.current) {
			return
		}
		audioRef.current.currentTime = position * duration
	}

	const play = () => {
		setIsPlaying(true)
	}

	const pause = () => {
		setIsPlaying(false)
	}

	const togglePlay = () => {
		setIsPlaying(!isPlaying)
	}

	const nextSong = () => {
		const newIndex = songIndex + 1 >= songs.length ? 0 : songIndex + 1
		pause()
		setSongIndex(newIndex)
	}

	const previousSong = () => {
		const newIndex = songIndex === 0 ? songs.length - 1 : songIndex - 1
		pause()
		setSongIndex(newIndex)
	}

	const setSongByIndex = (index: number) => {
		if (index === songIndex) {
			togglePlay()
			return
		}
		pause()
		setSongIndex(index)
	}

	const handleAudioEnd = useCallback(() => {
		pause()
		setCurrentTime(0)
	}, [])

	useEffect(() => {
		const audioElement = audioRef.current
		if (!audioElement) {
			return
		}
		audioElement.addEventListener("ended", handleAudioEnd)

		return () => {
			audioElement.removeEventListener("ended", handleAudioEnd)
		}
	}, [handleAudioEnd])

	useEffect(() => {
		setCurrentTime(0)
		setDuration(
			audioRef.current?.duration ||
				reconvertDuration(playlistSongs[songIndex].length),
		)
		if (contextSong) {
			play()
		}
	}, [songIndex])

	useEffect(() => {
		if (isPlaying) {
			if (!contextSong || playlistSongs[songIndex].id !== contextSong.id) {
				setContextSong(playlistSongs[songIndex])
			}
			audioRef.current?.play()
		} else {
			audioRef.current?.pause()
		}
	}, [isPlaying])

	useEffect(() => {
		if (contextSong && contextSong.id !== playlistSongs[songIndex].id) {
			pause()
		}
	}, [contextSong])

	return (
		<div
			className={twMerge(
				"relative w-full bg-black/60 border border-secondary rounded-md backdrop-blur p-md flex flex-wrap gap-sm sm:gap-md",
				className,
			)}
		>
			<AudioImage
				className="w-[140px] h-[140px]"
				isPlaying={isPlaying}
				src={imageSrc}
				alt={title}
				onClick={togglePlay}
			/>
			<div className="flex flex-col flex-1 basis-full sm:basis-auto">
				<div className="flex justify-between items-start flex-row gap-sm">
					<div className="flex flex-col">
						<h6 className="font-semibold text-lg">{title}</h6>
						<h6 className="text-highlight-light">{author}</h6>
					</div>
					<AudioLinks
						soundCloud={soundcloud}
						spotify={spotify}
						className="ml-auto absolute top-md right-md sm:relative sm:top-0 sm:right-0"
					/>
				</div>
				<AudioBar
					currentTime={currentTime}
					duration={duration}
					length={playlistSongs[songIndex].length}
					positionUpdate={changeSongTimePosition}
					playSong={play}
					pauseSong={pause}
				/>
				<AudioControls
					className="mt-sm"
					isPlaying={isPlaying}
					info={playlistSongs[songIndex].preview ? d.music.preview : false}
					togglePlay={togglePlay}
					previousSong={previousSong}
					nextSong={nextSong}
				/>
			</div>
			<SongList
				className="basis-full"
				songs={songs}
				currentSongIndex={songIndex}
				isPlaying={isPlaying}
				chooseSongByIndex={setSongByIndex}
			/>
			<audio
				ref={audioRef}
				src={playlistSongs[songIndex].songSrc}
				preload="metadata"
				onTimeUpdate={handleTimeUpdate}
			/>
		</div>
	)
}
