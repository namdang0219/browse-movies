import { createSlice } from "@reduxjs/toolkit";

export interface IGlobalInitialState {
	darkMode: boolean;
	showModal: boolean;
}

const globalInitialState: IGlobalInitialState = {
	darkMode: true,
	showModal: false,
};

const globalSlice = createSlice({
	name: "global",
	initialState: globalInitialState,
	reducers: {
		toggleDarkMode: (state) => {
			state.darkMode = !state.darkMode;
		},
		setShowModal: (state, action) => ({
			...state,
			showModal: action.payload,
		}),
	},
});

export const { toggleDarkMode, setShowModal } = globalSlice.actions;

export default globalSlice.reducer;
