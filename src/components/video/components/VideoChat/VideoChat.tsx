import { FC } from "react";

import { JoinMeeting } from "../JoinMeeting/JoinMeeting";
import { AppStateProvider } from "../../state";
import { VideoProvider } from "../VideoProvider/VideoProvider";

interface VideoChatProps {
    roomName: string;
}

export const VideoChat: FC<VideoChatProps> = ({ roomName }) => {
    if (!roomName) {
        return null;
    }
    return (
        <AppStateProvider>
            <VideoProvider>
                <JoinMeeting roomName={roomName} />
            </VideoProvider>
        </AppStateProvider>
    );
};
