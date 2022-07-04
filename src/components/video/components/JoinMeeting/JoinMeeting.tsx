import { FC } from "react";
import { Box, Button } from "@twilio-paste/core";
import { CheckboxCheckIcon } from "@twilio-paste/icons/esm/CheckboxCheckIcon";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { useSelector } from "react-redux";
import log from "loglevel";

import { useRoomState } from "../../hooks/useRoomState";
import { useAppState } from "../../state";
import { useVideo } from "../VideoProvider/VideoProvider";
import { AppState } from "../../../../store/definitions";

interface JoinMeetingProps {
    roomName: string;
}
export const JoinMeeting: FC<JoinMeetingProps> = ({ roomName }) => {
    const { getToken } = useAppState();
    const { conversation } = useSelector((state: AppState) => ({
        conversation: state.chat.conversation
    }));
    const { connect: connectVideo } = useVideo();
    const roomState = useRoomState();

    const sendMessage = async (messageText: string) => {
        if (!conversation) {
            log.error("Failed sending message: no conversation found");
            return;
        }
        let preparedMessage = conversation.prepareMessage();
        preparedMessage = preparedMessage.setBody(messageText);
        await preparedMessage.build().send();
    };

    const handleJoin = async () => {
        if (!roomName) {
            return;
        }
        const token = await getToken({ roomName });
        if (!token) {
            return;
        }
        await connectVideo(token);
        sendMessage("Call started");
    };

    const onReject = async () => {
        sendMessage("Call declined");
    };

    return (
        <Box>
            {roomState === "disconnected" && (
                <Box marginTop="space50" display="flex" justifyContent="center" columnGap="space50" alignItems="center">
                    <Button variant="secondary" onClick={handleJoin}>
                        <CheckboxCheckIcon decorative title="Accept call" /> Accept
                    </Button>
                    <Button onClick={onReject} variant="destructive_secondary">
                        <CloseIcon decorative title="Decline call" /> Decline
                    </Button>
                </Box>
            )}
        </Box>
    );
};
