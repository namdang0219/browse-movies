import { MovieItem } from "components/movie";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "store/store";
import { SwiperSlide, Swiper } from "swiper/react";

const PopularSection = () => {
	const { popularMovies } = useSelector((state: RootState) => state.movie);

	return (
		<div className="px-4 mb-4">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl">Popular</h2>
				<Link to={"/popular"}>
					<div className="flex items-center gap-1 transition-all dark:text-slate-500 dark:hover:text-slate-200">
						<span>See More</span>
						<span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m8.25 4.5 7.5 7.5-7.5 7.5"
								/>
							</svg>
						</span>
					</div>
				</Link>
			</div>
			<div className="mt-3">
				<Swiper slidesPerView={5} spaceBetween={30}>
					{popularMovies &&
						popularMovies.map((m: any) => (
							<SwiperSlide key={m.id}>
								<MovieItem item={m}></MovieItem>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	);
};

export default PopularSection;
