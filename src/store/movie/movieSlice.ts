import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	popularMovies: [],
	upcomingMovies: [],
	nowplayingMovies: [],
	topRatedMovies: [],
	loadingMovies: false,
};

const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {
		setPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		setUpcomingMovies: (state, action) => {
			state.upcomingMovies = action.payload;
		},
		setNowplayingMovies: (state, action) => {
			state.nowplayingMovies = action.payload;
		},
		setTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload;
		},
		setLoadingMovies: (state, action) => {
			return { ...state, loadingMovies: action.payload };
		},
		getMovies() {},
	},
});

export const {
	setPopularMovies,
	setUpcomingMovies,
	setNowplayingMovies,
	setTopRatedMovies,
	getMovies,
	setLoadingMovies
} = movieSlice.actions;

export default movieSlice.reducer;
