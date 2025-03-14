import MainLayout from "layout/MainLayout";
import { useParams } from "react-router-dom";
import { apiLinks } from "util/constant/api-link";
import CastSection, {
	CastSectionSkeleton,
} from "../module/movieDetailPage/CastSection";
import InfoSection, {
	InfoSectionSkeleton,
} from "module/movieDetailPage/InfoSection";
import VideoSection, {
	VideoSectionSkeleton,
} from "module/movieDetailPage/VideoSection";
import { StarIcon } from "components/icon/movieDetail";
import { IGenre } from "store/genre/handleGetGenre";
import ReviewSection from "module/movieDetailPage/ReviewSection";
import SimilarSection, {
	SimilarSectionSkeleton,
} from "module/movieDetailPage/SimilarSection";
import { useEffect } from "react";
import { useLanguage } from "hook/useLanguage";
import { useDispatch } from "react-redux";
import {
	addToUserFavorite,
	removeFromUserFavorite,
} from "store/userMovie/userMovieSlice";
import { AppDispatch, RootState } from "store/store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useMovieDetail } from "hook/useMovieDetail";

const MovieDetailPage = () => {
	const { movieId } = useParams();

	const { isLoading, movieDetail } = useMovieDetail(movieId as string);

	const en = useLanguage().isEnglish;

	const dispatch = useDispatch<AppDispatch>();
	const { favorite, favoriteLoading } = useSelector(
		(state: RootState) => state.userMovie
	);

	const title = movieDetail?.title || "Loading...";

	useEffect(() => {
		document.title = title;
	}, [title]);

	const genres: string[] =
		movieDetail?.genres.map((g: IGenre) => g.name) || [];

	const handleFavoriteMovie = async () => {
		if (!favorite.includes(String(movieId))) {
			await dispatch(addToUserFavorite(String(movieId)));
			toast.success(en ? "Movie is saved 🎉" : "映画保存済み！🎉");
		} else if (favorite.includes(String(movieId))) {
			await dispatch(removeFromUserFavorite(String(movieId)));
			toast.success(en ? "Movie is removed 🎉" : "映画削除済み！🎉");
		}
	};

	if (isLoading) return <MovieDetailSkeleton />;

	return (
		<MainLayout>
			<div className=" grid grid-cols-[1fr_400px] relative">
				{/* movie detail container  */}
				<div className="px-4 pt-4 mb-20">
					{/* banner  */}
					<div className="w-full aspect-[16/6] rounded-lg overflow-hidden">
						<img
							src={`${apiLinks.originalImage}/${movieDetail?.backdrop_path}`}
							alt="movie-banner"
							className="object-cover object-top w-full h-full"
						/>
					</div>

					{/* detail container  */}
					<div className="px-20 mb-6">
						{/* poster and detail */}
						<div className="flex items-center gap-6 mt-8">
							{/* poster  */}
							<div className="w-[160px] aspect-[3/4] bg-slate-800 flex items-center justify-center">
								<img
									src={`${apiLinks.w500Image}/${movieDetail?.poster_path}`}
									alt="poster-image"
									className="object-contain object-center w-full h-full"
								/>
							</div>

							{/* detail  */}
							<div className="flex flex-col gap-1">
								<h1 className="text-3xl">
									{movieDetail?.title}
								</h1>
								<div className="flex flex-col gap-1 text-slate-400">
									<p className="flex items-center gap-2">
										<span>
											{en ? "Rate:" : "評価："}
											{movieDetail?.vote_average.toFixed(
												1
											)}
										</span>
										<StarIcon />
									</p>
									<p>
										{en ? "Release Date:" : "公開日："}
										{movieDetail?.release_date}
									</p>
									<p>
										{en ? "Language:" : "言語："}
										{movieDetail?.original_language}
									</p>
									<p>
										{en ? "Genres:" : "ジャンル："}
										{genres.join(", ")}
									</p>

									<button
										onClick={handleFavoriteMovie}
										className="flex items-center justify-center w-40 mt-2 text-sm text-white transition-all bg-pink-500 rounded-md h-9 hover:bg-pink-600"
									>
										{favoriteLoading ? (
											<div className="loader" />
										) : favorite &&
										  favorite.includes(String(movieId)) ? (
											en ? (
												"Delete from Favorite"
											) : (
												"お気に入りから削除"
											)
										) : en ? (
											"Save to Favorite"
										) : (
											"お気に入りに追加"
										)}
									</button>
								</div>
							</div>
						</div>

						<div></div>
					</div>

					{/* main  */}
					<div className="flex flex-col gap-8 px-20">
						<InfoSection movieDetail={movieDetail} />
						<CastSection movieId={movieId} />
						<VideoSection movieId={movieId} />
						<ReviewSection movieId={movieId} />
					</div>
				</div>

				{/* similar movies container  */}
				<div className="p-4">
					<SimilarSection movieId={movieId} />
				</div>
			</div>
		</MainLayout>
	);
};

const MovieDetailSkeleton = () => {
	return (
		<MainLayout>
			<div className=" grid grid-cols-[1fr_400px] relative">
				{/* movie detail container  */}
				<div className="px-4 pt-4 mb-20">
					{/* banner  */}
					<div className="w-full aspect-[16/6] rounded-lg overflow-hidden skeleton"></div>

					{/* detail container  */}
					<div className="px-20 mb-6">
						{/* poster and detail */}
						<div className="flex items-center gap-6 mt-8">
							{/* poster  */}
							<div className="w-[160px] skeleton aspect-[3/4] flex items-center justify-center"></div>

							{/* detail  */}
							<div className="flex flex-col w-1/2 gap-1">
								<div className="h-6 mb-4 rounded-full skeleton"></div>
								<div className="flex flex-col gap-4">
									<div className="h-4 rounded-full skeleton"></div>
									<div className="w-2/3 h-4 rounded-full skeleton"></div>
									<div className="w-1/2 h-4 rounded-full skeleton"></div>
									<div className="w-1/3 h-4 rounded-full skeleton"></div>
								</div>
							</div>
						</div>
					</div>

					{/* main  */}
					<div className="flex flex-col gap-8 px-20">
						<InfoSectionSkeleton />
						<CastSectionSkeleton />
						<VideoSectionSkeleton />
					</div>
				</div>

				{/* similar movies container  */}
				<div className="p-4">
					<SimilarSectionSkeleton />
				</div>
			</div>
		</MainLayout>
	);
};

export default MovieDetailPage;
