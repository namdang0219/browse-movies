import { Button } from "components/button";
import { CastList } from "components/cast";
import { ScrollToTop } from "components/scrollToTop";
import { SimilarList } from "components/similar";
import { Title } from "components/title";
import { TrailerList } from "components/trailer";
import { useAuth } from "contexts/auth-context";
import { useModal } from "contexts/modal-context";
import {
	arrayRemove,
	arrayUnion,
	doc,
	onSnapshot,
	updateDoc,
} from "firebase/firestore";
import { auth, db } from "firebaseConfig";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useSWR from "swr";
import { fetcher } from "utils/fetchSWR";

const MovieDetail = () => {
	const { movieId } = useParams();
	const { currentUser } = useAuth();
	const { handleOpenSignUp } = useModal();
	const [loading, setLoading] = useState(false);
	const [savedMovies, setSavedMovies] = useState([]);
	const { data, isLoading } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`,
		fetcher
	);
	const companyNames = [];
	data?.production_companies.forEach((item) => {
		companyNames.push(item.name);
	});

	useEffect(() => {
		const getSavedMovies = async () => {
			if (currentUser) {
				try {
					const docRef = doc(db, "users", currentUser?.uid);
					onSnapshot(docRef, (doc) => {
						setSavedMovies(
							doc.data()?.savedMovies === undefined
								? []
								: doc.data()?.savedMovies
						);
					});
				} catch (error) {
					console.log(error);
				}
			}
		};
		getSavedMovies();
	}, [currentUser]);

	const handleSaveMovie = async (movieId) => {
		try {
			setLoading(true);
			await updateDoc(doc(db, "users", auth.currentUser.uid), {
				savedMovies: arrayUnion(movieId),
			});
			toast.success("Movie is saved!");
			setLoading(false);
		} catch (error) {
			toast.error("Have some errors...");
		}
	};

	const handleDeleteMovie = async (movieId) => {
		try {
			setLoading(true);
			await updateDoc(doc(db, "users", auth.currentUser.uid), {
				savedMovies: arrayRemove(movieId),
			});
			toast.success("Movie is deleted!");
			setLoading(false);
		} catch (error) {
			setLoading(false);
			toast.error("Have some errors...");
		}
	};

	if (isLoading)
		return (
			<div className="px-6 py-6">
				<div className="h-[450px] bg-gray-200 rounded-lg dark:bg-gray-700 w-full animate-pulse"></div>
				<div className="grid grid-cols-[1fr_350px] xl:grid-cols-1  gap-x-6 min-h-[100px]">
					<div>
						<div className="flex items-center gap-x-4 xl:flex-wrap">
							<div className="size-[250px] shrink-0 xl:mx-auto">
								<div className="w-full h-full bg-gray-200 rounded-lg dark:bg-gray-700 animate-pulse"></div>
							</div>
							<div className="xl:ml-10 xl:mt-4">
								<div className="h-[30px] bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>

								<div className="h-[450px] bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
								<div className="h-[450px] bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
								<div className="h-[450px] bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
								<div className="h-[450px] bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
							</div>
						</div>
						<div className="px-10 mt-6 leading-relaxed">
							<div className="h-[450px] bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
							<div className="h-[450px] bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
							<div className="h-[450px] bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
							<div className="h-[450px] bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
							<div className="h-[450px] bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
							<div className="h-[450px] bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
						</div>
					</div>
					<div className="overflow-hidden border border-gray-800 xl:mx-6 xl:mt-10 h-fit rounded-xl">
						<div className="p-5 bg-white bg-opacity-20">
							<h4 className="font-medium text-[20px]">
								Similar Movies
							</h4>
						</div>
						<SimilarList movieId={movieId}></SimilarList>
					</div>
				</div>
			</div>
		);

	return (
		<div className="px-6 pb-6">
			<ScrollToTop></ScrollToTop>
			{/* Movie Banner  */}
			<div className="h-[450px] rounded-xl object-center overflow-hidden mb-14">
				<img
					src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
					alt=""
					className="object-cover object-center w-full h-full"
				/>
			</div>
			{/* Main container  */}
			<div className="grid grid-cols-[1fr_350px] xl:grid-cols-1  gap-x-6 min-h-[100px]">
				<div>
					<div className="flex items-center gap-x-4 xl:flex-wrap">
						<div className="size-[250px] shrink-0 xl:mx-auto">
							<img
								src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
								alt=""
								className="object-contain w-full h-full"
							/>
						</div>
						<div className="xl:ml-10 xl:mt-4">
							<div className="flex justify-between">
								<h3 className="text-[36px] font-semibold mb-2">
									{data?.title} (
									{`${new Date(
										data?.release_date
									).getFullYear()}`}
									)
								</h3>
							</div>
							<p className="leading-relaxed text-[18px] mb-4">
								<span className="block opacity-75">
									Language: {data?.original_language}
								</span>
								<span className="opacity-75 ">
									Company: {companyNames.join(", ")}
								</span>
								<span className="block opacity-75">
									Release Date:{" "}
									{data?.release_date.replace(/-/g, "/")}
								</span>
								<span className="flex items-center gap-x-2">
									<span className="opacity-75 ">
										Vote average:
									</span>
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={20}
											height={20}
											viewBox="0 0 16 16"
										>
											<path
												fill="#ffa200"
												d="M6.886.773C7.29-.231 8.71-.231 9.114.773l1.472 3.667l3.943.268c1.08.073 1.518 1.424.688 2.118L12.185 9.36l.964 3.832c.264 1.05-.886 1.884-1.802 1.31L8 12.4l-3.347 2.101c-.916.575-2.066-.26-1.802-1.309l.964-3.832L.783 6.826c-.83-.694-.391-2.045.688-2.118l3.943-.268z"
											></path>
										</svg>
									</span>
									<span className="opacity-75 ">
										{data?.vote_average.toFixed(1)}
									</span>
								</span>
							</p>
							<Button
								loading={loading}
								onClick={() => {
									if (currentUser) {
										if (
											savedMovies.includes(`${movieId}`)
										) {
											handleDeleteMovie(movieId);
										} else {
											handleSaveMovie(movieId);
										}
									} else {
										handleOpenSignUp();
									}
								}}
								className={"rounded-md h-10"}
							>
								{savedMovies.length > 0 &&
								savedMovies.includes(`${movieId}`)
									? "Delete Movie"
									: "Save Movie"}
							</Button>
						</div>
					</div>
					<div className="px-10 mt-6 leading-relaxed">
						<Title className={"text-[28px]"}>Overview:</Title>
						<p className="mt-2 text-white opacity-80">
							{data?.overview}
						</p>
						<Title className={"text-[28px] mt-8"}>Cast:</Title>
						<CastList movieId={movieId}></CastList>
						<Title className={"text-[28px] mt-8"}>Trailer:</Title>
						<div className="mt-4 space-y-8">
							<TrailerList movieId={movieId}></TrailerList>
						</div>
					</div>
				</div>
				<div className="overflow-hidden border border-gray-800 xl:mx-6 xl:mt-10 h-fit rounded-xl">
					<div className="p-5 bg-white bg-opacity-20">
						<h4 className="font-medium text-[20px]">
							Similar Movies
						</h4>
					</div>
					<SimilarList movieId={movieId}></SimilarList>
				</div>
			</div>
		</div>
	);
};

export default MovieDetail;
