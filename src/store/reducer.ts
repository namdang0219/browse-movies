import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./global/globalSlice";
import movieSlice from "./movie/movieSlice";
import userSlice from "./user/userSlice";
import genreSlice from "./genre/genreSlice";

export const reducer = combineReducers({
	global: globalSlice,
	movie: movieSlice,
	user: userSlice,
	genre: genreSlice,
});
