import { Box, Column, Grid } from "@twilio-paste/core";
import { FC, useRef } from "react";
import "./Website.css";

import { TopHeader } from "./TopHeader";
import { Calculators } from "./Calculators";
import { Services } from "./Services";
import { Help } from "./Help";
import { WhatsNew } from "./WhatsNew";
import { MainFooter } from "./MainFooter";
import { Navbar } from "./Navbar";

export const Website: FC = () => {

    return (
        <Grid>
            <Column span={1}>
                <Navbar />
            </Column>
            <Column span={11}>
                <Box>
                    <TopHeader />
                    <Calculators />
                    <Services />
                    <Help />
                    <WhatsNew />
                    <MainFooter />
                </Box>
            </Column>
        </Grid>
    );
};
