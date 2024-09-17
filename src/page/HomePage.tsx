import MainLayout from "layout/MainLayout";

const HomePage = () => {
	return (
		<MainLayout>
			{/* banner  */}
			<div className="p-4">
				<div className="relative w-full h-[380px] rounded-lg overflow-hidden">
					<img
						src="https://images2.alphacoders.com/109/thumb-1920-1098621.jpg"
						alt="banner"
						className="object-cover object-center w-full h-full"
					/>
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-50% to-transparent p-6 flex flex-col justify-end">
						<div className="text-white">
							<span className="px-2 py-1 text-[10px] leading-none uppercase rounded-sm bg-primary">
								upcoming
							</span>
							<h2 className="mt-2 text-3xl">
								Biệt Đội Big Hero 6
							</h2>
							<p className="w-full max-w-[75%] line-clamp-3 mt-2">
								Chuyện phim xảy ra trong một thành phố hư cấu
								được gọi là San Fransokyo (một từ ghép giữa San
								Francisco và Tokyo), một thần đồng chế tạo trẻ
								tuổi tên là Hiro Hamada, tuy là thiên tài công
								nghệ nhưng cậu ta luôn bỏ phí thời gian vào
								những trận đấu robot trái phép. Sợ Hiro bỏ phí
								tài năng của mình, anh trai của Hiro, Tadashi
								đưa Hiro đến phòng thí nghiệm công nghệ tại Viện
								Công nghệ San Fransokyo, nơi Hiro gặp bạn bè của
								Tadashi: GoGo, Wasabi, Honey Lemon, và Fred,
								cùng robot chăm sóc sức khỏe Baymax do Tadashi
								chế tạo. Để được nhập học trong trường, Hiro đã
								sáng chế và giới thiệu Bọ siêu nhỏ: một đám
								robot có kích thước nhỏ có thể liên kết với nhau
								trong bất kỳ bằng bộ điều khiển thần kinh từ xa.
							</p>
							<div className="flex items-center gap-2 mt-3">
								{["Movie", "Active", "Racing"].map((item) => (
									<span
										key={item}
										className="px-2 py-1 text-sm text-white border border-white rounded pointer-events-none select-none opacity-70"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* popular  */}
			<div>
				
			</div>
		</MainLayout>
	);
};

export default HomePage;
