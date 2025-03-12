import { useModal } from "context/modal-context";
import SignupModal from "./modal/SignupModal";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { useLanguage } from "hook/useLanguage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

const HeaderBar = () => {
	const { setModalShow, setModalContent } = useModal();
	const { user } = useSelector((state: RootState) => state.user);
	const en = useLanguage().isEnglish;
	const navigate = useNavigate();

	const handleLoginModal = () => {
		setModalContent(<SignupModal />);
		setModalShow(true);
	};

	const [searchText, setSearchText] = useState<string>("");
	const [searchResult, setSearchResult] = useState<Array<any>>([]);

	const handleSearchMovie = debounce(async (value) => {
		setSearchText(value);
		const res = await fetch(
			`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${process.env.REACT_APP_DB_KEY}`
		);
		const data = await res.json();
		setSearchResult(data.results);
	}, 500);

	const handleSearchButton = () => {
		if (searchText.trim() === "") return;
		const encodedQuery = encodeURIComponent(searchText).replace(
			/%20/g,
			"+"
		);
		navigate(`/search?query=${encodedQuery}`);
	};

	return (
		<div className="h-[60px] border-b border-b-borderColor dark:border-b-borderColorDark flex items-center">
			<div className="flex items-center justify-between flex-1 h-[40px] gap-6 px-4">
				<span>🎬</span>

				{/* search */}
				<div className="flex relative items-center gap-2 p-0.5 rounded-full h-full border border-borderColor dark:border-borderColorDark w-full max-w-[400px]">
					<input
						type="text"
						className="flex-1 h-full px-4 rounded-full outline-none bg-inherit"
						placeholder={en ? "Search..." : "検索..."}
						onChange={(e) => {
							handleSearchMovie(e.target.value);
						}}
					/>
					<button
						onClick={handleSearchButton}
						className="flex items-center justify-center h-full px-3 text-sm leading-none text-white transition-all rounded-full bg-primary hover:bg-primary-hover"
					>
						{en ? "Search" : "検索"}
					</button>

					{searchResult.length > 0 && (
						<div className="absolute z-20 w-full p-2 border dark:text-slate-300 min-h-20 rounded-xl top-12 dark:bg-slate-900 border-borderColor dark:border-borderColorDark">
							{searchResult &&
								searchResult.slice(0, 5).map((item, idx) => (
									<div
										key={item.id}
										className="flex items-center justify-between px-4 py-2 transition-all rounded-lg cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 "
										onClick={() =>
											navigate(`/detail/${item.id}`)
										}
									>
										<span>{`${item.title} (${new Date(
											item.release_date
										).getFullYear()})`}</span>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="18"
												height="18"
												viewBox="0 0 24 24"
											>
												<path
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M6 18L18 6m0 0H9m9 0v9"
												/>
											</svg>
										</span>
									</div>
								))}

							{searchResult.length > 5 && (
								<div onClick={handleSearchButton} className="flex items-center justify-center py-2 text-sm rounded-lg cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800">
									すべて
								</div>
							)}
						</div>
					)}
				</div>

				{/* user profile  */}
				{user ? (
					<div className="flex justify-end items-center gap-2 w-[220px] shrink-0">
						<div className="text-end">
							<p className="font-semibold">
								{user.displayName?.slice(0, 15)}
							</p>
							<p className="text-xs text-slate-400">
								{user.email?.slice(0, 20)}
							</p>
						</div>
						<div className="flex items-center justify-center h-10 font-medium bg-green-500 rounded-full aspect-square">
							<span className="leading-none">
								{user.displayName?.slice(0, 1)}
							</span>
						</div>
					</div>
				) : (
					<div className="h-full">
						<button
							onClick={handleLoginModal}
							className="h-full px-5 text-white transition-all rounded-full hover:bg-primary-hover bg-primary"
						>
							{en ? "Sign Up" : "新規登録"}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default HeaderBar;
