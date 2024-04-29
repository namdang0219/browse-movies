import SavedItem from "components/SavedItem";
import { useAuth } from "contexts/auth-context";
import { signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "firebaseConfig";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Nav = () => {
	const navigate = useNavigate();
	const { currentUser } = useAuth();
	const [savedMovies, setSavedMovies] = useState([]);

	const handleSignOut = () => {
		signOut(auth);
		toast.success("Sign Out Succesfully!");
	};

	useEffect(() => {
		if (currentUser) {
			const getSavedMovies = async () => {
				try {
					const docRef = doc(db, "users", currentUser.uid);
					onSnapshot(docRef, (doc) => {
						setSavedMovies(doc.data()?.savedMovies === undefined ? [] : doc.data()?.savedMovies);
					});
				} catch (error) {
					console.log(error);
				}
			};

			getSavedMovies();
		}
	}, [currentUser]);

	return (
		<div className="flex flex-col justify-between p-5 h-[100vh] bg-bg17">
			<div>
				<h1
					onClick={() => navigate("/")}
					className="text-[32px] group cursor-pointer mb-5 font-Calistoga tracking-wider flex items-center gap-x-2 font-semibold text-pink-500"
				>
					<span className="text-blue-400 xl:hidden">My</span>
					<span className="xl:hidden">Movie</span>
					<span className="transition-all opacity-50 group-hover:opacity-80 xl:mx-auto">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={40}
							height={40}
							viewBox="0 0 24 24"
						>
							<path
								fill="white"
								d="M18.001 20H20v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.985 9.985 0 0 1-3.999 8M12 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-4 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-4 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
							></path>
						</svg>
					</span>
				</h1>
				<div>
					{navItems.map((item) => (
						<NavLink
							key={item.id}
							to={item.to}
							className={({ isActive }) =>
								isActive
									? "bg-pink-600 px-4 mb-2 transition-all py-4 flex items-center gap-x-4 rounded-xl font-semibold "
									: "px-4 hover:bg-gray-800 mb-2 transition-all py-4 flex items-center gap-x-4 rounded-xl font-semibold "
							}
						>
							<span>{item.icon}</span>
							<span className="xl:hidden">{item.name}</span>
						</NavLink>
					))}
				</div>
				<div>
					{currentUser && savedMovies.length > 0  && <h5 className="mb-2 ml-4 font-semibold text-pink-500">
						Saved movie
					</h5>}
					{savedMovies && savedMovies.length > 0 &&
						savedMovies
							.slice(0, 4)
							.map((item) => (
								<SavedItem
									key={item}
									movieId={item}
								></SavedItem>
							))}
					{savedMovies && savedMovies.length > 4 && (
						<span onClick={() => navigate(`/savedMovies`)} className="px-2 py-2 mb-1 text-[12px] ml-4 font-semibold transition-all hover:bg-gray-800 gap-x-4 rounded-xl opacity-60 hover:opacity-100 cursor-pointer">
							View all...
						</span>
					)}
				</div>
			</div>
			{/* logout button appeear when user is logined  */}
			{currentUser && (
				<div
					className="flex items-center px-4 py-4 mb-2 font-semibold transition-all hover:bg-gray-800 gap-x-4 rounded-xl "
					onClick={handleSignOut}
				>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={32}
							height={32}
							viewBox="0 0 24 24"
						>
							<path
								fill="white"
								d="M5.615 20q-.69 0-1.152-.462Q4 19.075 4 18.385V5.615q0-.69.463-1.152Q4.925 4 5.615 4h6.404v1H5.615q-.23 0-.423.192Q5 5.385 5 5.615v12.77q0 .23.192.423q.193.192.423.192h6.404v1zm10.847-4.462l-.702-.719l2.319-2.319H9.192v-1h8.887l-2.32-2.32l.703-.718L20 12z"
							></path>
						</svg>
					</span>
					<span className="xl:hidden">Sign Out</span>
				</div>
			)}
		</div>
	);
};

const navItems = [
	{
		id: 1,
		name: "Home",
		to: "/",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={32}
				height={32}
				viewBox="0 0 16 16"
			>
				<path
					fill="white"
					d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"
				></path>
			</svg>
		),
	},
	{
		id: 2,
		name: "Popular",
		to: "/popular",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={32}
				height={32}
				viewBox="0 0 14 14"
			>
				<g
					fill="none"
					stroke="white"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M9.5 3.5h4v4"></path>
					<path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5"></path>
				</g>
			</svg>
		),
	},
	{
		id: 5,
		name: "Now Playing",
		to: "/now_playing",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={32}
				height={32}
				viewBox="0 0 24 24"
			>
				<path
					fill="white"
					d="M18.54 9L8.88 3.46a3.42 3.42 0 0 0-5.13 3v11.12A3.42 3.42 0 0 0 7.17 21a3.43 3.43 0 0 0 1.71-.46L18.54 15a3.42 3.42 0 0 0 0-5.92Zm-1 4.19l-9.66 5.62a1.44 1.44 0 0 1-1.42 0a1.42 1.42 0 0 1-.71-1.23V6.42a1.42 1.42 0 0 1 .71-1.23A1.51 1.51 0 0 1 7.17 5a1.54 1.54 0 0 1 .71.19l9.66 5.58a1.42 1.42 0 0 1 0 2.46Z"
				></path>
			</svg>
		),
	},
	{
		id: 3,
		name: "Top Rated",
		to: "/top_rated",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={32}
				height={32}
				viewBox="0 0 16 16"
			>
				<path
					fill="white"
					d="M7.194 2.101a.9.9 0 0 1 1.614 0l1.521 3.082l3.401.495a.9.9 0 0 1 .5 1.535l-2.462 2.399l.581 3.387a.9.9 0 0 1-1.306.949l-3.042-1.6l-3.042 1.6a.9.9 0 0 1-1.306-.949l.58-3.387l-2.46-2.4a.9.9 0 0 1 .499-1.534l3.4-.495zM8 2.726L6.546 5.673a.9.9 0 0 1-.677.492l-3.253.473L4.97 8.932a.9.9 0 0 1 .258.797l-.555 3.24l2.91-1.53a.9.9 0 0 1 .837 0l2.91 1.53l-.556-3.24a.9.9 0 0 1 .258-.797l2.354-2.294l-3.253-.473a.9.9 0 0 1-.677-.492z"
				></path>
			</svg>
		),
	},
	{
		id: 4,
		name: "Up Coming",
		to: "/upcoming",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={32}
				height={32}
				viewBox="0 0 24 24"
			>
				<path
					fill="white"
					d="M7.25 12.5L4.75 9H3.5v6h1.25v-3.5L7.3 15h1.2V9H7.25zM9.5 15h4v-1.25H11v-1.11h2.5v-1.26H11v-1.12h2.5V9h-4zm9.75-6v4.5h-1.12V9.99h-1.25v3.52h-1.13V9H14.5v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V9z"
				></path>
			</svg>
		),
	},
];

export default Nav;
