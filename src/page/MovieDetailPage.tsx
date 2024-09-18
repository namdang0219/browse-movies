import React from "react";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
	const params = useParams();
	const movieId: number | string | undefined = params?.movieId;

	return <div>MovieDetailPage {movieId}</div>;
};

export default MovieDetailPage;
