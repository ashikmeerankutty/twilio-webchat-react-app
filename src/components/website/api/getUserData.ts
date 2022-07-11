import { contactBackend } from "../../../sessionDataHandler";
import { UserData } from "./types";


export const getUserData = async (userId: string) => {
    try {
         return await contactBackend<UserData>("/user", {
            userId
        });
    } catch (e) {
        throw Error(`Something went wrong when trying to get user: ${e}`);
    }
};
