import Nav from "./sidebar/Nav";
import Logout from "./sidebar/Logout";
import LogoSection from "./sidebar/LogoSection";
import SavedMovieSection from "./sidebar/SavedMovieSection";

const Sidebar = () => {
	return (
		<div className="flex flex-col h-screen border-r shrink-0 border-r-borderColor dark:border-borderColorDark">
			<LogoSection></LogoSection>
			<Nav></Nav>

			{/* saved movie */}
			<SavedMovieSection />

			<div className="mt-auto">
				<Logout></Logout>
			</div>
		</div>
	);
};

export default Sidebar;
