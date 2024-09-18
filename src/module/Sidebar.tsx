import Nav from "./sidebar/Nav";
import Logout from "./sidebar/Logout";
import LogoSection from "./sidebar/LogoSection";

const Sidebar = () => {
	return (
		<div className="flex flex-col h-screen border-r shrink-0 border-r-borderColor dark:border-borderColorDark">
			<LogoSection></LogoSection>
			<Nav></Nav>
			<Logout></Logout>
		</div>
	);
};

export default Sidebar;
