import {
	HomeIcon,
	PopularIcon,
	TopRatedIcon,
	NowPlayingIcon,
	UpcomingIcon,
} from "components/icon/nav";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "store/store";

const Nav = () => {
	const { language } = useSelector((state: RootState) => state.global);

	return (
		<div className="flex flex-col flex-1 gap-2 p-4">
			{navigations.map((n, idx) => (
				<div key={idx}>
					<NavLink
						to={n.to}
						className={({ isActive }) =>
							`flex items-center gap-4 px-3 py-2.5 rounded-md transition-all select-none ${
								isActive
									? "bg-primary text-white pointer-events-none"
									: " dark:hover:bg-slate-700 hover:bg-slate-100"
							}`
						}
					>
						{n.icon}
						<span>{n.label[language]}</span>
					</NavLink>
				</div>
			))}
		</div>
	);
};

interface INavagations {
	label: { ja: string; en: string };
	to: string;
	icon: ReactNode;
}

const navigations: INavagations[] = [
	{
		label: { en: "Home", ja: "ホーム" },
		to: "/",
		icon: <HomeIcon />,
	},
	{
		label: { en: "Popular", ja: "人気" },
		to: "/popular",
		icon: <PopularIcon />,
	},
	{
		label: { en: "Top Rated", ja: "最高評価" },
		to: "/top-rated",
		icon: <TopRatedIcon />,
	},
	{
		label: { en: "Now Playing", ja: "上映中" },
		to: "/now-playing",
		icon: <NowPlayingIcon />,
	},
	{
		label: { en: "Up Coming", ja: "公開予定" },
		to: "/up-coming",
		icon: <UpcomingIcon />,
	},
];

export default Nav;
