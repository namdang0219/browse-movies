import MainLayout from "layout/MainLayout";
import BannerSection from "../module/homePage/BannerSection";
import HomeSliderSection from "../components/slider/HomeSliderSection";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { Modal } from "components/modal";
import { useEffect } from "react";

const HomePage = () => {
	const { popularMovies, nowplayingMovies, topRatedMovies } = useSelector(
		(state: RootState) => state.movie
	);

	useEffect(() => {
    document.title = "Mymovie | Home";
  }, []);

	return (
		<MainLayout>
			<Modal />
			<BannerSection />
			<div className="flex flex-col gap-10 mt-6">
				<HomeSliderSection
					movieList={popularMovies}
					title="Popular"
					seeMore="/popular"
				/>
				<HomeSliderSection
					movieList={nowplayingMovies}
					title="Now Playing"
					seeMore="/now-playing"
				/>
				<HomeSliderSection
					movieList={topRatedMovies}
					title="Top Rated"
					seeMore="/top-rated"
				/>
			</div>
		</MainLayout>
	);
};

export default HomePage;
