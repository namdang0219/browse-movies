import React, { PropsWithChildren } from "react";

const MovieGrid: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className="grid pb-10 grid-cols-5 p-4 gap-[30px] xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">{children}</div>;
};

export default MovieGrid;
