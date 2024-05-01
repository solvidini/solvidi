export enum TechnologyType {
	Front = "frontend",
	Back = "backend",
	Other = "other",
}

export interface ITechnology {
	id: string
	src: string
	name: string
	type: TechnologyType
	className?: string
}
