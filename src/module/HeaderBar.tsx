const HeaderBar = () => {
	return (
		<div className="h-[60px] border-b border-b-slate-700 flex items-center">
			<div className="flex items-center justify-between flex-1 h-[42px] gap-6 px-4">
				<span>Home</span>
				<div className="flex items-center gap-2 p-0.5 rounded-full h-full bg-slate-700 w-full max-w-[400px]">
					<input
						type="text"
						className="flex-1 h-full px-4 rounded-full outline-none bg-inherit"
						placeholder="Search..."
					/>
					<button className="flex items-center justify-center h-full px-3 text-sm leading-none transition-all rounded-full bg-primary hover:bg-primary-hover">
						Search
					</button>
				</div>
				<div className="h-full">
					<button className="h-full px-5 transition-all rounded-full hover:bg-primary-hover bg-primary">
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeaderBar;
