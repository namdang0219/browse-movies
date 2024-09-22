import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { apiLinks } from "util/constant/api-link";
import { fetcher } from "util/func/fetcher";
import SectionTitle from '../../components/title/SectionTitle';

const CastSection = ({ movieId }: { movieId: number | string | undefined }) => {
	const { data: credits } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_DB_KEY}`,
		fetcher
	);
	const casts = credits?.cast || [];

	return (
		<div className="">
      <SectionTitle>Casts</SectionTitle>
      <div className="w-[calc(100vw-400px-240px-20px-160px)]">
        <Swiper slidesPerView={5} spaceBetween={20}>
          {casts.length > 0 &&
            casts.slice(0, 10).map((cast: any) => (
              <SwiperSlide key={cast.id}>
                <div className="select-none">
                  <div className="w-full overflow-hidden rounded aspect-[3/4]">
                    <img
                      src={`${apiLinks.originalImage}/${cast.profile_path}`}
                      alt="cast-image"
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="mt-2.5 text-center">
                    <p className="text-lg">{cast?.name}</p>
                    <p className="text-sm text-slate-400">
                      {cast?.character}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
	);
};

export default CastSection;
