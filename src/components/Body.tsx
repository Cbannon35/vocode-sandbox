import React from "react";
import { useConversation, AudioDeviceConfig, ConversationConfig } from "vocode";
import "./Body.css";

import Marquee from "./Marquee";
import Menu from "./Menu";
import Window from "./Window";
import Settings from "./Settings";

const mic = require("../assets/clear_mic.png");
const mute_mic = require("../assets/clear_mic_mute.png");

const X = require("../assets/X.png");

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

  function changeTheme() {
    console.log("changing theme");
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
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
        className="fixed top-5 right-10 text-2xl z-20 cursor-pointer underline"
        onClick={() => navHandler()}
        style={{
          cursor:
            status === "connected" || status === "connecting"
              ? "not-allowed"
              : "",
        }}
      >
        {showNav ? <img src={X} /> : "Options"}
      </div>
      <Menu
        status={status}
        config={config}
        showNav={showNav}
        audioDeviceConfig={audioDeviceConfig}
        setAudioDeviceConfig={setAudioDeviceConfig}
        setPrompt={setPrompt}
      />
      <button className="text-secondary" onClick={() => changeTheme()}>
        change theme
      </button>
      <br />
      <br />
      <Window
        maxw="400"
        maxh="400"
        minh="100"
        minw="100"
        initialHeight="200"
        initialWidth="200"
        lockAspectRatio={true}
        title="Avatar"
        showNav={showNav}
      />
    </main>
  );
};

export default Body;
/*
       {showNav && (
        <Nav
          status={status}
          config={config}
          showNav={showNav}
          audioDeviceConfig={audioDeviceConfig}
          setAudioDeviceConfig={setAudioDeviceConfig}
          setPrompt={setPrompt}
        />
      )}

      <NavButton status={status} showNav={showNav} setShowNav={setShowNav} />
      <div className="body">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <img
          src={status === "connected" ? mic : mute_mic}
          className="microphone"
          alt="microphone"
          onClick={status === "connected" ? stop : start}
          /*disabled={["connecting", "error"].includes(status)} do i need? 
        />
        {status === "connecting" && (
          <Box position={"absolute"} bottom="100px">
            <Spinner color="#000000" />
          </Box>
        )}
        <div className="content">
          <Avatar status={""} />
          <div className="transcript">
            I will be a transcript of messages between ai and user
          </div>
        </div>
      </div>
      {showNav && <div className="blur"></div>}
 */
