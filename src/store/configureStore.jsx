import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movie/movieSlice";

export const store = configureStore({
	reducer: {
		movie: movieReducer,
	},
});
