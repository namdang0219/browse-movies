import { LogoutIcon, SunIcon } from "components/icon/nav";
import { useState } from "react";
import MoonIcon from "../../components/icon/nav/MoonIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { toggleDarkMode } from "store/global/globalSlice";

const Logout = () => {
	const [showSetting, setShowSetting] = useState<boolean>(true);
	const { darkMode } = useSelector((state: RootState) => state.global);
	const dispatch = useDispatch();

	const handleDarkMode = () => {
		dispatch(toggleDarkMode());
	};

	return (
		<div className="relative flex items-center justify-between p-4">
			<button className="flex items-center gap-4 py-2.5 pl-3 rounded-md transition-all">
				<LogoutIcon></LogoutIcon>
				<span>Log Out</span>
			</button>
			<button
				onClick={() => setShowSetting(!showSetting)}
				className="pr-3 group"
			>
				<div className="transition-all duration-300 origin-center group-hover:rotate-90">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={24}
						height={24}
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
						></path>
					</svg>
				</div>
			</button>
			{showSetting && (
				<div
					className={`absolute w-[180px] p-1 z-10 border border-borderColor dark:border-borderColorDark dark:bg-slate-900 bottom-16 right-6 rounded-md`}
				>
					<div
						onClick={handleDarkMode}
						className="flex items-center justify-between p-2 rounded-md cursor-pointer top-10 left-10 dark:hover:bg-slate-700 hover:bg-slate-200"
					>
						<span>Dark Mode</span>
						<div className="flex items-center gap-2">
							<span className="dark:text-slate-500 text-slate-300">
								{darkMode ? "On" : "Off"}
							</span>
							<span>{darkMode ? <MoonIcon /> : <SunIcon />}</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Logout;
