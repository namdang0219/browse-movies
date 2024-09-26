import { MovieItem } from "components/movie";
import MainLayout from "layout/MainLayout";
import MovieGrid from "layout/MovieGrid";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const NowPlayingPage = () => {
	const { nowplayingMovies } = useSelector((state: RootState) => state.movie);

	useEffect(() => {
		document.title = 'Now Playing';
	}, []);

	return (
		<MainLayout>
			<MovieGrid>
				{nowplayingMovies &&
					nowplayingMovies.map((m: any) => (
						<MovieItem key={m.id} item={m}></MovieItem>
					))}
			</MovieGrid>
		</MainLayout>
	);
};

export default NowPlayingPage;
