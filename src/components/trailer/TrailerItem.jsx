import React from "react";

const TrailerItem = ({trailerDetail: {key}}) => {
	return (
		<div className="w-full aspect-video">
			<iframe
				width="560"
				height="315"
				src={`https://www.youtube.com/embed/${key}`}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
        className="object-contain w-full h-full"
			></iframe>
		</div>
	);
};

export default TrailerItem;
