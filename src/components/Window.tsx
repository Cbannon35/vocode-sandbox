import { Avatar } from "./Avatar";
import { useState } from "react";
import { Resizable } from "re-resizable"; //https://github.com/bokuweb/re-resizable
import Draggable from "react-draggable"; //https://www.npmjs.com/package/react-draggable

const X = require("../assets/X.png");

const Window = ({
  maxw,
  minw,
  maxh,
  minh,
  initialWidth,
  initialHeight,
  lockAspectRatio,
  title,
  showNav,
}: {
  maxw: string;
  minw: string;
  maxh: string;
  minh: string;
  initialWidth: string;
  initialHeight: string;
  lockAspectRatio: boolean;
  title: string;
  showNav: boolean;
}) => {
  let status = "connected";
  const [minimized, setMinimized] = useState(false);
  const [tabs, setTabs] = useState([]);

  return (
    <Draggable handle="strong" bounds="main">
      <Resizable
        defaultSize={{
          width: initialWidth,
          height: initialHeight,
        }}
        minWidth={minw}
        minHeight={minh}
        maxWidth={maxw}
        maxHeight={maxh}
        lockAspectRatio={lockAspectRatio}
        className="absolute"
      >
        <div className="fixed w-full h-full">
          <div className="border border-black flex flex-row justify-between px-1">
            <strong className="h-full w-full">{title}</strong>
            <span
              className="self-center cursor-pointer"
              onClick={() => setMinimized(!minimized)}
            >
              {minimized ? (
                <span className="">+</span>
              ) : (
                <img src={X} className="w-4 h-4" alt="X" />
              )}
            </span>
          </div>
          <div className={`${minimized ? "hidden" : ""}`}>
            <Avatar status={status} />
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
};

export default Window;
