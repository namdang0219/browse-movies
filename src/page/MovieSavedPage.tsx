import { MovieItem } from "components/movie";
import { useLanguage } from "hook/useLanguage";
import { useMovieDetail } from "hook/useMovieDetail";
import MainLayout from "layout/MainLayout";
import MovieGrid from "layout/MovieGrid";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const MovieSavedPage = () => {
	const en = useLanguage().isEnglish
	const { favorite, favoriteLoading } = useSelector(
		(state: RootState) => state.userMovie
	);

	return (
		<MainLayout>
			{favorite.length === 0 && <div className="flex items-center justify-center h-[500px] text-slate-600">{en ? 'Empty': 'データはまだありません'}</div>}

			<MovieGrid>
				{favoriteLoading ? (
					<div className="loader" />
				) : (
					favorite &&
					favorite.map((mid: any) => (
						<MovieItemWrapper
							key={mid}
							movieId={mid}
						></MovieItemWrapper>
					))
				)}
			</MovieGrid>
		</MainLayout>
	);
};

const MovieItemWrapper = ({ movieId }: { movieId: string }) => {
	const { movieDetail, isLoading } = useMovieDetail(movieId);

	if (isLoading || !movieDetail) return <></>;

	return <MovieItem item={movieDetail} />;
};

export default MovieSavedPage;
