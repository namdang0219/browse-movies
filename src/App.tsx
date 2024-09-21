import HomePage from "page/HomePage";
import MovieDetailPage from "page/MovieDetailPage";
import NowPlayingPage from "page/NowPlayingPage";
import PageNotFound from "page/PageNotFound";
import PopularPage from "page/PopularPage";
import TopRatedPage from "page/TopRatedPage";
import UpcomingPage from "page/UpcomingPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getMovies } from "store/movie/movieSlice";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovies());
	}, [dispatch]);

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/popular" element={<PopularPage />} />
			<Route path="/top-rated" element={<TopRatedPage />} />
			<Route path="/now-playing" element={<NowPlayingPage />} />
			<Route path="/up-coming" element={<UpcomingPage />} />
			<Route path="/detail/:movieId" element={<MovieDetailPage />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default App;
