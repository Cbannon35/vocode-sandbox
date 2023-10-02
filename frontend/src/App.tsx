import "./App.css";
import { useConversation, SelfHostedConversationConfig } from "vocode";
import { useState } from "react";
import { BiMicrophoneOff, BiMicrophone } from "react-icons/bi";

export default function App() {
  const [backendUrl, setBackendUrl] = useState("");
  // const config: SelfHostedConversationConfig = {
  //   backendUrl,
  //   audioDeviceConfig: {},
  // };
  const socket = new WebSocket(
    "wss://9c24-2001-5a8-432a-d800-45b5-639c-71c3-cbe"
  ); // Replace with your ngrok URL

  // WebSocket event handlers
  socket.onopen = () => {
    console.log("WebSocket connection opened.");
  };

  socket.onmessage = (event) => {
    console.log("WebSocket message received:", event.data);
    // Handle the WebSocket messages as needed
  };

  socket.onclose = (event) => {
    if (event.wasClean) {
      console.log("WebSocket connection closed cleanly.");
    } else {
      console.error("WebSocket connection abruptly closed.");
    }
    console.log("WebSocket close code:", event.code);
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  // const { status, start, stop, error, analyserNode } = useConversation(config);
  const { status, start, stop, error, analyserNode } = useConversation({
    backendUrl: backendUrl, // looks like ws://localhost:3000/conversation or wss://asdf1234.ngrok.app/conversation if using ngrok
    audioDeviceConfig: {},
  });
  console.log(`status: ${status}, error: ${error}`);
  console.log(backendUrl);

  return (
    <main>
      {status === "idle" && (
        <p
          style={{
            padding: 0,
            border: "none",
            background: "none",
            position: "absolute",
            top: "58%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "Inter",
          }}
        >
          Press me to talk!
        </p>
      )}
      {status == "error" && error && (
        <p
          style={{
            padding: 0,
            color: "red",
            border: "none",
            background: "none",
            position: "absolute",
            top: "58%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontFamily: "Inter",
          }}
        >
          {error.message}
        </p>
      )}
      <button
        style={{
          padding: 0,
          border: "none",
          background: "none",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          zIndex: "1",
        }}
        disabled={["connecting"].includes(status)}
        onClick={status === "connected" ? stop : start}
      >
        {status === "connected" ? (
          <BiMicrophone size={100} />
        ) : (
          <BiMicrophoneOff size={100} />
        )}
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
    </main>
  );
}
