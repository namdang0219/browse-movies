import { auth } from "firebase-config";
import { useLanguage } from "hook/useLanguage";
import { useMovieDetail } from "hook/useMovieDetail";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store/store";

const SavedMovieSection = () => {
	const en = useLanguage().isEnglish;
	const { favorite } = useSelector((state: RootState) => state.userMovie);
	const { user } = useSelector((state: RootState) => state.user);
	const navigate = useNavigate();

	const reversedFavorite = [...favorite].reverse() || [];

	if (!user?.uid) return <></>;

	return (
		<div className="px-5 py-5 border-t dark:border-t-slate-700 border-t-slate-200">
			<h3 className="flex items-center gap-1 mb-2 ml-1 text-base font-semibold text-gray-700 dark:text-slate-400">
				<span className="inline-block">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={20}
						height={20}
						viewBox="0 0 24 24"
					>
						<path
							fill="currentColor"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.5}
							d="M6 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 3 8.08 3 9.2 3h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C18 4.52 18 5.08 18 6.2v13.305c0 .486 0 .729-.101.862a.5.5 0 0 1-.37.198c-.167.01-.369-.125-.773-.394L12 17l-4.756 3.17c-.404.27-.606.405-.774.395a.5.5 0 0 1-.369-.198C6 20.234 6 19.991 6 19.505z"
						></path>
					</svg>
				</span>
				{en ? "Saved Movies" : "お気に入り"}
			</h3>

			{reversedFavorite && reversedFavorite.length === 0 && (
				<span className="ml-2 text-sm text-slate-600">
					{en ? "Empty" : "データがまだありません"}
				</span>
			)}

			{/* 1 -> 5  */}
			{reversedFavorite && reversedFavorite.length > 0 && (
				<ul className="flex flex-col">
					{reversedFavorite.slice(0, 5).map((movieId, index) => (
						<SidebarSavedMovieItem key={index} movieId={movieId} />
					))}
				</ul>
			)}

			{/* 6 -> */}
			{reversedFavorite && reversedFavorite.length > 5 && (
				<div className="flex items-center text-sm text-gray-500">
					<div className="flex items-center flex-1 gap-1 px-2 py-2 select-none">
						... + {reversedFavorite.length - 5}{" "}
						{en ? "movies" : "映画"}
					</div>
					<div
						onClick={() => navigate("/saved")}
						className="flex items-center justify-center w-6 text-white transition-all rounded-full cursor-pointer aspect-square bg-slate-600 hover:bg-pink-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={14}
							height={14}
							viewBox="0 0 48 48"
						>
							<path
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={4}
								d="m19 12l12 12l-12 12"
							></path>
						</svg>
					</div>
				</div>
			)}
		</div>
	);
};
console.log(
	"🚀 ~ SavedMovieSection ~ !auth.currentUser?.uid:",
	!auth.currentUser?.uid
);
console.log(
	"🚀 ~ SavedMovieSection ~ !auth.currentUser?.uid:",
	!auth.currentUser?.uid
);
console.log(
	"🚀 ~ SavedMovieSection ~ !auth.currentUser?.uid:",
	!auth.currentUser?.uid
);
console.log(
	"🚀 ~ SavedMovieSection ~ !auth.currentUser?.uid:",
	!auth.currentUser?.uid
);
console.log(
	"🚀 ~ SavedMovieSection ~ !auth.currentUser?.uid:",
	!auth.currentUser?.uid
);

const SidebarSavedMovieItem = ({ movieId }: { movieId: string }) => {
	const { movieDetail } = useMovieDetail(movieId);
	const navigate = useNavigate();

	return (
		<li
			onClick={() => navigate(`/detail/${movieId}`)}
			className="flex items-center gap-1 px-2 py-2 text-sm rounded-md cursor-pointer select-none line-clamp-1 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-300"
		>
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={12}
					height={12}
					viewBox="0 0 48 48"
				>
					<path
						stroke="currentColor"
						strokeWidth={4}
						d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z"
					></path>
				</svg>
			</span>
			<span className="flex-1 line-clamp-1">{movieDetail?.title}</span>
		</li>
	);
};

export default SavedMovieSection;
