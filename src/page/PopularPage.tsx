import { MovieItem } from "components/movie";
import MainLayout from "layout/MainLayout";
import MovieGrid from "layout/MovieGrid";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const PopularPage = () => {
	const { popularMovies } = useSelector((state: RootState) => state.movie);

	useEffect(() => {
		document.title = 'Popular';
	}, []);

	return (
		<MainLayout>
			<MovieGrid>
				{popularMovies &&
					popularMovies.map((m: any) => (
						<MovieItem key={m.id} item={m}></MovieItem>
					))}
			</MovieGrid>
		</MainLayout>
	);
};

export default PopularPage;
