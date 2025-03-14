import { MovieItem } from "components/movie";
import { useMovieDetail } from "hook/useMovieDetail";
import MainLayout from "layout/MainLayout";
import MovieGrid from "layout/MovieGrid";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const MovieSavedPage = () => {
	const { favorite } = useSelector((state: RootState) => state.userMovie);

	return (
		<MainLayout>
			<MovieGrid>
				{favorite &&
					favorite.map((mid: any) => (
						<MovieItemWrapper
							key={mid}
							movieId={mid}
						></MovieItemWrapper>
					))}
			</MovieGrid>
		</MainLayout>
	);
};

const MovieItemWrapper = ({ movieId }: { movieId: string }) => {
	const { movieDetail } = useMovieDetail(movieId);

	return <MovieItem item={movieDetail} />;
};

export default MovieSavedPage;
