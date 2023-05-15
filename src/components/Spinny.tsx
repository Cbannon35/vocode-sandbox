import React from "react";
import "./Spinny.css";

export const Spinny = ({
  text,
  styling,
  hover,
  hoverColor,
}: {
  text: string;
  styling: React.CSSProperties;
  hover?: boolean;
  hoverColor?: string;
}) => {
  return (
    <div className="circle" style={styling}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        xmlSpace="preserve"
        className="svgeez"
      >
        <defs>
          <path
            id="circlePath"
            d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            style={{ transition: "fill 0.5s ease-in-out" }}
          />
        </defs>
        <g className="spinnyHover">
          <use xlinkHref="#circlePath" fill="none" />
          <text fill={hover ? styling.color : hoverColor}>
            <textPath xlinkHref="#circlePath">{text}</textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};
