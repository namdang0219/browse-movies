import { ReactNode } from "react";
import HeaderBar from "module/HeaderBar";
import Sidebar from "module/Sidebar";

const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex w-full h-[100vh]">
			<Sidebar />
			<div className="flex-1">
				<HeaderBar />
				<div className="flex flex-1">{children}</div>
			</div>
		</div>
	);
};

export default MainLayout;
