import './App.css'
import {
  useConversation,
  SelfHostedConversationConfig
} from "vocode";
import { useState } from 'react';
import { BiMicrophoneOff, BiMicrophone } from "react-icons/bi";

export default function App() {
  const [backendUrl, setBackendUrl] = useState("");
  const config: SelfHostedConversationConfig = {
    backendUrl,
    audioDeviceConfig: {},
  };

  const { status, start, stop, error, analyserNode } = useConversation(config);


  console.log(`status: ${status}, error: ${error}`);
  console.log(backendUrl);

  return (
    <main>
      {status === "idle" && <p style={{
        padding: 0,
        border: 'none',
        background: 'none',
        position: 'absolute',
        top: '58%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Inter'
      }}>Press me to talk!</p>}
      {status == "error" && error && <p style={{
        padding: 0,
        color: 'red',
        border: 'none',
        background: 'none',
        position: 'absolute',
        top: '58%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Inter'
      }}>{error.message}</p>}
      <button
        style={{
          padding: 0,
          border: 'none',
          background: 'none',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          zIndex: "1",
        }}
        disabled={["connecting"].includes(status)}
        onClick={status === "connected" ? stop : start}
      >
        {status === "connected" ? <BiMicrophone size={100} /> : <BiMicrophoneOff size={100} />}
      </button>
      <label
        htmlFor="backend-url"
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "Inter",
          zIndex: "0",
        }}
      >
        Backend URL:
      </label>
      <input
        type="text"
        value={backendUrl}
        onChange={(e) => setBackendUrl(e.target.value)}
        placeholder="wss://my-repo.user.repl.co/conversation"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "Inter",
          width: "50vw",
          border: "1px solid black",
          zIndex: "0",
        }}
      />
    </main >
  )
}