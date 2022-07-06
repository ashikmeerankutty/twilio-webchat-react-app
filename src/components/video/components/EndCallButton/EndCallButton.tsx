import { Box, Text } from "@twilio-paste/core";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import log from "loglevel";
import { FC } from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../../../store/definitions";
import { useVideo } from "../VideoProvider/VideoProvider";

export const EndCallButton: FC = () => {
    const { room } = useVideo();
    const { conversation } = useSelector((state: AppState) => ({
        conversation: state.chat.conversation
    }));
    const sendMessage = async (messageText: string) => {
        if (!conversation) {
            log.error("Failed sending message: no conversation found");
            return;
        }
        let preparedMessage = conversation.prepareMessage();
        preparedMessage = preparedMessage.setBody(messageText);
        await preparedMessage.build().send();
    };
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box
                onClick={() => {
                    room?.disconnect();
                    sendMessage("Call ended");
                }}
                backgroundColor="colorBackgroundDestructive"
                padding="space30"
                borderRadius="borderRadiusCircle"
                cursor="pointer"
            >
                <CloseIcon color="colorTextBrandInverse" decorative={true} title="Description of icon" />
            </Box>
        </Box>
    );
};
