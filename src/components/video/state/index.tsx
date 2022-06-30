import { createContext, FC, useContext, useState } from "react";
import { TwilioError } from "twilio-video";

import { getVideoToken } from "../api/getVideoToken";
import { Status } from "./constants";

interface StateContextType {
    identity: string;
    token?: string;
    status: Status;
    isLoading: boolean;
    error: TwilioError | Error | null;
    setStatus: (status: Status) => void;
    getToken: (props: { roomName: string }) => Promise<string | null>;
    setToken: (token: string) => void;
    setIdentity: (identity: string) => void;
    setError(error: TwilioError | Error | null): void;
}

const StateContext = createContext<StateContextType>(null!);

export const useAppState = () => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error("useAppState must be used within the AppStateProvider");
    }
    return context;
};

export const AppStateProvider: FC = ({ children }) => {
    const [error, setError] = useState<TwilioError | Error | null>(null);
    const [token, setToken] = useState<string>();
    const [status, setStatus] = useState<Status>(Status.IDLE);
    const [identity, setIdentity] = useState<string>("");

    const getToken = async (props: { roomName: string }): Promise<string | null> => {
        try {
            const { token: newToken } = await getVideoToken({
                ...props,
                identity: (Math.random() + 1).toString(36).substring(7)
            });
            setToken(newToken);
            return newToken;
        } catch (e) {
            setStatus(Status.IDLE);
            setError(e as Error);
            return null;
        } finally {
            setStatus(Status.IDLE);
        }
    };

    const state = {
        identity,
        setIdentity,
        error,
        setError,
        token,
        setToken,
        getToken,
        status,
        setStatus,
        isLoading: status !== Status.IDLE
    };

    return <StateContext.Provider value={state}>{children}</StateContext.Provider>;
};
