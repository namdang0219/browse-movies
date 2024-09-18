import MainLayout from "layout/MainLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPopularMovies } from "store/movie/movieSlice";
import useSWR from "swr";
import { fetcher } from "util/func/fetcher";
import PopolarSection from "module/homePage/PopolarSection";
import BannerSection from "../module/homePage/BannerSection";

const HomePage = () => {
	const dispatch = useDispatch();
	const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_DB_KEY}`,
		fetcher
	);

	useEffect(() => {
		if (data) {
			dispatch(setPopularMovies(data.results));
		}
	}, [data, dispatch]);

	return (
		<MainLayout>
			<BannerSection />
			<PopolarSection />
		</MainLayout>
	);
};

export default HomePage;
