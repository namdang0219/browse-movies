import React from "react";

const ListLarge = ({ children }) => {
	return (
		<>
			<div className="grid grid-cols-4 gap-6 px-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
				{children}
			</div>
		</>
	);
};

export default ListLarge;
