import React from "react";
import { useConversation, AudioDeviceConfig, ConversationConfig } from "vocode";

import Menu from "./Menu";
import Window from "./Window";
// import Window from "react-window-comp";

import Avatar from "./Avatar";
import Transcript from "./Transcript";
import ThemePicker from "./ThemePicker";
import Changelog from "./Changelog";
import Xsvg from "./Xsvg";

// const mic = require("../assets/clear_mic.png");
// const mute_mic = require("../assets/clear_mic_mute.png");

const X_b = require("../assets/X_black.png");
const X_w = require("../assets/X_white.png");

const Body = ({
  config,
  setPrompt,
}: {
  config: Omit<ConversationConfig, "audioDeviceConfig">;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [audioDeviceConfig, setAudioDeviceConfig] =
    React.useState<AudioDeviceConfig>({});

  const { status, start, stop, analyserNode } = useConversation(
    Object.assign(config, { audioDeviceConfig })
  );

  const [showNav, setShowNav] = React.useState(false);
  const [theme, setTheme] = React.useState("light");
  const [Xpath, setXpath] = React.useState(X_b);

  function changeTheme(t: string) {
    if (t == theme) return;
    console.log("changing theme");
    if (theme === "light") {
      setTheme("dark");
      setXpath(X_w);
    } else {
      setTheme("light");
      setXpath(X_b);
    }
  }
  function changeXpath() {
    if (Xpath === X_b) {
      setXpath(X_w);
    } else {
      setXpath(X_b);
    }
  }

  const navHandler = () => {
    if (status === "connected" || status === "connecting") {
      return;
    }
    setShowNav(!showNav);
  };

  return (
    <main className={`theme-${theme} bg-primary h-screen w-screen fixed`}>
      <div
        className="fixed top-5 right-10 text-2xl text-text z-20 cursor-pointer underline"
        onClick={() => navHandler()}
        style={{
          cursor:
            status === "connected" || status === "connecting"
              ? "not-allowed"
              : "",
        }}
      >
        {showNav ? <img src={Xpath} /> : "Options"}
      </div>
      <Menu
        status={status}
        config={config}
        showNav={showNav}
        audioDeviceConfig={audioDeviceConfig}
        setAudioDeviceConfig={setAudioDeviceConfig}
        setPrompt={setPrompt}
      />
      {/* <Window
        maxh={100}
        maxw={100}
        minh={100}
        minw={100}
        startx={0}
        starty={0}
        initialHeight={100}
        initialWidth={100}
        lockAspectRatio={false}
        bgcolor="red"
        title="Avatar"
        render={() => <Avatar status={status} />}
      /> */}
      {/*Avatar*/}
      <Window
        maxw="400"
        maxh="400"
        minh="100"
        minw="100"
        startx={100}
        starty={100}
        initialHeight="200"
        initialWidth="200"
        lockAspectRatio={true}
        title="Avatar"
        showNav={showNav}
        render={() => <Avatar status={status} />}
      />

      <Window
        maxw="800"
        maxh="400"
        minh="100"
        minw="250"
        initialHeight="250"
        initialWidth="400"
        startx={350}
        starty={500}
        lockAspectRatio={false}
        title="Transcript"
        showNav={showNav}
        overflow={true}
        render={() => <Transcript />}
      />

      <Window
        maxw="200"
        maxh="100"
        minh="50"
        minw="150"
        initialHeight="60"
        initialWidth="150"
        startx={650}
        starty={100}
        lockAspectRatio={false}
        title="Theme Picker"
        showNav={showNav}
        render={() => <ThemePicker theme={theme} changeTheme={changeTheme} />}
      />

      <Window
        maxw="800"
        maxh="400"
        minh="100"
        minw="250"
        initialHeight="250"
        initialWidth="600"
        startx={600}
        starty={225}
        lockAspectRatio={false}
        title="Changelog"
        showNav={showNav}
        overflow={true}
        render={() => <Changelog />}
      />
    </main>
  );
};

export default Body;
