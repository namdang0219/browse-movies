import { MovieItem } from "components/movie";
import { ListLarge } from "modules/listLarge";
import React from "react";
import useSWR from "swr";
import { fetcher } from "utils/fetchSWR";

const TopRated = () => {
	const { data, isLoading } = useSWR(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`,
		fetcher
	);
	const results = data?.results || [];
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

export default TopRated;
