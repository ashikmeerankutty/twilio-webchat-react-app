import { Box } from "@twilio-paste/core";
import { FC } from "react";

import { About } from "./About";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { InfoCards } from "./InfoCards";

export const Website: FC = () => {
    return (
        <Box>
            <Header />
            <Box paddingX="space40" maxWidth={1280} marginX="auto">
                <Hero />
                <InfoCards />
                <About />
            </Box>
            <Footer />
        </Box>
    );
};
