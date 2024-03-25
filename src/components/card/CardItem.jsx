import { Button } from "components/button";
import React from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "utils/fetchSWR";

const CardItem = ({data: {title, release_date, vote_average, backdrop_path, genre_ids, id}, loading}) => {
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
	if(loading) return (
		<div className="h-[260px] shrink-0 bg-gray-200 rounded-lg dark:bg-gray-700 w-[260px] animate-pulse"></div>
	)
	return (
		<div className="mt-6 shrink-0 w-[260px] overflow-hidden rounded-xl bg-slate-900 group">
			<div className="w-[260px] h-[200px] overflow-hidden">
				<img
					src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
					alt=""
					className="object-cover w-full h-full transition-all group-hover:scale-105"
				/>
			</div>
			<div className="p-3">
				<h4 className="font-semibold text-[18px] line-clamp-1">{title}</h4>
				<span className="line-clamp-1 text-[12px] opacity-60 block mt-1">{genreNames.slice(0,3).join(', ')}</span>
				<div className="flex items-center justify-between pt-1">
					<span className="text-[14px] opacity-50">{new Date(release_date).getFullYear()}</span>
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
            <span className="opacity-50">{vote_average.toFixed(1)}</span>
					</span>
				</div>
        <Button onClick={() => navigate(`/movie/${id}`)} className={'mt-2 rounded-md w-full py-4'}>Detail</Button>
			</div>
		</div>
	);
};

export default CardItem;
