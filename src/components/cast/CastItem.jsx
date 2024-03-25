import React from "react";

const CastItem = ({castDetail: {name, profile_path}}) => {
	return (
		<div className="w-[200px]">
			<img
				src={`https://image.tmdb.org/t/p/original/${profile_path}`}
				alt="" className="size-[200px] rounded-md object-cover"
			/>
      <span className="block mt-4 font-medium text-[20px] text-center">{name}</span>
		</div>
	);
};

export default CastItem;
