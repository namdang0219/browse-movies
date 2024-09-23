import useMovieGenres from "hook/useMovieGenres";
import { useNavigate } from "react-router-dom";
import { apiLinks } from "util/constant/api-link";
import getYear from "util/func/getYear";

export interface ISimilar {
	title: string;
	poster_path: string;
	release_date: string;
	genre_ids: number[];
	vote_average: number;
	id: number;
}

const MovieSimilarItem = ({
	item: { title, poster_path, release_date, genre_ids, vote_average, id },
}: {
	item: ISimilar;
}) => {
	const navigate = useNavigate();
	const genres = useMovieGenres(genre_ids);

	return (
		<div className="flex items-center gap-4 px-4 py-4 transition-all cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-100" onClick={() => navigate(`/detail/${id}`)}>
			<div className="w-16 aspect-[3/4] flex-shrink-0">
				<img
					src={`${apiLinks.w500Image}/${poster_path}`}
					alt="poster"
					className="object-cover object-center w-full h-full rounded-md"
				/>
			</div>
			<div>
				<p className="line-clamp-1">{`${title} (${getYear(release_date)})`}</p>
				<div className="text-sm text-slate-400 flex flex-col gap-0.5">
					<p className="mt-1">
						{genres.length > 0 && genres.slice(0, 3).join(", ")}
					</p>
					<p>{`Rate: ${vote_average.toFixed(1)}`}</p>
				</div>
			</div>
		</div>
	);
};

export default MovieSimilarItem;
