import { createSlice } from "@reduxjs/toolkit";

export interface IGlobalInitialState {
	darkMode: boolean;
	language: "en" | "ja";
}

const globalInitialState: IGlobalInitialState = {
	darkMode: true,
	language: "en",
};

const globalSlice = createSlice({
	name: "global",
	initialState: globalInitialState,
	reducers: {
		toggleDarkMode: (state) => {
			state.darkMode = !state.darkMode;
		},
		changeLanguage: (state, action) => {
			state.language = action.payload;
		},
	},
});

export const { toggleDarkMode, changeLanguage } = globalSlice.actions;

export default globalSlice.reducer;
