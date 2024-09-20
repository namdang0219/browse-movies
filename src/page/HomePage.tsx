import MainLayout from "layout/MainLayout";
import PopularSection from "module/homePage/PopularSection";
import BannerSection from "../module/homePage/BannerSection";

const HomePage = () => {
	return (
		<MainLayout>
			<BannerSection />
			<PopularSection />
		</MainLayout>
	);
};

export default HomePage;
