import { contactBackend } from "../../../sessionDataHandler";
import { TOKEN_ENDPOINT } from "./constants";

type TokenData = {
    token: string;
};

export const getVideoToken = async (props: { roomName: string; identity: string }): Promise<TokenData> => { 
    try {
        return await contactBackend<TokenData>(TOKEN_ENDPOINT, props);
    } catch (e) {
        return Promise.reject(new Error("Failed to create a token"));
    }
};
