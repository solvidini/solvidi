export const YouTubeVideo = ({ videoId }: { videoId: string }) => {
	return (
		<iframe
			className="w-full h-[220px] xs:h-[240px] sm:w-[588px] sm:h-[331px] transition-all ease-in-out duration-300 sm:hover:w-[600px] sm:hover:h-[338px] hover:brightness-105"
			src={`https://www.youtube.com/embed/${videoId}`}
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	)
}
