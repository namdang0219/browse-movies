import { Button } from "components/button";
import React from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "utils/fetchSWR";

const MovieItem = ({
	data: { title, genre_ids, backdrop_path, vote_average, release_date, id },
	loading,
}) => {
	const navigate = useNavigate();
	const { data: genres } = useSWR(
		`https://api.themoviedb.org/3/genre/movie/list?api_key=8f38fce84f0f0df1daad19692169ccff`,
		fetcher
	);
	const genreList = genres?.genres || [];
	const genreNames = [];
	genreList.forEach((genre) => {
		genre_ids?.forEach((genre_id) => {
			if (genre_id === genre.id) {
				genreNames.push(genre.name);
			}
		});
	});
	if (loading)
		return (
			<div className="overflow-hidden rounded-lg bg-slate-900">
				<div className="h-[250px] bg-gray-200 rounded-lg dark:bg-gray-700 w-full animate-pulse"></div>
				<div className="p-3">
					<div className="h-[27px] bg-gray-200 rounded-full dark:bg-gray-700 w-[50%] animate-pulse"></div>
					<div className="h-[18px] bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] animate-pulse mt-1"></div>
					<div className="flex items-center justify-between pt-1">
						<div className="h-[21px] bg-gray-200 rounded-full dark:bg-gray-700 w-[20%] animate-pulse mt-1"></div>
						<div className="h-[24px] bg-gray-200 rounded-full dark:bg-gray-700 w-[20%] animate-pulse mt-1"></div>
					</div>
					<Button
						onClick={() => navigate(`/movie/${id}`)}
						className={"mt-2 rounded-md w-full py-4"}
					>
						Detail
					</Button>
				</div>
			</div>
		);
	return (
		<div className="overflow-hidden rounded-lg bg-slate-900">
			<img
				src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
				alt=""
				className="w-full h-[250px] object-cover rounded-lg"
			/>
			<div className="p-3">
				<h3 className="font-medium text-[18px] line-clamp-1">
					{title}
				</h3>
				<span className="line-clamp-1 text-[12px] opacity-60 block mt-1">
					{genreNames.slice(0, 3).join(", ")}
				</span>
				<div className="flex items-center justify-between pt-1">
					<span className="text-[14px] opacity-50 tracking-wider">
						{release_date.replaceAll("-", "/")}
					</span>
					<span className="flex items-center gap-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={20}
							height={20}
							viewBox="0 0 16 16"
						>
							<path
								fill="#ffa200"
								d="M6.886.773C7.29-.231 8.71-.231 9.114.773l1.472 3.667l3.943.268c1.08.073 1.518 1.424.688 2.118L12.185 9.36l.964 3.832c.264 1.05-.886 1.884-1.802 1.31L8 12.4l-3.347 2.101c-.916.575-2.066-.26-1.802-1.309l.964-3.832L.783 6.826c-.83-.694-.391-2.045.688-2.118l3.943-.268z"
							></path>
						</svg>
						<span className="opacity-50">
							{vote_average.toFixed(1)}
						</span>
					</span>
				</div>
				<Button
					onClick={() => navigate(`/movie/${id}`)}
					className={"mt-2 rounded-md w-full py-4"}
				>
					Detail
				</Button>
			</div>
		</div>
	);
};

export default MovieItem;
