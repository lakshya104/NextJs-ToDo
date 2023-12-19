import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button:React.FC<ButtonProps> = ({ title ,onClick }) => {
  return (
    <button
      className=" border-black bg-white text-black font-semibold rounded-md px-5 py-2 m-2"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
