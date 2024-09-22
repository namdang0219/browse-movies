import React from "react";
import SectionTitle from "../../components/title/SectionTitle";
import useSWR from "swr";
import { fetcher } from "util/func/fetcher";
import { apiLinks } from "util/constant/api-link";

const ReviewSection = ({
	movieId,
}: {
	movieId: string | number | undefined;
}) => {
	const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_DB_KEY}`,
		fetcher
	);
	const reviews = data?.results || [];
	console.log("🚀 ~ data:", data);
	return (
		<div>
			<SectionTitle>Top Reviews</SectionTitle>
			<div className="flex flex-col gap-6">
				{reviews.length > 0 &&
					reviews.map((review: any) => (
						<div key={review?.id}>
							<div className="flex gap-3">
								<div className="flex items-center justify-center flex-shrink-0 w-8 h-8 overflow-hidden rounded-full bg-slate-700">
									{review?.author_details?.avatar_path ? (
										<img
											src={`${apiLinks.originalImage}/${review?.author_details?.avatar_path}`}
											alt="user-avatar"
											className="object-cover object-center w-full h-full"
										/>
									) : (
										<span className="text-sm text-slate-400">
											{review?.author?.slice(0, 1)}
										</span>
									)}
								</div>
								<div>
									<div className="flex items-center gap-2 mb-1">
										<p className="text-lg text-slate-200 text-medium">
											{review?.author}
										</p>
										<span className="text-sm text-slate-500">
											{review?.updated_at.split("T")[0]}
										</span>
									</div>
									<p className="text-sm text-slate-400">
										{review?.content}
									</p>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default ReviewSection;

/**
 * 0
: 
author
: 
"Hotplix"
author_details
: 
avatar_path
: 
"/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg"
name
: 
"Hotplix"
rating
: 
8
username
: 
"Hotplix"
[[Prototype]]
: 
Object
content
: 
"\"Despicable Me 4\" is a delightful addition to the beloved animated franchise, bringing back the charm and humor that fans adore. Directed by Kyle Balda, the film sees the return of Gru, voiced by Steve Carell, and his mischievous Minions on another entertaining adventure. The movie balances heartwarming moments with laugh-out-loud comedy, introducing fresh characters and creative plot twists. The animation is vibrant and engaging, while the voice cast delivers standout performances. \"Despicable Me 4\" continues to capture the magic of the series, making it a fun and enjoyable watch for audiences of all ages."
created_at
: 
"2024-06-06T10:44:55.424Z"
id
: 
"666193270936853b78cbb431"
updated_at
: 
"2024-06-06T21:27:03.171Z"
url
: 
"https://www.themoviedb.org/review/666193270936853b78cbb431"
[[Prototype]]
: 
Object
 */
