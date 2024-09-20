import React, { PropsWithChildren } from "react";

const MovieGrid: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className="grid grid-cols-5 p-4 gap-[30px]">{children}</div>;
};

export default MovieGrid;
