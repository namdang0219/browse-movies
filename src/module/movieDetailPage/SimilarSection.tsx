import MovieSimilarItem, { ISimilar } from "components/movie/MovieSimilarItem";
import { SectionTitle } from "components/title";
import { useLanguage } from "hook/useLanguage";
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
	const en = useLanguage().isEnglish;

	return (
		<div className="border rounded-xl border-borderColor overflow-hidden dark:border-borderColorDark h-[calc(100vh-60px-32px)] top-4 sticky flex flex-col">
			<div className="flex items-center justify-center py-3 border-b bg-slate-800 border-b-borderColor dark:border-borderColorDark">
				<span>{en? 'Similar Movies': '関連の映画'}</span>
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

export const SimilarSectionSkeleton = () => {
	return (
		<div className="border rounded-xl border-borderColor overflow-hidden dark:border-borderColorDark h-[calc(100vh-60px-32px)] top-4 sticky flex flex-col">
			<div className="flex items-center justify-center flex-shrink-0 h-12 dark:bg-borderColorDark bg-borderColor">
				<span>Similar Movies</span>
			</div>
			<div className="flex-1 overflow-y-scroll custom-scroll"></div>
		</div>
	);
};

export default SimilarSection;
