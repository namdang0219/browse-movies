import { MovieItem } from "components/movie";
import MainLayout from "layout/MainLayout";
import MovieGrid from "layout/MovieGrid";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const UpcomingPage = () => {
	const { upcomingMovies } = useSelector((state: RootState) => state.movie);

	return (
		<MainLayout>
			<MovieGrid>
				{upcomingMovies &&
					upcomingMovies.map((m: any) => (
						<MovieItem key={m.id} item={m}></MovieItem>
					))}
			</MovieGrid>
		</MainLayout>
	);
};

export default UpcomingPage;
