import React from "react";
import { CastItem } from ".";
import { fetcher } from "utils/fetchSWR";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CastList = ({ movieId }) => {
	const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`,
		fetcher
	);
	return (
		<div className="mt-2 movie-list">
			<Swiper grabCursor={true} spaceBetween={20} slidesPerView={"auto"}>
				{data?.cast.length > 0 &&
					data.cast.slice(0, 10).map((item) => (
						<SwiperSlide key={item.id}>
							<CastItem castDetail={item}></CastItem>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default CastList;
