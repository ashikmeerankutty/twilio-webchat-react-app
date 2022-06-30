import { LocalTrackPublication, RemoteTrackPublication } from "twilio-video";

import useTrack from "../../hooks/useTrack";
import { VideoTrack } from "../VideoTrack/VideoTrack";

interface PublicationProps {
    publication: LocalTrackPublication | RemoteTrackPublication;
}

export const Publication = ({ publication }: PublicationProps) => {
    const track = useTrack(publication);

    if (!track) return null;

    switch (track.kind) {
        case "video":
            return <VideoTrack track={track} />;
        default:
            return null;
    }
};
