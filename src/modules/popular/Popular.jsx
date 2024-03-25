import { CardList } from "components/card";
import { Title, ViewAll } from "components/title";
import React from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "utils/fetchSWR";

const Popular = () => {
	const navigate = useNavigate()
  const {data, isLoading} = useSWR(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`, fetcher)
  const results = data?.results || []
	return (
		<div className="mt-6 mb-8">
			<div className="flex items-center justify-between px-6">
				<Title>Popular</Title>
				<ViewAll onClick={() => navigate('/popular')} >View All</ViewAll>
			</div>
			<CardList listMovie={results} loading={isLoading}></CardList>
		</div>
	);
};

export default Popular;
