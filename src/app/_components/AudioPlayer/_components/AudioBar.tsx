import { FC, useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge"
import { IAudioBarProps } from "../AudioPlayer.types"

export const AudioBar: FC<IAudioBarProps> = ({
	currentTime,
	duration,
	length,
	positionUpdate,
	playSong,
	pauseSong,
}) => {
	const barRef = useRef<HTMLDivElement>(null)
	const [isDragging, setIsDragging] = useState<boolean>(false)

	useEffect(() => {
		const handlePointerMove = (event: PointerEvent) => {
			if (!isDragging || !barRef.current) return
			event.preventDefault()

			const barRect = barRef.current.getBoundingClientRect()
			const newPosition = (event.clientX - barRect.left) / barRect.width
			const songPosition = Math.min(1, Math.max(0, newPosition))

			positionUpdate(songPosition)
		}

		const handlePointerUp = () => {
			if (isDragging) {
				setIsDragging(false)
				playSong()
			}
		}

		if (isDragging) {
			window.addEventListener("pointermove", handlePointerMove)
			window.addEventListener("pointerup", handlePointerUp)
		} else {
			window.removeEventListener("pointermove", handlePointerMove)
			window.removeEventListener("pointerup", handlePointerUp)
		}

		return () => {
			window.removeEventListener("pointermove", handlePointerMove)
			window.removeEventListener("pointerup", handlePointerUp)
		}
	}, [isDragging])

	const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
		if (!barRef.current) return
		setIsDragging(true)
		const width = barRef.current.clientWidth
		const offset = event.nativeEvent.offsetX
		const songPosition = offset / width

		pauseSong()
		positionUpdate(songPosition)
	}

	const songProgress = (currentTime / duration) * 100

	return (
		<div className="mt-auto flex items-end select-none">
			<div
				ref={barRef}
				className="relative w-full rounded-full h-[8px] bg-gray-900 cursor-pointer hover:bg-gray-600 transition-all group"
				onPointerDown={handlePointerDown}
			>
				<div
					className="absolute left-0 rounded-full h-[8px] bg-tertiary"
					style={{ width: `${songProgress}%` }}
				/>
				<div
					className={twMerge(
						"group-hover:scale-[1] scale-0 absolute top-0 -mt-[2px] -ml-[6px] rounded-full w-[12px] h-[12px] bg-secondary transition-transform pointer-events-none",
						isDragging && "scale-[1]",
					)}
					style={{ left: `${songProgress}%` }}
				/>
			</div>
			<div className="text-sm text-gray-200 -mb-[6px] ml-sm mr-[4px] sm:mr-0">
				{length}
			</div>
		</div>
	)
}
