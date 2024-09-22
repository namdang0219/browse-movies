import React from "react";
import useSWR from "swr";
import { fetcher } from "util/func/fetcher";
import SectionTitle from "../../components/title/SectionTitle";

const VideoSection = ({
	movieId,
}: {
	movieId: string | number | undefined;
}) => {
	const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_DB_KEY}`,
		fetcher
	);
	const videos = data?.results || [];

	return (
		<div>
			<SectionTitle>Videos</SectionTitle>
			<div className="grid grid-cols-2 grid-rows-2 gap-4">
				{videos.length > 0 &&
					videos.slice(0, 4).map((video: any) => (
						<div key={video?.id} className="w-full aspect-video">
							<iframe
								width="100%"
								height="100%"
								src={`https://www.youtube.com/embed/${video?.key}`}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
							></iframe>
						</div>
					))}
			</div>
		</div>
	);
};

export default VideoSection;
