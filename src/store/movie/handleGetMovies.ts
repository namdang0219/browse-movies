import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
	setLoadingMovies,
	setNowplayingMovies,
	setPopularMovies,
	setTopRatedMovies,
	setUpcomingMovies,
} from "./movieSlice";

function requestMovies() {
	const movies = Promise.allSettled([
		axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_DB_KEY}`
		),
		axios.get(
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_DB_KEY}`
		),
		axios.get(
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_DB_KEY}`
		),
		axios.get(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_DB_KEY}`
		),
	]);
	return movies;
}

export default function* handleGetMovies() {
	try {
		setLoadingMovies(true);
		const response: Array<any> = yield call(requestMovies);
		const [popular, nowplaying, upcoming, topRated] = response;
		yield put(setPopularMovies(popular?.value?.data?.results));
		yield put(setNowplayingMovies(nowplaying?.value?.data?.results));
		yield put(setUpcomingMovies(upcoming?.value?.data?.results));
		yield put(setTopRatedMovies(topRated?.value?.data?.results));
		setLoadingMovies(false);
	} catch (error) {
		console.error("Error fetching movies:", error);
	}
}
