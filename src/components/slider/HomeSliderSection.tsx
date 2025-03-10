import { MovieItem } from "components/movie";
import { useLanguage } from "hook/useLanguage";
import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";

const HomeSliderSection = ({
	movieList = [],
	title = "Title",
	seeMore = "/",
}: {
	movieList: Array<any>;
	title: string;
	seeMore: string;
}) => {
	return (
		<div className="px-4">
			<div className="flex items-center justify-between">
				<h2 className="text-3xl">{title}</h2>
				<Link to={seeMore}>
					<SeeMoreButton />
				</Link>
			</div>
			<div className="mt-4">
				<Swiper slidesPerView={5} spaceBetween={30}>
					{movieList &&
						movieList.map((m: any) => (
							<SwiperSlide key={m.id}>
								<MovieItem item={m}></MovieItem>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	);
};

const SeeMoreButton = () => {
	const en = useLanguage().isEnglish

	return (
		<div className="flex items-center gap-1 transition-all dark:text-slate-500 dark:hover:text-slate-200">
			<span>{en ? 'See More': 'すべて'}</span>
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
	);
};

export default HomeSliderSection;
