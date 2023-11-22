import React from 'react'

const Button = ({ text ,color , bgColor , padding }: any) => {
  return (
    <button className={`py-2 px-4 rounded-[18px] ${color} ${bgColor} ${padding}`}>{text}</button>
  );
};

export default Button