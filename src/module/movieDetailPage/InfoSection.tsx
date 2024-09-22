import SectionTitle from "../../components/title/SectionTitle";

const InfoSection = ({ movieDetail }: { movieDetail: any }) => {
	return (
		<div>
			<SectionTitle>Overview</SectionTitle>
			<p className="leading-relaxed">{movieDetail?.overview}</p>
		</div>
	);
};

export default InfoSection;
