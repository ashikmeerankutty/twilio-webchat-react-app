import { Box } from "@twilio-paste/core";
import { FC } from "react";

import { LoadingPhase } from "../../../LoadingPhase";
import { useRoomState } from "../../hooks/useRoomState";
import { Participants } from "../Participants/Participants";
import { useVideo } from "../VideoProvider/VideoProvider";

export const VideoChatWidget: FC = () => {
    const roomState = useRoomState();
    const { isConnecting } = useVideo();

    if (roomState !== "connected" && !isConnecting) {
        return null;
    }

    return (
        <Box
            position="absolute"
            backgroundColor="colorBackgroundBody"
            top="0"
            right="100%"
            width="320px"
            marginRight="space50"
            height="590px"
            borderRadius="borderRadius30"
            boxShadow="shadow"
            overflow="hidden"
            boxSizing="border-box"
        >
            {isConnecting && <LoadingPhase />}
            {roomState === "connected" && <Participants />}
        </Box>
    );
};
