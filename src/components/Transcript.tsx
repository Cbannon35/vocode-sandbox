import React, { useState, useEffect } from "react";

const Transcript = () => {
  const [transcript, setTranscript] = useState([]);

  //   0 for AI, 1 for user
  const dummyTranscript: [number, string][] = [
    [0, "Test"],
    [1, "Test"],
    [0, "Test"],
    [1, "Test"],
    [0, "Test"],
    [1, "Test"],
    [0, "Test"],
    [1, "Test"],
    [0, "Test"],
    [1, "Test"],
  ];

  const isAIMessage = (isAI: number) => {
    return isAI === 0 ? "justify-end" : "justify-start";
  };
  const isAiMessage2 = (isAI: number) => {
    return isAI === 0 ? "bg-usertext" : "bg-aitext";
  };

  return (
    <div className="flex flex-col space-y-2 p-1 bg-secondary">
      {dummyTranscript.length > 0 ? (
        dummyTranscript.map((item, index) => (
          <div key={index} className={`flex flex-row ${isAIMessage(item[0])}`}>
            <div
              className={`${isAiMessage2(
                item[0]
              )} text-text rounded-lg pl-2 pr-2 pt-1 pb-1 max-w-3/4 min-w-1/4 break-words`}
            >
              {item[1]}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-xl p-4 text-text">
          Start talking to the AI to see the transcript here!
        </div>
      )}
    </div>
  );
};

export default Transcript;
