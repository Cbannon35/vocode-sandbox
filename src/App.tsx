import "@fontsource/inter";

import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Spacer,
  Text,
  VStack,
  color,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Body from "./components/Body";

import { isChrome, isMobile, isSafari } from "react-device-detect";
import { WarningIcon } from "@chakra-ui/icons";
import {
  DeepgramTranscriberConfig,
  LLMAgentConfig,
  AzureSynthesizerConfig,
  VocodeConfig,
  EchoAgentConfig,
  ChatGPTAgentConfig,
  RESTfulUserImplementedAgentConfig,
  WebSocketUserImplementedAgentConfig,
} from "vocode";
import React from "react";

const App = () => {
  const [prompt, setPrompt] = React.useState(
    "The AI is a knock knock joke bot. When the user connects, the AI will say 'Knock knock'. The user should respond with 'Who's there?'. The AI will then respond with a knock knock joke. The user should then respond with 'Who?' and the AI will respond with the punchline. The AI should then ask if the user would like to hear another joke. The user should respond with 'Yes' or 'No'. If the user responds with 'Yes', the AI will tell another joke. If the user responds with 'No', the AI will say 'Goodbye' and end the conversation. If the user responds with anything else, the AI will say 'Sorry, I didn't understand that' and repeat the prompt. The user can also end the conversation at any time by saying 'Goodbye'."
  );

  const transcriberConfig: Omit<
    DeepgramTranscriberConfig,
    "samplingRate" | "audioEncoding"
  > = {
    type: "transcriber_deepgram",
    chunkSize: 2048,
    endpointingConfig: {
      type: "endpointing_punctuation_based",
    },
  };
  const agentConfig: ChatGPTAgentConfig = {
    type: "agent_chat_gpt",
    initialMessage: { type: "message_base", text: "Hello!" },
    promptPreamble: prompt,
    endConversationOnGoodbye: true,
    generateResponses: true,
    cutOffResponse: {},
  };
  const synthesizerConfig: Omit<
    AzureSynthesizerConfig,
    "samplingRate" | "audioEncoding"
  > = {
    type: "synthesizer_azure",
    shouldEncodeAsWav: true,
    voiceName: "en-US-SteffanNeural",
  };
  const vocodeConfig: VocodeConfig = {
    apiKey: process.env.REACT_APP_VOCODE_API_KEY || "",
  };

  return (
    // <ChakraProvider theme={theme}>
    <>
      {(isMobile || !isChrome) && !isSafari ? (
        <VStack padding={10} alignItems="center">
          <WarningIcon boxSize={100} />
          <Text paddingTop={4}>
            This demo works on: Chrome (desktop) and Safari (desktop, mobile)
            only!
          </Text>
        </VStack>
      ) : (
        <Body
          setPrompt={setPrompt}
          config={{
            transcriberConfig,
            agentConfig,
            synthesizerConfig,
            vocodeConfig,
          }}
        />
      )}
    </>
    // </ChakraProvider>
  );
};

export default App;
