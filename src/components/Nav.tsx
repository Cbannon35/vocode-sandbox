import React, { useRef, useState } from "react";
import { useConversation, AudioDeviceConfig, ConversationConfig } from "vocode";
import "./Nav.css";

import { Spinny } from "./Spinny";
import Settings from "./Settings";
const X = require("../assets/X.png");

export const Nav = ({
  config,
  showNav,
  status,
  audioDeviceConfig,
  setAudioDeviceConfig,
  setPrompt,
}: {
  config: Omit<ConversationConfig, "audioDeviceConfig">;
  audioDeviceConfig: AudioDeviceConfig;
  setAudioDeviceConfig: React.Dispatch<React.SetStateAction<AudioDeviceConfig>>;
  showNav: boolean;
  status: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const form = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  function submitHandler(e: any) {
    e.preventDefault();
    console.log("submitting");
    if (form.current === null) return;

    if (form.current["prompt"]["value"] === "") {
      alert("Prompt is blank. Please enter a prompt.");
      return;
    }

    const formData = new FormData(form.current);
    setPrompt(formData.get("prompt") as string);
    e.target.reset();

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  }

  return (
    <div className={`nav ${showNav ? "open" : ""}`}>
      <div className="navContent">
        <div className="mediaWrapper">
          <div className="navItem">
            <h1 className="navItemTitle">Links.</h1>
            <a href="cbannon.com" target="_blank" className="link">
              my website↗
            </a>
            <a href="" target="_blank" className="link">
              see the code↗
            </a>
            <a
              href="https://docs.vocode.dev/welcome"
              target="_blank"
              className="link"
            >
              vocode↗
            </a>
          </div>
          <div className="navItem">
            <h1 className="navItemTitle">Settings.</h1>
            <Settings
              audioDeviceConfig={audioDeviceConfig}
              setAudioDeviceConfig={setAudioDeviceConfig}
              status={status}
            />
          </div>
        </div>
        <div className="navItem formItem">
          <h1 className="navItemTitle">Sandbox.</h1>
          <form className="formContainer" onSubmit={submitHandler} ref={form}>
            <label>
              <p className="vanish">Prompt</p>
            </label>
            <textarea
              className={submitted === true ? "submittedPrompt" : "promptInput"}
              name="prompt"
              placeholder={
                submitted === true
                  ? "Submitted Successfully!"
                  : "Enter a prompt..."
              }
            />
            <input
              type="submit"
              name="submit"
              value={"Submit↗"}
              className="submitPrompt"
              style={{ cursor: "pointer" }}
            />
          </form>
        </div>
      </div>

      <div className="wrapper">
        <div className="marquee">
          <p>
            Welcome to Sandbox for Vocode ---- Welcome to Sandbox for Vocode
            ----
          </p>
          <p>
            Welcome to Sandbox for Vocode ---- Welcome to Sandbox for Vocode
            ----
          </p>
        </div>
      </div>
    </div>
  );
};

interface NavButtonProps {
  status: string;
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavButton: React.FC<NavButtonProps> = ({
  status,
  showNav,
  setShowNav,
}) => {
  /* Can only toggle nav when not talking to AI */
  /* Maybe unecessary */
  const navHandler = () => {
    if (status === "connected" || status === "connecting") {
      return;
    }
    setShowNav(!showNav);
  };

  function navStyleHandler(): string {
    if (showNav) {
      return "vanish";
    } else {
      if (status === "connected" || status === "connecting") {
        return "navButtonInactive";
      } else {
        return "navButtonActive";
      }
    }
  }

  return (
    <nav className="navButton" onClick={navHandler}>
      <span className={showNav ? "X" : "vanish"}>
        <img src={X} />
      </span>
      <u className={navStyleHandler()}>Options</u>
    </nav>
  );
};
