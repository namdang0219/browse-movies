import HeaderBar from "module/HeaderBar";
import Sidebar from "module/Sidebar";
import React from "react";

const MainLayout = ({ children }) => {
	return (
		<div className="flex">
			<Sidebar />
			<div>
				<HeaderBar />
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
