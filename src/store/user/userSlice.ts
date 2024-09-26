import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "firebase-config";
import { createUserWithEmailAndPassword, User } from "firebase/auth";

interface IUserSlice {
	user: User | null;
	loading: boolean;
	error: string | null;
}

interface UserInput {
	email: string;
	password: string;
}

export const createUser = createAsyncThunk(
	"user/createUser",
	async ({ email, password }: UserInput, { rejectWithValue }) =>
		{
			try {
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				const user: User = userCredential.user;
				return {
					uid: user.uid,
					displayName: user.displayName,
					email: user.email,
					photoURL: user.photoURL,
				};
			} catch (error: any) {
				return rejectWithValue(error.message);
			}
		}
);

const initialState: IUserSlice = {
	user: null,
	loading: false,
	error: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createUser.pending, (state) => {
				state.loading = true;
			})
			.addCase(createUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload as User | null;
			})
			.addCase(createUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default userSlice.reducer;
