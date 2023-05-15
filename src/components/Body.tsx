import { Box, Button, HStack, Select, Spinner } from "@chakra-ui/react";
import React from "react";
import { useConversation, AudioDeviceConfig, ConversationConfig } from "vocode";
import { Avatar } from "./Avatar";
import "./Body.css";

import { Nav, NavButton } from "./Nav";

const mic = require("../assets/clear_mic.png");
const mute_mic = require("../assets/clear_mic_mute.png");

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

  return (
    <main>
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
        <img
          src={status === "connected" ? mic : mute_mic}
          className="microphone"
          alt="microphone"
          onClick={status === "connected" ? stop : start}
          /*disabled={["connecting", "error"].includes(status)} do i need? */
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
    </main>
  );
};

export default Body;
