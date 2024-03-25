import { CardList } from "components/card";
import { Title, ViewAll } from "components/title";
import React from "react";
import useSWR from "swr";
import { fetcher } from "utils/fetchSWR";

const TopRated = () => {
  const {data} = useSWR(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`, fetcher)
  const results = data?.results || []
	return (
		<div className="mt-6 mb-8">
			<div className="flex items-center justify-between px-6">
				<Title>Top Rated</Title>
				<ViewAll>View All</ViewAll>
			</div>
			<CardList listMovie={results}></CardList>
		</div>
	);
};

export default TopRated;