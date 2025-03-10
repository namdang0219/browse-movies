import { useSelector } from "react-redux";
import { RootState } from "store/store";

export const useLanguage = (): { isEnglish: boolean } => {
	const { language } = useSelector((state: RootState) => state.global);

	const isEnglish: boolean = language === "en";

	return { isEnglish };
};
