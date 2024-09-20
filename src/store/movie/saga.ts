import { takeEvery } from "redux-saga/effects";
import { getMovies } from "./movieSlice";
import handleGetMovies from "./handleGetMovies";

export default function* moviesSaga() {
	yield takeEvery(getMovies.type, handleGetMovies);
}
