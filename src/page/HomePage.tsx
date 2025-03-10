import MainLayout from "layout/MainLayout";
import BannerSection from "../module/homePage/BannerSection";
import HomeSliderSection from "../components/slider/HomeSliderSection";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { Modal } from "components/modal";
import { useEffect } from "react";
import { useLanguage } from "hook/useLanguage";

const HomePage = () => {
	const { popularMovies, nowplayingMovies, topRatedMovies } = useSelector(
		(state: RootState) => state.movie
	);
	const en = useLanguage().isEnglish

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
					title={en ? "Popular": '人気'}
					seeMore="/popular"
				/>
				<HomeSliderSection
					movieList={nowplayingMovies}
					title={en ? "Now Playing": '上映中'}
					seeMore="/now-playing"
				/>
				<HomeSliderSection
					movieList={topRatedMovies}
					title={en ? "Top Rated": '最高評価'}
					seeMore="/top-rated"
				/>
			</div>
		</MainLayout>
	);
};

export default HomePage;
