import { createSlice } from "@reduxjs/toolkit";

export interface IGlobalInitialState {
	darkMode: boolean;
}

const globalInitialState: IGlobalInitialState = {
	darkMode: true,
};

const globalSlice = createSlice({
	name: "global",
	initialState: globalInitialState,
	reducers: {
		toggleDarkMode: (state) => {
			state.darkMode = !state.darkMode;
		},
	},
});

export const { toggleDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
