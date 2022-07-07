import { Box, Column, Grid } from "@twilio-paste/core";
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
        <Grid>
            <Column span={1}>
                <Navbar />
            </Column>
            <Column span={11}>
                <Box>
                    <Header />
                    <Calculators />
                    <Services />
                    <Help />
                    <WhatsNew />
                    <Footer />
                </Box>
            </Column>
        </Grid>
    );
};
