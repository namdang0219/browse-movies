import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./global/globalSlice";
import movieSlice from "./movie/movieSlice";
import genreSlice from "./genre/genreSlice";
import userSlice from "./user/userSlice";
import userMovie from "./userMovie/userMovieSlice";

export const reducer = combineReducers({
	global: globalSlice,
	user: userSlice,
	movie: movieSlice,
	genre: genreSlice,
	userMovie: userMovie,
});
