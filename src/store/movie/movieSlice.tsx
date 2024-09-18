import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	popularMovies: [],
	upcomingMovies: [],
	nowplayingMovies: [],
	topRatedMovies: [],
};

const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {
		setPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
	},
});

export const { setPopularMovies } = movieSlice.actions;

export default movieSlice.reducer;
