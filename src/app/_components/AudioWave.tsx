import { FC } from "react"
import { twMerge } from "tailwind-merge"

interface IAudioWaveProps {
	amount?: number
	className?: string
}

export const AudioWave: FC<IAudioWaveProps> = ({ className, amount = 10 }) => (
	<div
		className={twMerge(
			"flex select-none pointer-events-none gap-[4px]",
			className,
		)}
	>
		<div className="w-[6px] h-[32px] bg-teal-100 rounded-md scale-y-[0.2]" />
		{[...Array(amount)].map((_, index) => (
			<div
				key={`audio-wave-${index}`}
				className={twMerge(
					"w-[6px] h-[32px] bg-white rounded-md",
					index % 4 === 0 && "animate-waveQuiet bg-teal-300",
					index % 4 === 1 && "animate-waveNormal bg-teal-400",
					index % 4 === 2 && "animate-waveLoud bg-teal-100",
					index % 4 === 3 && "animate-waveNormal bg-teal-200",
				)}
			/>
		))}
		<div className="w-[6px] h-[32px] bg-teal-400 rounded-md scale-y-[0.2]" />
	</div>
)
