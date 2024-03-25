import React from 'react';

const Button = ({children, onClick, rounded, className, type = 'button', loading = false, ...props}) => {
  return (
    <button type={type} onClick={onClick} className={`${className} bg-pink-500 hover:bg-pink-600 transition-all flex items-center justify-center py-3 ${rounded && 'rounded-full'} px-3 flex items-center justify-center leading-none `} {...props}>
      {! loading && children}
      {loading && <div className='loader'></div>}
    </button>
  );
};



export default Button;