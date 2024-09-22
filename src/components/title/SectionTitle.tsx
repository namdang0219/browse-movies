interface ISectionTitle {
	children: string;
	className?: string;
}

const SectionTitle = ({ children, className = "mb-2" }: ISectionTitle) => {
	return (
		<h4 className={`text-2xl italic font-medium text-primary ${className}`}>
			{children}
		</h4>
	);
};

export default SectionTitle;
