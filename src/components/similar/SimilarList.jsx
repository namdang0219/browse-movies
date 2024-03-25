import React from "react";
import { SimilarItem } from ".";
import useSWR from "swr";
import { fetcher } from "utils/fetchSWR";

const SimilarList = ({ movieId }) => {
	const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}`,
		fetcher
	);
	const similarList = data?.results || [];
	return (
		<div className="px-5 h-[700px]  xl:grid xl:grid-cols-2 overflow-y-scroll scroll-bar-hidden">
			{similarList.length > 0 &&
				similarList.map((item, index) => (
					<SimilarItem
						key={item.id}
						similarDetail={item}
						className={`${
							index === similarList.length - 1
								? "pt-4 pb-0 border-b-0"
								: ""
						}`}
					></SimilarItem>
				))}
		</div>
	);
};

export default SimilarList;
