import { StarIcon } from "components/icon/movieDetail";
import { useLanguage } from "hook/useLanguage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store/store";

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
	const en = useLanguage().isEnglish;
	const { loadingMovies } = useSelector((state: RootState) => state.movie);

	if (loadingMovies) {
		return <MovieItemSkeleton />;
	}
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
					<span>
						{en ? "Vote:" : "評価："}{vote_average}
					</span>
				</p>
			</div>
		</div>
	);
};

const MovieItemSkeleton = () => {
	return (
		<div className="w-full rounded-md">
			<div className="w-full overflow-hidden rounded-md aspect-square skeleton"></div>
			<div className="flex flex-col gap-2 p-2">
				<div className="h-3 rounded-full skeleton"></div>
				<div className="w-2/3 h-3 rounded-full skeleton"></div>
				<div className="w-1/2 h-3 rounded-full skeleton"></div>
			</div>
		</div>
	);
};

export default MovieItem;
