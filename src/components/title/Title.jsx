import React from 'react';

const Title = ({children, className}) => {
  return (
    <h3 className={`text-[32px] font-semibold ${className}`}>
      {children}
    </h3>
  );
};

export default Title;