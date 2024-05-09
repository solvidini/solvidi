export function reconvertDuration(durationString: string): number {
	const timeParts = durationString
		.split(":")
		.map((part) => parseInt(part, 10) || 0)

	switch (timeParts.length) {
		case 3:
			return timeParts[0] * 3600 + timeParts[1] * 60 + timeParts[2]
		case 2:
			return timeParts[0] * 60 + timeParts[1]
		default:
			return parseInt(durationString)
	}
}
