import merge from "lodash.merge";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { sessionDataHandler } from "./sessionDataHandler";
import { initConfig } from "./store/actions/initActions";
import { ConfigState } from "./store/definitions";
import { initLogger } from "./logger";
import { WebchatWidget } from "./components/WebchatWidget";

const defaultConfig: ConfigState = {
    serverUrl: "http://localhost:3001",
    theme: {
        isLight: true,
        overrides: {
            backgroundColors: {
                colorBackgroundPrimary: "rgb(11 96 45)",
                colorBackgroundBodyInverse: "rgba(0,0,0,.5)",
                colorBackgroundStrong: "rgb(244, 244, 246)",
                colorBackgroundPrimaryStronger: "rgb(8 112 50)"
            },
            textColors: {
                colorTextBrandHighlight: "rgb(11 96 45)",
                colorTextNeutral: "gb(75, 86, 113)"
            }
        }
    },
    fileAttachment: {
        enabled: true,
        maxFileSize: 16777216, // 16 MB
        acceptedExtensions: ["jpg", "jpeg", "png", "amr", "mp3", "mp4", "pdf", "txt"]
    }
};

const initWebchat = async (config: ConfigState) => {
    const mergedConfig = merge({}, defaultConfig, config);
    sessionDataHandler.setEndpoint(mergedConfig.serverUrl);
    store.dispatch(initConfig(mergedConfig));
    initLogger();
    const rootElement = document.getElementById("root");

    render(
        <Provider store={store}>
            <WebchatWidget />
        </Provider>,
        rootElement
    );
};

declare global {
    interface Window {
        Twilio: {
            initWebchat: (config: ConfigState) => void;
        };
    }
}

// Expose `initWebchat` function to window object
Object.assign(window, {
    Twilio: {
        initWebchat
    }
});
