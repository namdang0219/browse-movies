import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
	name: "genre",
	initialState: { genres: [] },
	reducers: {
		setGenres: (state, action) => {
			return { genres: action.payload };
		},
		getGenres() {},
	},
});

export const { setGenres, getGenres } = genreSlice.actions;
export default genreSlice.reducer;
