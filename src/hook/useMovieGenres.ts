import { useSelector } from "react-redux";
import { IGenre } from "store/genre/handleGetGenre";
import { RootState } from "store/store";

export default function useMovieGenres(
	genre_ids: (string | number)[]
): string[] {
	const { genres } = useSelector((state: RootState) => state.genre);

	const movieGenres: string[] = [];

	genres.forEach((genre: IGenre) => {
		if (genre_ids.includes(genre.id)) {
			movieGenres.push(genre.name);
		}
	});

	return movieGenres;
}
