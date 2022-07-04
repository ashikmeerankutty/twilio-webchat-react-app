import { Box, Text } from "@twilio-paste/core";
import { FC } from "react";
import { RemoteParticipant } from "twilio-video";

import { useParticipants } from "../../hooks/useParticipants";
import { EndCallButton } from "../EndCallButton/EndCallButton";
import { Participant } from "../Participant/Participant";
import { useVideo } from "../VideoProvider/VideoProvider";

export const Participants: FC = () => {
    const participants = useParticipants();
    const { room } = useVideo();

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
            backgroundColor="colorBackgroundInverseStrong"
        >
            <Box flex="1" display="flex" alignItems="center" position="relative">
                {room?.localParticipant && (
                    <Box maxWidth="30%" overflow="hidden" position="absolute" top="10px" right="10px">
                        <Participant participant={room.localParticipant} />{" "}
                    </Box>
                )}
                {participants.length === 0 ? (
                    <Box display="flex" justifyContent="center" width="100%">
                        <Text textAlign="center" as="p" color="colorTextBrandInverse">
                            Waiting for others to join...
                        </Text>
                    </Box>
                ) : null}
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
