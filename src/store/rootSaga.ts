import { all, fork } from "redux-saga/effects";
import moviesSaga from "./movie/saga";
import genreSaga from "./genre/saga";

export default function* rootSaga() {
	yield all([
		fork(moviesSaga),
		fork(genreSaga)
	]);
}
