import { MovieItem } from "components/movie";
import MainLayout from "layout/MainLayout";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const PopularPage = () => {
	const { popularMovies } = useSelector((state: RootState) => state.movie);

	return (
		<MainLayout>
			<div className="grid grid-cols-5 p-4 gap-[30px]">
				{popularMovies &&
					popularMovies.map((m: any) => (
							<MovieItem key={m.id} item={m}></MovieItem>
					))}
			</div>
		</MainLayout>
	);
};

export default PopularPage;
