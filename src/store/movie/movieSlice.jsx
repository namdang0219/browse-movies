import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: 'nmsm',
};

export const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {
		addMovie: (state, action) => {
			state.movies.push(action.payload);
		},
	},
});

export const { addMovie } = movieSlice.actions;

export default movieSlice.reducer;
