import { all, fork } from "redux-saga/effects";
import userSaga from "./user/saga";
import moviesSaga from "./movie/saga";

export default function* rootSaga() {
	yield all([
		// my saga here
		fork(userSaga),
		fork(moviesSaga),
	]);
}
