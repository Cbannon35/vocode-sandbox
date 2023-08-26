import { useState } from "react";
import { Rnd } from "react-rnd"; // https://www.npmjs.com/package/react-rnd
import Xsvg from "./Xsvg";

const Window = ({
  maxw,
  minw,
  maxh,
  minh,
  startx,
  starty,
  initialWidth,
  initialHeight,
  lockAspectRatio,
  title,
  showNav,
  overflow,
  render,
}: {
  maxw: string;
  minw: string;
  maxh: string;
  minh: string;
  startx?: number;
  starty?: number;
  initialWidth: string;
  initialHeight: string;
  lockAspectRatio: boolean;
  title: string;
  showNav: boolean;
  overflow?: boolean;
  render: () => JSX.Element;
}) => {
  let status = "connected";
  const [minimized, setMinimized] = useState(false);
  const [tabs, setTabs] = useState([]);

  return (
    <Rnd
      default={{
        x: startx ? startx : 0,
        y: starty ? starty : 0,
        width: initialWidth,
        height: initialHeight,
      }}
      minWidth={minw}
      minHeight={minh}
      maxWidth={maxw}
      maxHeight={maxh}
      lockAspectRatio={lockAspectRatio}
      lockAspectRatioExtraHeight={24}
      dragHandleClassName="cursor-move"
      bounds="window"
    >
      <div className="w-full h-full flex flex-col">
        <div className="border bg-primary border-border flex flex-row justify-between px-1">
          <strong className="flex-grow cursor-move -z-1 text-text">
            {title}
          </strong>
          <span
            className="self-center cursor-pointer w-4"
            onClick={() => setMinimized(!minimized)}
          >
            <Xsvg />
          </span>
        </div>
        <div
          className={`border-l border-r border-b border-border w-full h-full ${
            overflow ? "overflow-auto" : ""
          } ${minimized ? "hidden" : ""}`}
        >
          {render()}
        </div>
      </div>
    </Rnd>
  );
};

export default Window;
