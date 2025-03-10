import MainLayout from "layout/MainLayout";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiLinks } from "util/constant/api-link";
import { fetcher } from "util/func/fetcher";
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

const MovieDetailPage = () => {
	const { movieId } = useParams();
	const { data: movieDetail, isLoading } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_DB_KEY}`,
		fetcher
	);
	const en = useLanguage().isEnglish;

	const title = movieDetail?.title || "Loading...";

	useEffect(() => {
		document.title = title;
	}, [title]);

	const genres: string[] =
		movieDetail?.genres.map((g: IGenre) => g.name) || [];

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
