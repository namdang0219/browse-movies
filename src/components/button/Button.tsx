interface IButton {
	loading?: boolean;
	children: string;
	type?: "button" | "submit";
	onClick?: () => void;
}

const Button = ({
	loading,
	children,
	type = "button",
	onClick = () => {},
}: IButton) => {
	return (
		<button
			type={type}
			className="flex items-center justify-center w-full h-12 mt-2 text-white rounded-md select-none bg-primary hover:bg-primary-hover"
			onClick={onClick}
		>
			{loading ? <div className="loader" /> : <span>{children}</span>}
		</button>
	);
};

export default Button;
