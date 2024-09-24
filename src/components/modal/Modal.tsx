import { useModal } from "context/modal-context";
import { createPortal } from "react-dom";

const Modal = () => {
	const { modalShow, modalContent, setModalShow } = useModal();

	const handleHideModal = () => {
		setModalShow(false);
	};

	if (!modalShow) {
		return <></>;
	}

	return createPortal(
		<div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40">
			<div className="relative flex items-center justify-center p-10 m-4 text-black bg-white rounded-2xl">
				{/* cancel button  */}
				<span
					onClick={handleHideModal}
					className="absolute transition-all cursor-pointer text-slate-300 hover:text-slate-400 right-3 top-3"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18 18 6M6 6l12 12"
						/>
					</svg>
				</span>

				{/* modal content */}
				{modalContent}
			</div>
		</div>,
		document.body
	);
};

export default Modal;
