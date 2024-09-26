import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "firebase-config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	User,
} from "firebase/auth";

interface IInitialState {
	user: User | null;
	loading: boolean;
	error: string | null;
}

export const createUser = createAsyncThunk(
	"user/createUser",
	async (
		{
			email,
			password,
			displayName,
		}: { email: string; password: string; displayName: string },
		{ rejectWithValue }
	) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			if (auth.currentUser) {
				await updateProfile(auth.currentUser, {
					displayName: displayName,
				});
			}
			const user: User = userCredential.user;
			return {
				uid: user.uid,
				displayName: user.displayName,
				email: user.email,
			};
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

export const loginUser = createAsyncThunk(
	"user/loginUser",
	async (
		{ email, password }: { email: string; password: string },
		{ rejectWithValue }
	) => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user: User = userCredential.user;
			return {
				uid: user.uid,
				displayName: user.displayName,
				email: user.email,
			};
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const createUserBuilder = (builder: any) => {
	builder
		.addCase(createUser.pending, (state: IInitialState) => {
			state.loading = true;
		})
		.addCase(
			createUser.fulfilled,
			(state: IInitialState, action: PayloadAction<User>) => {
				state.loading = false;
				state.user = action.payload as User | null;
				state.error = null;
			}
		)
		.addCase(
			createUser.rejected,
			(state: IInitialState, action: PayloadAction<User>) => {
				state.loading = false;
				state.user = null;
				state.error = action.payload as unknown as string;
			}
		);
};

const loginUserBuilder = (builder: any) => {
	builder
		.addCase(loginUser.pending, (state: IInitialState) => {
			state.loading = true;
		})
		.addCase(
			loginUser.fulfilled,
			(state: IInitialState, action: PayloadAction<User>) => {
				state.loading = false;
				state.user = action.payload as User | null;
				state.error = null;
			}
		)
		.addCase(
			loginUser.rejected,
			(state: IInitialState, action: PayloadAction<User>) => {
				state.loading = false;
				state.user = null;
				state.error = action.payload as unknown as string;
			}
		);
};

const initialState: IInitialState = {
	user: null,
	loading: false,
	error: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			return {
				...state,
				user: action.payload,
			};
		},
		getUser() {},
	},
	extraReducers: (builder) => {
		createUserBuilder(builder);
		loginUserBuilder(builder);
	},
});

export const { setUser, getUser } = userSlice.actions;

export default userSlice.reducer;
