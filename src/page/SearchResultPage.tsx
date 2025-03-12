import { MovieItem } from "components/movie";
import MainLayout from "layout/MainLayout";
import MovieGrid from "layout/MovieGrid";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchResultPage = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get("query");
	const [results, setResults] = useState<any[]>([]);
	console.log("🚀 ~ SearchResultPage ~ results:", results);

	useEffect(() => {
		const getResults = async () => {
			const res = await fetch(
				`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_DB_KEY}`
			);
			const data = await res.json();
			setResults(data.results);
		};

		getResults();
	}, [query]);

	return (
		<MainLayout>
			<MovieGrid>
				{results.length > 0 &&
					results.map((m: any) => (
						<MovieItem key={m.id} item={m}></MovieItem>
					))}
			</MovieGrid>
		</MainLayout>
	);
};

export default SearchResultPage;
