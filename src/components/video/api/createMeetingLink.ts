import { MEETING_ENDPOINT } from "./constants";

export const createMeetingLink = async (): Promise<string> => {
    const endpoint = MEETING_ENDPOINT;
    try {
        const createMeetingResponse = await fetch(endpoint, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            }
        });
        const { room, passcode } = await createMeetingResponse.json();
        return `${window.origin}/j/${room}?passcode=${passcode}`;
    } catch (e) {
        return Promise.reject(new Error("Failed to create a meeting"));
    }
};
