import { Box } from "@twilio-paste/core";
import { FC } from "react";
import { RemoteParticipant } from "twilio-video";

import { useParticipants } from "../../hooks/useParticipants";
import { EndCallButton } from "../EndCallButton/EndCallButton";
import { Participant } from "../Participant/Participant";

export const Participants: FC = () => {
    const participants = useParticipants();

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            position="absolute"
            height="100%"
            width="100%"
            top={0}
            right={0}
            backgroundColor="colorBackgroundDarkest"
        >
            <Box flex="1" display="flex" alignItems="center">
                {participants.map((participant: RemoteParticipant) => {
                    return <Participant key={participant.sid} participant={participant} />;
                })}
            </Box>
            <Box display="flex" justifyContent="center" padding="space50" backgroundColor="colorBackgroundBody">
                <EndCallButton />
            </Box>
        </Box>
    );
};
