import React from 'react';
import { useEffect, useRef } from 'react';
import { Player } from '@remotion/player';
import { useSelector } from 'react-redux';
import { HelloWorld, myCompSchema } from './HelloWorld.tsx';

const PlayerComponent = () => {
  const inputValue = useSelector((state) => state.inputValue);
  const replay = useSelector((state) => state.replay);
  const playerRef = useRef(null);

  useEffect(() => {
    if (replay && playerRef.current) {
      playerRef.current.seekTo(0);  // Reset to the start
      playerRef.current.play();     // Play the video
      
    }
  }, [replay]);

  return (
    <Player
      style={{
        width: 1000,
        height: 500
      }}
      ref={(ref) => (playerRef.current = ref)}
      component={HelloWorld}
      durationInFrames={120}
      fps={30}
      compositionWidth={1920}
      compositionHeight={1080}
      schema={myCompSchema}
      inputProps={{
        titleText: inputValue,
        titleColor: "#000000",
        logoColor1: "#91EAE4",
        logoColor2: "#86A8E7",
      }}
    />
  );
};

export default PlayerComponent;
