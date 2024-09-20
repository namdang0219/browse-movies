import { StarIcon } from "components/icon/movieDetail";
import { useNavigate } from "react-router-dom";

export interface IMovieItem {
	id: string;
	title: string;
	overview: string;
	vote_average: number | string;
	backdrop_path: string;
}

const MovieItem = ({
	item: { id, backdrop_path, title, overview, vote_average },
}: {
	item: IMovieItem;
}) => {
	const navigate = useNavigate();

	return (
		<div
			className="w-full rounded-md cursor-pointer select-none group"
			onClick={() => navigate(`/detail/${id}`)}
		>
			<div className="w-full overflow-hidden rounded-md aspect-square">
				<img
					src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
					alt="movie-backdrop-image"
					className="object-cover object-center w-full h-full group-hover:scale-[1.05] transition-all"
				/>
			</div>
			<div className="p-2 text-slate-400">
				<h3 className="text-xl text-black dark:text-white line-clamp-1">
					{title}
				</h3>
				<p className="mt-1 text-sm line-clamp-2">{overview}</p>
				<p className="flex items-center gap-1 mt-1 text-sm">
					<StarIcon />
					<span>Vote: {vote_average}</span>
				</p>
			</div>
		</div>
	);
};

export default MovieItem;
