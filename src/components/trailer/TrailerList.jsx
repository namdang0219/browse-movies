import React from 'react';
import useSWR from 'swr';
import { fetcher } from 'utils/fetchSWR';
import { TrailerItem } from '.';

const TrailerList = ({movieId}) => {
  const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`,
		fetcher
	);
  const trailerList = data?.results || []
  // console.log("🚀 ~ TrailerList ~ data:", data)
  return (
    <>
      {trailerList.length > 0 && trailerList.slice(0, 3).map(item => <TrailerItem key={item.id} trailerDetail={item}></TrailerItem>)}
    </>
  );
};

export default TrailerList;