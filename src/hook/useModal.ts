import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { setShowModal } from "store/global/globalSlice";

export default function useModal() {
	const dispatch = useDispatch();

	const showModalWithContent = (content: ReactNode) => {
		dispatch(setShowModal(true));
	};

	return { showModalWithContent };
}
