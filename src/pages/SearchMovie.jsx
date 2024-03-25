import { MovieItem } from "components/movie";
import { ListLarge } from "modules/listLarge";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "utils/fetchSWR";

const SearchMovie = () => {
  const { query } = useParams()
	const { data, isLoading } = useSWR(
		`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`,
		fetcher
	);
	const results = data?.results || [];
	console.log("🚀 ~ SearchMovie ~ data:", data)
	return (
		<ListLarge>
			{results.length > 0 &&
				results.map((item) => (
					<MovieItem
						key={item.id}
						data={item}
						loading={isLoading}
					></MovieItem>
				))}
		</ListLarge>
	);
};

export default SearchMovie;
