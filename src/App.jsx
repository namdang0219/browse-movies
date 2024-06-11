import { Wrapper } from "layouts";
import Home from "pages/Home";
import MovieDetail from "pages/MovieDetail";
import NowPlaying from "pages/NowPlaying";
import Popular from "pages/Popular";
import SavedMovies from "pages/SavedMovies";
import SearchMovie from "pages/SearchMovie";
import TopRated from "pages/TopRated";
import UpComing from "pages/UpComing";
import React from "react";
import { Routes, Route,  } from "react-router-dom";


const App = () => {
	
	return (
			<Routes>
				<Route path="/" Component={Wrapper}>
					<Route path="/" Component={Home} />
					<Route path="/popular" Component={Popular} />
					<Route path="/now_playing" Component={NowPlaying} />
					<Route path="/top_rated" Component={TopRated} />
					<Route path="/upcoming" Component={UpComing} />
					<Route path="/savedMovies" Component={SavedMovies} />
					<Route path="/movie/:movieId" Component={MovieDetail} />
					<Route path="/search" Component={SearchMovie} />
					<Route path="/search/:query" Component={SearchMovie} />
				</Route>
			</Routes>
	);
};

export default App;
