import { FC } from "react"
import { twMerge } from "tailwind-merge"

interface IAudioWaveProps {
	amount?: number
	className?: string
}

export const AudioWave: FC<IAudioWaveProps> = ({ className, amount = 10 }) => (
	<div
		className={twMerge(
			"flex select-none gap-[4px]",
			className,
		)}
	>
		<div className="w-[6px] h-[32px] bg-teal-200 rounded-md scale-y-[0.2]" />
		{[...Array(amount)].map((_, index) => (
			<div
				key={`audio-wave-${index}`}
				className={twMerge(
					"w-[6px] h-[32px] hover:bg-highlight transition-colors rounded-md",
					index % 4 === 0 && "animate-waveQuiet bg-tertiary",
					index % 4 === 1 && "animate-waveNormal bg-teal-500",
					index % 4 === 2 && "animate-waveLoud bg-secondary",
					index % 4 === 3 && "animate-waveNormal bg-teal-200",
				)}
			/>
		))}
		<div className="w-[6px] h-[32px] bg-teal-400 rounded-md scale-y-[0.2]" />
	</div>
)
