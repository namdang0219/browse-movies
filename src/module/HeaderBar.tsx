import useModal from "hook/useModal";
import SignupModal from "./modal/SignupModal";

const HeaderBar = () => {
	const { showModalWithContent } = useModal();

	const handleLoginModal = () => {
		showModalWithContent(<SignupModal />);
	};

	return (
		<div className="h-[60px] border-b border-b-borderColor dark:border-b-borderColorDark flex items-center">
			<div className="flex items-center justify-between flex-1 h-[40px] gap-6 px-4">
				<span>Home</span>
				<div className="flex items-center gap-2 p-0.5 rounded-full h-full border border-borderColor dark:border-borderColorDark w-full max-w-[400px]">
					<input
						type="text"
						className="flex-1 h-full px-4 rounded-full outline-none bg-inherit"
						placeholder="Search..."
					/>
					<button className="flex items-center justify-center h-full px-3 text-sm leading-none text-white transition-all rounded-full bg-primary hover:bg-primary-hover">
						Search
					</button>
				</div>
				<div className="h-full">
					<button
						onClick={handleLoginModal}
						className="h-full px-5 text-white transition-all rounded-full hover:bg-primary-hover bg-primary"
					>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeaderBar;
