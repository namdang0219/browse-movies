import React from 'react';

const Main = ({children}) => {
  return (
    <div className='overflow-x-hidden overflow-y-scroll scroll-bar-hidden'>
      {children}
    </div>
  );
};

export default Main;