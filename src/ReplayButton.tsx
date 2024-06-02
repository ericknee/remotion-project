import React from 'react';
import { useDispatch } from 'react-redux';
import { replayVideo } from './reducer.ts';

const ReplayButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleReplay = () => {
    dispatch(replayVideo());
  };

  return (
    <button onClick={handleReplay}>Replay</button>
  );
};

export default ReplayButton;