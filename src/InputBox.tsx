// src/InputBox.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput } from './reducer.ts';

const InputBox: React.FC = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state: any) => state.inputValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInput(e.target.value));
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default InputBox;
