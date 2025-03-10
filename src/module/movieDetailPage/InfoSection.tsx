import { useLanguage } from "hook/useLanguage";
import SectionTitle from "../../components/title/SectionTitle";

const InfoSection = ({ movieDetail }: { movieDetail: any }) => {
	const en = useLanguage().isEnglish

	return (
		<div>
			<SectionTitle>{en ? 'Overview': '概要'}</SectionTitle>
			<p className="leading-relaxed">{movieDetail?.overview}</p>
		</div>
	);
};

export const InfoSectionSkeleton = () => {
	return (
		<div>
			<SectionTitle>Overview</SectionTitle>
			<div className="flex flex-col w-full gap-2">
				<div className="w-full h-3 rounded-full skeleton"></div>
				<div className="w-full h-3 rounded-full skeleton"></div>
				<div className="w-1/2 h-3 rounded-full skeleton"></div>
			</div>
		</div>
	);
};

export default InfoSection;
