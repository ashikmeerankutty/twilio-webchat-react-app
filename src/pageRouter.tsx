import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { WebchatWidget } from "./components/WebchatWidget";

export const PageRouter: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:userId" element={<WebchatWidget />} />
                <Route path="/404/" element={<div>Agent not found</div>} />
                <Route path="/" element={<WebchatWidget />} />
            </Routes>
        </BrowserRouter>
    );
};
