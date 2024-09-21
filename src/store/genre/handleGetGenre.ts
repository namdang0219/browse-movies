import axios from "axios";
import { call, put } from "redux-saga/effects";
import { setGenres } from "./genreSlice";

export interface IGenre {
	id: number;
	name: string;
}

function getGenre() {
	const data = axios.get(
		`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_DB_KEY}`
	);
	return data;
}

export function* handleGetGenre() {
	try {
		const response: { data: any } = yield call(getGenre);
		const genres: IGenre[] = response.data.genres;
		yield put(setGenres(genres));
	} catch (error) {
		console.log(error);
	}
}
