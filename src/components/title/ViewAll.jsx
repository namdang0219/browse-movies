import React from 'react';

const ViewAll = ({children, onClick}) => {
  return (
    <span onClick={onClick} className='text-[18px] text-white opacity-50 hover:opacity-70 transition-all cursor-pointer'>
      {children}
    </span>
  );
};

export default ViewAll;