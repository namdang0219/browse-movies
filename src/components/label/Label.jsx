import React from "react";

const Label = ({children, htmlFor}) => {
	return (
		<label
			className="block mb-2 font-semibold text-[14px] first-letter:uppercase"
		>
			{children}
		</label>
	);
};

export default Label;
