import SectionTitle from "../../components/title/SectionTitle";
import useSWR from "swr";
import { fetcher } from "util/func/fetcher";
import { apiLinks } from "util/constant/api-link";
import { useLanguage } from "hook/useLanguage";

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
	const en = useLanguage().isEnglish;

	return (
		<div>
			<SectionTitle>{en ? 'Top Reviews': 'レビュー'}</SectionTitle>
			<div className="flex flex-col gap-6">
				{reviews.length > 0 &&
					reviews.map((review: any) => (
						<div key={review?.id}>
							<div className="flex gap-3">
								<div className="flex items-center justify-center flex-shrink-0 w-8 h-8 overflow-hidden rounded-full bg-slate-700">
									{review?.author_details?.avatar_path ? (
										<img
											src={`${apiLinks.w500Image}/${review?.author_details?.avatar_path}`}
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
										<p className="text-lg dark:text-slate-200 text-slate-800 text-medium">
											{review?.author}
										</p>
										<span className="text-sm text-slate-500">
											{review?.updated_at.split("T")[0]}
										</span>
									</div>
									<p
										className="text-sm text-slate-400"
										dangerouslySetInnerHTML={{
											__html: review?.content,
										}}
									></p>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default ReviewSection;
