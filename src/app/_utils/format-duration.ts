export function formatDuration(seconds: number): string {
	const hours = Math.floor(seconds / 3600)
	const minutes = Math.floor((seconds % 3600) / 60)
	const remainingSeconds = Math.floor(seconds % 60)

	const formattedHours = hours > 0 ? String(hours) + ":" : ""
	const formattedMinutes = String(minutes).padStart(2, "0")
	const formattedSeconds = String(remainingSeconds).padStart(2, "0")

	return `${formattedHours}${formattedMinutes}:${formattedSeconds}`
}
