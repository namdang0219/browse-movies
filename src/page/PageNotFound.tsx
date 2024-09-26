import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		document.title = 'Page Not Found';
	}, []);

	return (
		<div className="flex items-center justify-center w-screen h-screen">
			<div>
				<span className="text-2xl text-white dark:text-black">
					PageNotFound
				</span>
				<span onClick={() => navigate(-1)}>Back to previous page</span>
			</div>
		</div>
	);
};

export default PageNotFound;
