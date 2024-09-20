import { takeEvery } from "redux-saga/effects";
import { getUsers } from "./userSlice";
import { handleGetUser } from "./handleGetUser";

export default function* userSaga() {
	yield takeEvery(getUsers.type, handleGetUser);
}
