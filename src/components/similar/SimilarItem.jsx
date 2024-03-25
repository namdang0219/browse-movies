import { Button } from "components/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const SimilarItem = ({
	similarDetail: { title, release_date, vote_average, id, poster_path },
	className,
}) => {
	const navigate = useNavigate();
	return (
		<div
			className={`${className} flex items-center gap-4 pb-4 pt-4 border-b border-b-gray-700`}
		>
			<img
				src={`https://image.tmdb.org/t/p/original/${poster_path}`}
				alt=""
				className="w-[80px]"
			/>
			<div>
				<h5 className="text-[18px] line-clamp-2">{title}</h5>
				<span className="opacity-75 text-[14px]">
					Release Date: {release_date.replace(/-/g, "/")}
				</span>
				<span className="flex items-center gap-x-2">
					<span className="opacity-75 text-[14px]">
						Vote average:
					</span>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={16}
							height={16}
							viewBox="0 0 16 16"
						>
							<path
								fill="#ffa200"
								d="M6.886.773C7.29-.231 8.71-.231 9.114.773l1.472 3.667l3.943.268c1.08.073 1.518 1.424.688 2.118L12.185 9.36l.964 3.832c.264 1.05-.886 1.884-1.802 1.31L8 12.4l-3.347 2.101c-.916.575-2.066-.26-1.802-1.309l.964-3.832L.783 6.826c-.83-.694-.391-2.045.688-2.118l3.943-.268z"
							></path>
						</svg>
					</span>
					<span className="opacity-75 text-[14px]">
						{vote_average.toFixed(1)}
					</span>
				</span>
				<Button
					onClick={() => navigate(`/movie/${id}`)}
					className={"text-sm rounded-md px-2 py-2 mt-3"}
				>
					Detail
				</Button>
			</div>
		</div>
	);
};

export default SimilarItem;
