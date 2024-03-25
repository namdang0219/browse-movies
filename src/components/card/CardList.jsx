import React from 'react';
import { CardItem } from '.';

const CardList = ({listMovie, loading}) => {
  return (
    <div className="flex pr-6 ml-6 overflow-x-scroll gap-x-8 scroll-bar-hidden">
        {listMovie.length > 0 && listMovie.slice(0,8).map(movie => (
          <CardItem key={movie.id} data={movie} loading={loading}></CardItem>
        ))}
			</div>
  );
};

export default CardList;