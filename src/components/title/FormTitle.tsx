const FormTitle = ({
	children,
	className,
}: {
	children: string;
	className?: string;
}) => {
	return (
		<h2 className={`text-3xl font-medium font ${className}`}>{children}</h2>
	);
};

export default FormTitle;
