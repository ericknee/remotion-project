import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_FAMILY } from "./constants.ts";
import { useDispatch, useSelector } from "react-redux";
import { setPosition } from "../reducer.ts";
import Draggable from "react-draggable";

const title: React.CSSProperties = {
  fontFamily: FONT_FAMILY,
  fontWeight: "bold",
  fontSize: 100,
  textAlign: "center",
  position: "absolute",
  bottom: 160,
  width: "100%",
};

const word: React.CSSProperties = {
  marginLeft: 10,
  marginRight: 10,
  display: "inline-block",
};

export const Title: React.FC<{
  titleText: string;
  titleColor: string;
}> = ({ titleText, titleColor }) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
  const position = useSelector((state) => state.position);
  const dispatch = useDispatch();
  const words = titleText.split(" ");

  const handleDrag = (e: any, data: any) => {
    dispatch(setPosition(data.x, data.y));
  };

  return (
    <h1 style={title}>
      {words.map((t, i) => {
        const delay = i * 5;

        const scale = spring({
          fps: videoConfig.fps,
          frame: frame - delay,
          config: {
            damping: 200,
          },
        });

        return (
          <Draggable
          key={t}
          position={position}
          onStop={handleDrag}
          >
            <div style={{
            // display: 'inline-block',
            // border: '2px solid black',
            // backgroundColor: 'grey',
            // padding: '15px',
            // alignContent: 'center',
            }}>
              <span
                key={t}
                style={{
                  ...word,
                  color: titleColor,
                  transform: `scale(${scale})`,
                }}
              >
                {t}
              </span>
            </div>
          </Draggable>
        );
      })}
    </h1>
  );
};
