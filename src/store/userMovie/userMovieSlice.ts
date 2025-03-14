import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "firebase-config";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

interface IUserMovie {
	favoriteLoading: boolean;
	favorite: string[];
}

const initialState: IUserMovie = {
	favoriteLoading: false,
	favorite: [],
};

export const addToUserFavorite = createAsyncThunk(
	"userMovie/addToUserFavorite",
	async (movieId: string, { rejectWithValue }) => {
		const docRef = doc(db, "userData", "492ku7m1TrkyqdBDLlWR");
		await updateDoc(docRef, { favorite: arrayUnion(movieId) });
	}
);

export const removeFromUserFavorite = createAsyncThunk(
	"userMovie/removeFromUserFavorite",
	async (movieId: string, { rejectWithValue }) => {
		const docRef = doc(db, "userData", "492ku7m1TrkyqdBDLlWR");
		await updateDoc(docRef, { favorite: arrayRemove(movieId) });
	}
);

const userMovieSlice = createSlice({
	name: "userMovie",
	initialState,
	reducers: {
		setFavorite: (state, action) => {
			return {
				...state,
				favorite: action.payload,
			};
		},
	},
	extraReducers: (builder) => {
		// addToUserFavorite
		builder.addCase(addToUserFavorite.pending, (state, action) => {
			state.favoriteLoading = true;
		});
		builder.addCase(addToUserFavorite.fulfilled, (state, action) => {
			state.favoriteLoading = false;
		});

		// removeFromUserFavorite
		builder.addCase(removeFromUserFavorite.pending, (state, action) => {
			state.favoriteLoading = true;
		});
		builder.addCase(removeFromUserFavorite.fulfilled, (state, action) => {
			state.favoriteLoading = false;
		});
	},
});

export const { setFavorite } = userMovieSlice.actions;

export default userMovieSlice.reducer;
