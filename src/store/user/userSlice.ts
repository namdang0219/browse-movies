import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	displayName: "",
	email: "",
	photoURL: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => ({
			...state,
			displayName: action.payload.displayName,
			email: action.payload.email,
		}),
		getUser() {},
	},
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
