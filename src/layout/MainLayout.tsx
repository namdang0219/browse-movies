import { ReactNode, useEffect } from "react";
import HeaderBar from "module/HeaderBar";
import Sidebar from "module/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const MainLayout = ({ children }: { children: ReactNode }) => {
	const { darkMode } = useSelector((state: RootState) => state.global);

	useEffect(() => {
		const doc = document.querySelector("html");
		if (darkMode) {
			doc?.classList.add("dark");
		} else if (!darkMode) {
			doc?.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<div className="flex w-full h-[100vh]">
			<Sidebar />
			<div className="flex-1">
				<HeaderBar />
				{children}
			</div>
		</div>
	);
};

export default MainLayout;
