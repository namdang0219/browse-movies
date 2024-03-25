import { Banner } from 'modules/banner';
import NowPlaying from 'modules/nowPlaying/NowPlaying';
import Popular from 'modules/popular/Popular';
import TopRated from 'modules/topRated/TopRated';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Popular></Popular>
      <NowPlaying></NowPlaying>
      <TopRated></TopRated>
      <div className='h-16'></div>
    </div>
  );
};

export default Home;