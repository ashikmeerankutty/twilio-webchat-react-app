import { Box } from "@twilio-paste/core/box";
import { useSelector } from "react-redux";

import { MessagingCanvasPhase } from "./MessagingCanvasPhase";
import { AppState, EngagementPhase } from "../store/definitions";
import { LoadingPhase } from "./LoadingPhase";
import { EntryPoint } from "./EntryPoint";
import { innerContainerStyles, outerContainerStyles } from "./styles/RootContainer.styles";
import { Website } from "./website/Website";
import { EndMessagePhase } from "./EndMessagePhase";
import { AppStateProvider } from "./video/state";
import { VideoProvider } from "./video/components/VideoProvider/VideoProvider";
import { VideoChatWidget } from "./video/components/VideoChatWidget/VideoChatWidget";

const getPhaseComponent = (phase: EngagementPhase) => {
    switch (phase) {
        case EngagementPhase.Loading:
            return <LoadingPhase />;
        case EngagementPhase.MessagingCanvas:
            return <MessagingCanvasPhase />;
        case EngagementPhase.EndMessage:
            return <EndMessagePhase />;
        default:
            return <MessagingCanvasPhase />;
    }
};

export function RootContainer() {
    const { currentPhase, expanded } = useSelector(({ session }: AppState) => ({
        currentPhase: session.currentPhase,
        expanded: session.expanded
    }));

    return (
        <AppStateProvider>
            <VideoProvider>
                <Box>
                    <Website />
                    <Box {...outerContainerStyles}>
                        <VideoChatWidget />
                        {expanded && (
                            <Box data-test="root-container" {...innerContainerStyles}>
                                {getPhaseComponent(currentPhase)}
                            </Box>
                        )}
                        <EntryPoint />
                    </Box>
                </Box>
            </VideoProvider>
        </AppStateProvider>
    );
}
