import { BannerItem } from "components/banner";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const BannerSection = () => {
	const { popularMovies } = useSelector((state: RootState) => state.movie);
  
	return (
		<div className="p-4">
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				modules={[Autoplay]}
				autoplay={{ delay: 2500 }}
			>
				{popularMovies &&
					popularMovies.slice(0, 5).map((m: any) => (
						<SwiperSlide key={m.id}>
							<BannerItem item={m} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default BannerSection;
