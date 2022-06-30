import { FC } from "react";
import { Box, Button } from "@twilio-paste/core";
import { CheckboxCheckIcon } from "@twilio-paste/icons/esm/CheckboxCheckIcon";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";

import { useRoomState } from "../../hooks/useRoomState";
import { useAppState } from "../../state";
import { useVideo } from "../VideoProvider/VideoProvider";

interface JoinMeetingProps {
    roomName: string;
}
export const JoinMeeting: FC<JoinMeetingProps> = ({ roomName }) => {
    const { getToken } = useAppState();
    const { connect: connectVideo } = useVideo();
    const roomState = useRoomState();

    const handleJoin = async () => {
        if (!roomName) {
            return;
        }
        const token = await getToken({ roomName });
        if (!token) {
            return;
        }
        await connectVideo(token);
    };

    return (
        <Box>
            {roomState === "disconnected" && (
                <Box marginTop="space50" display="flex" justifyContent="center" columnGap="space50" alignItems="center">
                    <Button variant="secondary" onClick={handleJoin}>
                        <CheckboxCheckIcon decorative title="Accept call" /> Accept
                    </Button>
                    <Button variant="destructive_secondary">
                        <CloseIcon decorative title="Decline call" /> Decline
                    </Button>
                </Box>
            )}
        </Box>
    );
};
