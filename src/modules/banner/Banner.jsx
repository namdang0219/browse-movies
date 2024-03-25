import React from "react";
import useSWR from "swr";
import { fetcher } from "utils/fetchSWR";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const Banner = () => {
	const { data, isLoading } = useSWR(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=8f38fce84f0f0df1daad19692169ccff`,
		fetcher
	);
	const movies = data?.results || [];
	if(isLoading) return (
		<div className="h-[450px] bg-gray-200 rounded-lg dark:bg-gray-700 w-full animate-pulse"></div>
	)
	return (
		<div className="px-6">
			<Swiper
				modules={[Autoplay]}
				speed={1500}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				spaceBetween={50}
			>
				{movies.length > 0 &&
					movies.slice(0, 5).map((item) => (
						<SwiperSlide key={item.id}>
							<BannerItem item={item}></BannerItem>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

const BannerItem = ({
	item: { title, backdrop_path, overview, release_date, genre_ids, id },
}) => {
	const navigate = useNavigate()
	const { data: data2 } = useSWR(
		`https://api.themoviedb.org/3/genre/movie/list?api_key=8f38fce84f0f0df1daad19692169ccff`,
		fetcher
	);
	const genreList = data2?.genres || [];
	const genreNames = [];
	genreList.forEach((genre) => {
		genre_ids?.forEach((genre_id) => {
			if (genre_id === genre.id) {
				genreNames.push(genre.name);
			}
		});
	});

	return (
		<div className="relative w-full h-[450px] rounded-2xl">
			<div className="overlay inset-0 absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0)] rounded-lg"></div>
			<img
				className="object-cover w-full h-full rounded-2xl"
				src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
				alt=""
			/>
			<div onClick={() => navigate(`/movie/${id}`)} className="absolute bottom-0 flex flex-col w-full p-5 text-white group hover:cursor-pointer">
				<span className="block px-2 py-1 mt-auto mb-2 text-xs tracking-wider bg-pink-500 rounded-md w-fit">
					UPCOMING
				</span>
				<h2 className="mb-2 text-3xl text-gray-200 transition-all AZ-bold group-hover:opacity-70">
					{title} {`(${new Date(release_date).getFullYear()})`}
				</h2>
				<p className="opacity-50 mb-2 line-clamp-2 w-full max-w-[550px]">
					{overview}
				</p>
				<div className="flex items-center mt-2 gap-x-3">
					{genreNames.map((genreName, index) => (
						<span key={index} className="px-2 py-1 border border-white rounded-md opacity-50">
							{genreName}
						</span>
					))}
					{/* <span className="px-2 py-1 border border-white rounded-md">
						Action
					</span> */}
				</div>
			</div>
		</div>
	);
};

export default Banner;
