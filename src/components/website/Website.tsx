import { Box, Column, Flex, Grid } from "@twilio-paste/core";
import { FC } from "react";
import "./Website.css";

import { Header } from "./Header";
import { Calculators } from "./Calculators";
import { Services } from "./Services";
import { Help } from "./Help";
import { WhatsNew } from "./WhatsNew";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Website: FC = () => {
    return (
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
    );
};
