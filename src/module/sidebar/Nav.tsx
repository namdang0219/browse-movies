import {
	HomeIcon,
	PopularIcon,
	TopRatedIcon,
	NowPlayingIcon,
	UpcomingIcon,
} from "components/icon/nav";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<div className="flex flex-col flex-1 gap-2 p-4">
			{navigations.map((n) => (
				<div key={n.label}>
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
						<span>{n.label}</span>
					</NavLink>
				</div>
			))}
		</div>
	);
};

interface INavagations {
	label: string;
	to: string;
	icon: ReactNode;
}

const navigations: INavagations[] = [
	{
		label: "Home",
		to: "/",
		icon: <HomeIcon />,
	},
	{
		label: "Popular",
		to: "/popular",
		icon: <PopularIcon />,
	},
	{
		label: "Top Rated",
		to: "/top-rated",
		icon: <TopRatedIcon />,
	},
	{
		label: "Now Playing",
		to: "/now-playing",
		icon: <NowPlayingIcon />,
	},
	{
		label: "Up Coming",
		to: "/up-coming",
		icon: <UpcomingIcon />,
	},
];

export default Nav;
