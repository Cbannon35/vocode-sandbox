import Marquee from "./Marquee";
import React, { useState, useRef } from "react";
import { useConversation, AudioDeviceConfig, ConversationConfig } from "vocode";
import Settings from "./Settings";

const Menu = ({
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
    <div
      className={`fixed ${
        showNav ? "top-0" : "top-[-110%]"
      } h-screen w-screen flex flex-col z-10 text-text`}
    >
      <div className={`flex flex-col bg-primary`}>
        <div className="flex flex-col lg:space-x-20 lg:flex-row pl-10 pt-10 pr-10 justify-center mb-16">
          <div className="flex flex-col sm:flex-row lg:flex-col lg:space-y-5 sm:space-y-0 space-y-5 mb-10 sm:justify-around">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold border-b-2 w-full border-border mb-3 text-center">
                Links.
              </h1>
              <a
                href="https://cbannon.com"
                target="_blank"
                className="underline hover:bg-highlight text-lg"
              >
                my website↗
              </a>
              <a
                href="https://github.com/Cbannon35/vocode-sandbox"
                target="_blank"
                className="underline hover:bg-highlight text-lg"
              >
                see the code↗
              </a>
              <a
                href="https://docs.vocode.dev/welcome"
                target="_blank"
                className="underline hover:bg-highlight text-lg"
              >
                vocode↗
              </a>
            </div>
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold border-b-2 w-full border-border mb-5 text-center">
                Settings.
              </h1>
              <Settings
                status={status}
                audioDeviceConfig={audioDeviceConfig}
                setAudioDeviceConfig={setAudioDeviceConfig}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <h1 className="text-3xl font-bold border-b-2 w-full mb-5 border-border text-center">
              Sandbox.
            </h1>
            <form className="flex flex-col" onSubmit={submitHandler} ref={form}>
              <label>
                <p className="hidden">Prompt</p>
              </label>
              <textarea
                className="bg-inherit border-2 border-border rounded-md h-[200px] resize-none mb-3"
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
                className="cursor-pointer w-full border-border border-2 rounded-md hover:bg-highlight"
              />
            </form>
          </div>
        </div>
        <Marquee />
      </div>
      <div className="w-full grow backdrop-blur-sm"></div>
    </div>
  );
};
export default Menu;
