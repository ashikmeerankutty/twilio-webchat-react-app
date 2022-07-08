import { Box, Card, Column, Grid, Text } from "@twilio-paste/core";
import { FC } from "react";

import calcualatorsClosing from "../../assets/icon-calculators-closing.svg";
import calcualatorsEquity from "../../assets/icon-calculators-equity.svg";
import calcualatorEstimator from "../../assets/icon-calculators-estimator.svg";
import calcualatorsMortgage from "../../assets/icon-calculators-mortgage.svg";
import calcualatorsRefi from "../../assets/icon-calculators-refi.svg";
import calcualatorsBackground from "../../assets/calculator-background.jpeg";

const calculators = [
    {
        displayText: "Mortgage calculator",
        description: "Calculate monthly mortgage payment and rate options",
        cta: "Estimate",
        icon: calcualatorsMortgage,
        size: 32
    },
    {
        displayText: "Refinance calculator",
        description: "Get a quick, custom rate based on your refinancing plans.",
        cta: "Learn more",
        icon: calcualatorsRefi,
        size: 24
    },
    {
        displayText: "Closing costs calculator",
        description: "Estimate your closing costs based on area and purchase price.",
        cta: "Calculate now",
        icon: calcualatorsClosing,
        size: 32
    },
    {
        displayText: "Home equity calculator",
        description: "Figure out what monthly payment could fit in your budget.",
        cta: "Try it out",
        icon: calcualatorsEquity,
        size: 26
    },
    {
        displayText: "Home value estimator",
        description: "Find out estimated payments and rates for a HELOC.",
        cta: "Calculate",
        icon: calcualatorEstimator,
        size: 24
    }
];

export const Calculators: FC = () => {
    return (
        <Box
            as="section"
            id="calculators"
            paddingX="space70"
            style={{
                paddingTop: "60px",
                paddingBottom: "200px"
            }}
            backgroundImage={`url(${calcualatorsBackground})`}
            backgroundSize="cover"
            backgroundPosition="right top"
            backgroundRepeat="no-repeat"
        >
            <Box>
                <Text as="h1" fontWeight="fontWeightNormal" fontSize="fontSize110">
                    Easy-to-use calculators
                </Text>
                <Box marginTop="space100" maxWidth="720px">
                    <Text
                        style={{ fontWeight: 300 }}
                        lineHeight="lineHeight40"
                        fontSize="fontSize60"
                        marginY="space30"
                        as="p"
                    >
                        These mortgage calculators may be able to help you understand how much you can borrow or what
                        costs may come up along the way.
                    </Text>
                </Box>
                <Box maxWidth="80%">
                    <Grid marginTop="space100" gutter="space20">
                        {calculators.map(({ displayText, icon, size, description, cta }) => {
                            return (
                                <Column key={displayText}>
                                    <Box
                                        cursor="pointer"
                                        backgroundColor="colorBackground"
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="flex-end"
                                        className="flip-card"
                                    >
                                        <Box className="flip-card-inner">
                                            <Box
                                                padding="space50"
                                                display="flex"
                                                flexDirection="column"
                                                justifyContent="flex-end"
                                                className="flip-card-front"
                                                height="150px"
                                                backgroundColor="colorBackground"
                                            >
                                                <Box height={`${size}px`} width={`${size}px`} as="img" src={icon} />
                                                <Box marginTop="space20" maxWidth="100px">
                                                    <Text style={{ fontWeight: 300 }} fontSize="fontSize50" as="p">
                                                        {displayText}
                                                    </Text>
                                                </Box>
                                            </Box>
                                            <Box
                                                backgroundColor="colorBackgroundDestructive"
                                                padding="space50"
                                                height="150px"
                                                className="flip-card-back"
                                                display="flex"
                                                flexDirection="column"
                                                alignItems="start"
                                                justifyContent="center"
                                            >
                                                <Text color="colorTextBrandInverse" as="p">
                                                    {description}
                                                </Text>
                                                <Text fontWeight="fontWeightBold" color="colorTextBrandInverse" as="p">
                                                    {cta}
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Column>
                            );
                        })}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};
