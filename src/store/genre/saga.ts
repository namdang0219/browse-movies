import { takeLatest } from "redux-saga/effects";
import { getGenres } from "./genreSlice";
import { handleGetGenre } from "./handleGetGenre";

export default function* genreSaga() {
	yield takeLatest(getGenres.type, handleGetGenre);
}
