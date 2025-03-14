import useSWR from "swr";
import { fetcher } from "util/func/fetcher";

export const useMovieDetail = (movieId: string) => {
	const { data: movieDetail, isLoading } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_DB_KEY}`,
		fetcher
	);
	return { movieDetail, isLoading };
};
