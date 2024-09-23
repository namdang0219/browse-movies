import MovieSimilarItem, { ISimilar } from "components/movie/MovieSimilarItem";
import useSWR from "swr";
import { fetcher } from "util/func/fetcher";

const SimilarSection = ({
	movieId,
}: {
	movieId: string | number | undefined;
}) => {
	const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_DB_KEY}`,
		fetcher
	);
	const similarMovies = data?.results || [];

	return (
		<div className="border rounded-xl border-borderColor overflow-hidden dark:border-borderColorDark h-[calc(100vh-60px-32px)] top-4 sticky flex flex-col">
			<div className="flex items-center justify-center flex-shrink-0 h-12 dark:bg-borderColorDark bg-borderColor">
				<span>Similar Movies</span>
			</div>
			<div className="flex-1 overflow-y-scroll custom-scroll">
				{similarMovies.length > 0 &&
					similarMovies.map((similar: ISimilar) => (
						<MovieSimilarItem
							key={similar?.id}
							item={similar}
						></MovieSimilarItem>
					))}
			</div>
		</div>
	);
};

export default SimilarSection;
