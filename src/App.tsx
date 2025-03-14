import { useFavorite } from "hook/useFavorite";
import HomePage from "page/HomePage";
import MovieDetailPage from "page/MovieDetailPage";
import MovieSavedPage from "page/MovieSavedPage";
import NowPlayingPage from "page/NowPlayingPage";
import PageNotFound from "page/PageNotFound";
import PopularPage from "page/PopularPage";
import SearchResultPage from "page/SearchResultPage";
import TopRatedPage from "page/TopRatedPage";
import UpcomingPage from "page/UpcomingPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getGenres } from "store/genre/genreSlice";
import { getMovies } from "store/movie/movieSlice";
import { getUser } from "store/user/userSlice";

const App = () => {
	const dispatch = useDispatch();
	useFavorite();

	useEffect(() => {
		dispatch(getMovies());
		dispatch(getGenres());
		dispatch(getUser());
	}, [dispatch]);

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/popular" element={<PopularPage />} />
			<Route path="/top-rated" element={<TopRatedPage />} />
			<Route path="/now-playing" element={<NowPlayingPage />} />
			<Route path="/up-coming" element={<UpcomingPage />} />
			<Route path="/saved" element={<MovieSavedPage />} />
			<Route path="/detail/:movieId" element={<MovieDetailPage />} />
			<Route path="/search" element={<SearchResultPage />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export default App;
