import merge from "lodash.merge";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { sessionDataHandler } from "./sessionDataHandler";
import { initConfig } from "./store/actions/initActions";
import { ConfigState } from "./store/definitions";
import { initLogger } from "./logger";
import { WebchatWidget } from "./components/WebchatWidget";
import { PageRouter } from "./pageRouter";

const defaultConfig: ConfigState = {
    serverUrl: "http://localhost:3001",
    theme: {
        isLight: true,
        overrides: {
            backgroundColors: {
                colorBackgroundInverseStrong: "#111a24",
            },
            textColors: {
                colorTextBrandHighlight: "rgb(2, 99, 224)",
                colorTextNeutral: "rgb(75, 86, 113)"
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
            <PageRouter />
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
