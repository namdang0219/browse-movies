import HomePage from "page/HomePage";
import NowPlayingPage from "page/NowPlayingPage";
import PopularPage from "page/PopularPage";
import TopRatedPage from "page/TopRatedPage";
import UpcomingPage from "page/UpcomingPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/popular" element={<PopularPage />} />
			<Route path="/top-rated" element={<TopRatedPage />} />
			<Route path="/now-playing" element={<NowPlayingPage />} />
			<Route path="/up-coming" element={<UpcomingPage />} />
		</Routes>
	);
};

export default App;
