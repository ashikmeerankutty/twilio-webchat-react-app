import { Box, Flex } from "@twilio-paste/core";
import { FC } from "react";
import "./Website.css";

import { Header } from "./Header";
import { Calculators } from "./Calculators";
import { Services } from "./Services";
import { Help } from "./Help";
import { WhatsNew } from "./WhatsNew";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { WebsiteProvider } from "./WebsiteProvider/WebsiteProvider";

export const Website: FC = () => {
    return (
        <WebsiteProvider>
            <Flex>
                <Box>
                    <Navbar />
                </Box>
                <Box style={{ paddingLeft: "110px" }}>
                    <Box>
                        <Header />
                        <Calculators />
                        <Services />
                        <Help />
                        <WhatsNew />
                        <Footer />
                    </Box>
                </Box>
            </Flex>
        </WebsiteProvider>
    );
};
