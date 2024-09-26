import { takeEvery } from "redux-saga/effects";
import { getUser } from "./userSlice";
import handleGetUser from "./handleGetUser";

export function* userSaga() {
	yield takeEvery(getUser.type, handleGetUser);
}
