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
		<div className="grid grid-cols-[240px_calc(100vw-240px)] w-full h-full max-w-[100vw] overflow-hidden">
			<Sidebar />
			<div>
				<HeaderBar />
				<div className="overflow-y-scroll h-full max-h-[calc(100vh-60px)] custom-scroll">
					{children}
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
