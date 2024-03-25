import { Button } from "components/button";
import { useAuth } from "contexts/auth-context";
import { useModal } from "contexts/modal-context";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
	const { pathname } = useLocation();
	const { handleOpenSignUp } = useModal();
	const { currentUser } = useAuth();
	// console.log("🚀 ~ Header ~ currentUser:", currentUser)
	const navigate = useNavigate();
	const [search, setSearch] = useState("");

	const setHeaderTitle = (pathname) => {
		if (pathname === "/") {
			return "Home";
		} else if (pathname.includes("movie")) {
			return "Movie Detail";
		} else if (pathname.includes("popular")) {
			return "Popular";
		} else if (pathname === "/top_rated") {
			return "Top Rated";
		} else if (pathname === "/upcoming") {
			return "Up Coming";
		} else if (pathname.includes("search")) {
			return "Search";
		}else if (pathname === '/now_playing') {
			return "Now Playing";
		} else return "Unknown Page";
	};

	return (
		<div className="flex items-center px-6 h-[80px] w-full">
			<h2 className="text-xl font-semibold w-[150px] truncate">
				{setHeaderTitle(pathname)}
			</h2>
			<div className="flex items-center justify-center mx-auto space-x-4 search">
				<input
					type="text"
					placeholder="Search..."
					className="px-6 h-[40px] bg-white bg-opacity-10 rounded-full outline-none focus:outline-blue-500"
					// onFocus={() => navigate('/search')}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<Button rounded onClick={() => navigate(`/search/${search}`)}>
					Search
				</Button>
			</div>
			{currentUser ? (
				<div className="flex items-center gap-x-2">
					<span className="font-medium text-pink-500">
						Welcome back,{" "}
						<span className="text-white">
							{currentUser?.displayName?.slice(0, 10)}{currentUser?.displayName?.length > 10 && '...'}
						</span>
					</span>
					<div className="flex items-center justify-center font-bold uppercase bg-pink-500 rounded-full size-7">
						{currentUser?.displayName?.slice(0,1)}
					</div>
				</div>
			) : (
				<Button onClick={handleOpenSignUp} className="rounded-md">
					Sign Up
				</Button>
			)}
		</div>
	);
};

export default Header;
