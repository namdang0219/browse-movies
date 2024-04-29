import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from 'utils/fetchSWR';

const SavedItem = ({movieId}) => {
  const navigate = useNavigate()
  const { data } = useSWR(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`,
		fetcher
	);
  return (
    <div onClick={() => navigate(`/movie/${movieId}`)} className='px-2 py-2 mb-1 text-[12px] ml-4 font-semibold transition-all hover:bg-gray-800 gap-x-4 rounded-xl opacity-60 hover:opacity-100 cursor-pointer'>
      {'>'}  {data?.title.slice(0, 20)} {data?.title.length > 20 && '...'}
    </div>
  );
};

export default SavedItem;