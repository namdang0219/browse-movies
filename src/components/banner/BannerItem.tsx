import useMovieGenres from "hook/useMovieGenres";
import { useNavigate } from "react-router-dom";
import { apiLinks } from "util/constant/api-link";

interface IBannerItem {
	backdrop_path: string;
	title: string;
	overview: string;
	genre_ids: (number | string)[];
	id: string;
}

const BannerItem = ({
	item: { id, backdrop_path = "", title = "", overview = "", genre_ids = [] },
}: {
	item: IBannerItem;
}) => {
	const navigate = useNavigate();
	const movieGenres = useMovieGenres(genre_ids);

	return (
		<div
			className="relative w-full h-[520px] rounded-lg overflow-hidden"
			onClick={() => navigate(`/detail/${id}`)}
		>
			<img
				src={`${apiLinks.originalImage}/${backdrop_path}`}
				alt="banner"
				className="object-cover object-center w-full h-full"
			/>
			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-50% to-transparent p-6 flex flex-col justify-end">
				<div className="text-white">
					<span className="px-2 py-1 text-[10px] leading-none uppercase rounded-sm bg-primary">
						upcoming
					</span>
					<h2 className="mt-2 text-3xl">{title}</h2>
					<p className="w-full max-w-[75%] line-clamp-3 mt-2">
						{overview}
					</p>

					{/* genres  */}
					<div className="flex items-center gap-2 mt-3">
						{movieGenres.map((item) => (
							<span
								key={item}
								className="px-2 py-1 text-sm text-white border border-white rounded pointer-events-none select-none opacity-70"
							>
								{item}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerItem;
