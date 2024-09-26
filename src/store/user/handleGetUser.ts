import { auth } from "firebase-config";
import { onAuthStateChanged, User } from "firebase/auth";
import { call, put } from "redux-saga/effects";
import { setUser } from "./userSlice";
import { toast } from "react-toastify";

function requestUser(): Promise<User | null> {
	return new Promise((resolve, reject) => {
		onAuthStateChanged(
			auth,
			(user) => {
				if (user) {
					resolve({
						uid: user.uid,
						displayName: user.displayName,
						email: user.email,
					} as User);
				} else {
					resolve(null);
				}
			},
			reject
		);
	});
}

export default function* handleGetUser() {
	try {
		const user: User = yield call(requestUser);
		if (user) {
			yield put(setUser(user));
		}
	} catch (error: any) {
		toast.error("Error fetching user:" + error.message);
	}
}
