import { Box, Button, HStack, Select, Spinner, VStack } from "@chakra-ui/react";
import React from "react";
import { useConversation, AudioDeviceConfig, ConversationConfig } from "vocode";
import { isMobile } from "react-device-detect";

const Settings = ({
  audioDeviceConfig,
  setAudioDeviceConfig,
  status,
}: {
  audioDeviceConfig: AudioDeviceConfig;
  setAudioDeviceConfig: React.Dispatch<React.SetStateAction<AudioDeviceConfig>>;
  status: string;
}) => {
  const [inputDevices, setInputDevices] = React.useState<MediaDeviceInfo[]>([]);
  const [outputDevices, setOutputDevices] = React.useState<MediaDeviceInfo[]>(
    []
  );

  let stat = status;

  React.useEffect(() => {
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        setInputDevices(
          devices.filter(
            (device) => device.deviceId && device.kind === "audioinput"
          )
        );
        setOutputDevices(
          devices.filter(
            (device) => device.deviceId && device.kind === "audiooutput"
          )
        );
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <>
      <div className="Options">
        {!isMobile && (
          <VStack>
            {inputDevices.length > 0 && (
              <Select
                color={"#FFFFFF"}
                style={{
                  fontFamily: "DOSVGA",
                  textOverflow: "ellipsis",
                  width: "250px",
                }}
                disabled={["connecting", "connected"].includes(stat)}
                onChange={(event) =>
                  setAudioDeviceConfig({
                    ...audioDeviceConfig,
                    inputDeviceId: event.target.value,
                  })
                }
                value={audioDeviceConfig.inputDeviceId}
              >
                {inputDevices.map((device, i) => {
                  return (
                    <option key={i} value={device.deviceId}>
                      {device.label}
                    </option>
                  );
                })}
              </Select>
            )}
            {outputDevices.length > 0 && (
              <Select
                color={"#FFFFFF"}
                style={{
                  fontFamily: "DOSVGA",
                  textOverflow: "ellipsis",
                  width: "250px",
                }}
                disabled
                onChange={(event) =>
                  setAudioDeviceConfig({
                    ...audioDeviceConfig,
                    outputDeviceId: event.target.value,
                  })
                }
                value={audioDeviceConfig.outputDeviceId}
              >
                {outputDevices.map((device, i) => {
                  return (
                    <option key={i} value={device.deviceId}>
                      {device.label}
                    </option>
                  );
                })}
              </Select>
            )}
            <Select
              color={"#FFFFFF"}
              style={{ fontFamily: "DOSVGA", width: "250px" }}
              disabled={["connecting", "connected"].includes(stat)}
              onChange={(event) =>
                event.target.value &&
                setAudioDeviceConfig({
                  ...audioDeviceConfig,
                  outputSamplingRate: parseInt(event.target.value),
                })
              }
              placeholder="Set output sampling rate"
              value={audioDeviceConfig.outputSamplingRate}
            >
              {["8000", "16000", "24000", "44100", "48000"].map((rate, i) => {
                return (
                  <option key={i} value={rate}>
                    {rate} Hz
                  </option>
                );
              })}
            </Select>
          </VStack>
        )}
      </div>
    </>
  );
};

export default Settings;
