import { combineReducers } from "@reduxjs/toolkit";
import globalSlice from "./global/globalSlice";
import movieSlice from "./movie/movieSlice";

export const reducer = combineReducers({
	global: globalSlice,
	movie: movieSlice,
});
