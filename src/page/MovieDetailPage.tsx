import { StarIcon } from "components/icon/movieDetail";
import MainLayout from "layout/MainLayout";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiLinks } from "util/constant/api-link";
import { fetcher } from "util/func/fetcher";

const MovieDetailPage = () => {
	const { movieId } = useParams();
	const { data, isLoading } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_DB_KEY}`,
		fetcher
	);

	if (isLoading)
		return (
			<div className="flex items-center justify-center h-16">
				Loading...
			</div>
		);

	const {
		backdrop_path,
		title,
		poster_path,
		vote_average,
		release_date,
		original_language,
	} = data;

	return (
		<MainLayout>
			<div className="p-4 grid grid-cols-[1fr_400px]">
				{/* movie detail container  */}
				<div>
					{/* banner  */}
					<div className="w-full aspect-[16/6]">
						<img
							src={`${apiLinks.originalImage}/${backdrop_path}`}
							alt="movie-banner"
							className="object-cover object-top w-full h-full"
						/>
					</div>

					{/* detail container  */}
					<div className="px-16">
						{/* poster and detail */}
						<div className="flex items-center gap-6 mt-8">
							<div className="w-[200px] aspect-[3/4] bg-slate-800 flex items-center justify-center">
								<img
									src={`${apiLinks.originalImage}/${poster_path}`}
									alt="poster-image"
									className="object-contain object-center w-full h-full"
								/>
							</div>
							<div>
								<h1>{title}</h1>
								<p className="flex items-center gap-2">
									<span>Rate: {vote_average.toFixed(1)}</span>
									<StarIcon />
								</p>
								<p>Release Date: {release_date}</p>
								<p>Language: {original_language}</p>
								<p>Genres: </p>
							</div>
						</div>

						<div></div>
					</div>
				</div>

				{/* similar movies container  */}
				<div></div>
			</div>
		</MainLayout>
	);
};

export default MovieDetailPage;

// adult
// :
// false
// backdrop_path
// :
// "/cgKZtNSETjXJPkAQ4rasV7dnyQH.jpg"
// belongs_to_collection
// :
// {id: 945475, name: 'Beetlejuice Collection', poster_path: '/2N5c3ue4bxvTO5OO3bOjHPJZs3H.jpg', backdrop_path: '/bJ76WnTj7G8dYQSZJvZejna262D.jpg'}
// budget
// :
// 100000000
// genres
// :
// (3) [{…}, {…}, {…}]
// homepage
// :
// "https://www.beetlejuicemovie.com"
// id
// :
// 917496
// imdb_id
// :
// "tt2049403"
// origin_country
// :
// ['US']
// original_language
// :
// "en"
// original_title
// :
// "Beetlejuice Beetlejuice"
// overview
// :
// "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife."
// popularity
// :
// 1032.671
// poster_path
// :
// "/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg"
// production_companies
// :
// Array(6)
// 0
// :
// {id: 174, logo_path: '/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png', name: 'Warner Bros. Pictures', origin_country: 'US'}
// 1
// :
// {id: 360, logo_path: '/hbDlIbBdBe0nVFTeZ7hDX3d5n2N.png', name: 'Geffen Pictures', origin_country: 'US'}
// 2
// :
// {id: 81, logo_path: '/8wOfUhA7vwU2gbPjQy7Vv3EiF0o.png', name: 'Plan B Entertainment', origin_country: 'US'}
// 3
// :
// {id: 8601, logo_path: '/kqubCH3sfBAk4znUj7hjqv8ffgi.png', name: 'Tim Burton Productions', origin_country: 'US'}
// 4
// :
// {id: 216687, logo_path: null, name: 'Domain Entertainment', origin_country: 'US'}
// 5
// :
// {id: 228708, logo_path: null, name: 'Tommy Harper Productions', origin_country: 'US'}
// length
// :
// 6
// [[Prototype]]
// :
// Array(0)
// production_countries
// :
// [{…}]
// release_date
// :
// "2024-09-04"
// revenue
// :
// 267268543
// runtime
// :
// 105
// spoken_languages
// :
// (3) [{…}, {…}, {…}]
// status
// :
// "Released"
// tagline
// :
// "The ghost with the most is back."
// title
// :
// "Beetlejuice Beetlejuice"
// video
// :
// false
// vote_average
// :
// 7.178
// vote_count
// :
// 554
