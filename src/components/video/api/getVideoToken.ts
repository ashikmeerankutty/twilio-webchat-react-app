import { TOKEN_ENDPOINT } from "./constants";

type TokenData = {
    token: string;
};

export const getVideoToken = async (props: { roomName: string; identity: string }): Promise<TokenData> => {
    const endpoint = TOKEN_ENDPOINT;
    try {
        const tokenResponse = await fetch(endpoint, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(props)
        });
        return await tokenResponse.json();
    } catch (e) {
        return Promise.reject(new Error("Failed to create a token"));
    }
};
