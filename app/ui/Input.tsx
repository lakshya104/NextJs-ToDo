import React, { ChangeEvent } from 'react';

interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  toDo: string;
}

const Input: React.FC<InputProps> = ({ onChange, toDo }) => {
  return (
    <input
      type="text"
      placeholder="Enter your tasks!"
      onChange={onChange}
      value={toDo}
      className="bg-white rounded-md p-2 my-2 md:rounded-r-none text-black text-center outline-none"
    />
  );
};

export default Input;
