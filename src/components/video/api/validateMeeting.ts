import { MEETING_ENDPOINT } from "./constants";

type MeetingData = {
    room: string;
};

export const validateMeeting = async ({
    meetingId,
    passcode
}: {
    meetingId: string;
    passcode: string;
}): Promise<MeetingData> => {
    const endpoint = MEETING_ENDPOINT;
    const params: Record<string, string> = { passcode };
    let query = Object.keys(params)
        .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
        .join("&");
    try {
        const meetingResponse = await fetch(`${endpoint}/${meetingId}?${query}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });
        if (meetingResponse.status >= 200 && meetingResponse.status < 300) {
            const meetingData = await meetingResponse.json();
            return meetingData;
        }
        return Promise.reject(new Error("Failed to join meeting"));
    } catch (e) {
        console.log(e);
        return Promise.reject(new Error("Failed to join meeting"));
    }
};
