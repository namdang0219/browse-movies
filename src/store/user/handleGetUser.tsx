import { call, put } from "redux-saga/effects";
import requestUser from "./requestUser";
import { setUser } from "./userSlice";

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
}

// This is worker file

export function* handleGetUser() {
	try {
		console.log("Fetching user");
		const response: { data: User[] } = yield call(requestUser);
		const users = response.data;
		yield put(setUser(users));
	} catch (error) {
		console.log(error);
	}
}
