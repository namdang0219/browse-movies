import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		loading: false,
		users: [],
	},
	reducers: {
		setUser: (state, action) => {
			return { ...state, users: action.payload };
		},
		getUsers() {},
	},
});

export const { getUsers, setUser } = userSlice.actions;
export default userSlice.reducer;
