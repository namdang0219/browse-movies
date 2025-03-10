import { useModal } from "context/modal-context";
import SignupModal from "./modal/SignupModal";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { useLanguage } from "hook/useLanguage";

const HeaderBar = () => {
	const { setModalShow, setModalContent } = useModal();
	const { user } = useSelector((state: RootState) => state.user);
	const en = useLanguage().isEnglish;

	const handleLoginModal = () => {
		setModalContent(<SignupModal />);
		setModalShow(true);
	};

	return (
		<div className="h-[60px] border-b border-b-borderColor dark:border-b-borderColorDark flex items-center">
			<div className="flex items-center justify-between flex-1 h-[40px] gap-6 px-4">
				<span>🎬</span>
				<div className="flex items-center gap-2 p-0.5 rounded-full h-full border border-borderColor dark:border-borderColorDark w-full max-w-[400px]">
					<input
						type="text"
						className="flex-1 h-full px-4 rounded-full outline-none bg-inherit"
						placeholder={en? "Search...": '検索...'}
					/>
					<button className="flex items-center justify-center h-full px-3 text-sm leading-none text-white transition-all rounded-full bg-primary hover:bg-primary-hover">
						{en ? "Search" : "検索"}
					</button>
				</div>
				{user ? (
					<div className="flex justify-end items-center gap-2 w-[220px] shrink-0">
						<div className="text-end">
							<p className="font-semibold">
								{user.displayName?.slice(0, 15)}
							</p>
							<p className="text-xs text-slate-400">
								{user.email?.slice(0, 20)}
							</p>
						</div>
						<div className="flex items-center justify-center h-10 font-medium bg-green-500 rounded-full aspect-square">
							<span className="leading-none">
								{user.displayName?.slice(0, 1)}
							</span>
						</div>
					</div>
				) : (
					<div className="h-full">
						<button
							onClick={handleLoginModal}
							className="h-full px-5 text-white transition-all rounded-full hover:bg-primary-hover bg-primary"
						>
							{en ? 'Sign Up': '新規登録'}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default HeaderBar;
