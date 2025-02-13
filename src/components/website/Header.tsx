/* eslint-disable react/jsx-max-depth */
import { Anchor, Box, Column, Grid, Text } from "@twilio-paste/core";
import { FC, useCallback, useEffect, useState } from "react";

import profileImage from "../../assets/profile-user.jpeg";
import iconBBa from "../../assets/icon-cta-bba.svg";
import iconDme from "../../assets/icon-cta-dme.svg";
import iconContact from "../../assets/icon-cta-contact.svg";
import chevronUpIcon from "../../assets/icon-chevron-up-gray.svg";
import chevronDownIcon from "../../assets/icon-chevron-down-gray.svg";
import callIcon from "../../assets/icon-cta-call.svg";
import { useWebsite } from "./WebsiteProvider/WebsiteProvider";

export const Header: FC = () => {
    const [infoExpanded, setInfoExpanded] = useState(false);
    const [showNameBar, setShowNameBar] = useState(false);

    const { userData, fetchAndUpdateUserData, userDataLoading } = useWebsite();

    const onScroll = useCallback(() => {
        if (window.scrollY > 150) {
            setShowNameBar(true);
        } else {
            setShowNameBar(false);
        }
    }, [setShowNameBar]);

    useEffect(() => {
        try {
            fetchAndUpdateUserData("jenn-riannon");
        } catch {
            console.log("Error loading");
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [onScroll]);

    if (!userData || userDataLoading) {
        return <div>Loading</div>;
    }

    return (
        <Box as="section" id="home" width="100%">
            <Box zIndex="zIndex20" backgroundColor="colorBackgroundBody" position="fixed" top="0" width="100%">
                <Box
                    paddingX="space70"
                    paddingY="space40"
                    backgroundColor="colorBackgroundStrong"
                    display="flex"
                    columnGap="space30"
                    height="44px"
                >
                    <Text as="h4">OWL Bank Coronavirus Resource Center</Text>
                    <Anchor href="#">
                        <Text color="inherit" fontWeight="fontWeightBold" as="p">
                            See Details
                        </Text>
                    </Anchor>
                </Box>
                <Box width="calc(100% - 110px);" paddingX="space70" paddingY="space70">
                    <Box display="flex" justifyContent="space-between">
                        <Text as="h3">OWL BANK</Text>
                        <Box display="flex" columnGap="space30">
                            <Anchor href="#">
                                <Text color="inherit" fontWeight="fontWeightBold" as="p">
                                    Log in
                                </Text>
                            </Anchor>
                            <Text as="p">to manage your loan</Text>
                        </Box>
                    </Box>
                </Box>
                {showNameBar && (
                    <Box
                        width="calc(100% - 110px)"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        style={{
                            background: "#e5f4fc"
                        }}
                        paddingX="space70"
                        height="53px"
                    >
                        <Text as="h3" fontSize="fontSize50">
                            John Lockhart
                        </Text>
                        <Box display="flex" alignItems="center" columnGap="space30">
                            <Text as="h3" fontWeight="fontWeightNormal" fontSize="fontSize60" color="colorTextLink">
                                Get started
                            </Text>
                            <Text
                                style={{ fontWeight: 300 }}
                                as="h3"
                                fontWeight="fontWeightNormal"
                                fontSize="fontSize60"
                            >
                                or call
                            </Text>
                            <Box style={{ fontWeight: 300 }} width="15px" src={callIcon} as="img" />
                            <Text as="h3" style={{ fontWeight: 300 }} fontSize="fontSize60">
                                415.964.2016
                            </Text>
                        </Box>
                    </Box>
                )}
            </Box>
            <Box style={{ marginTop: "112px" }} paddingX="space70" paddingY="space40">
                <Grid gutter="space30" paddingY="space40">
                    <Column span={7}>
                        <Box display="flex" columnGap="space80">
                            <Box maxWidth="120px" objectFit="cover" as="img" src={profileImage} />
                            <Box display="flex" flexDirection="column" rowGap="space40">
                                <Text fontWeight="fontWeightNormal" fontSize="fontSize80" as="h1">
                                    John Lockhart
                                </Text>
                                {["Credit Solutions Advisor", "NMLS ID: 1197973", "415.941.4036"].map((detail) => {
                                    return (
                                        <Text
                                            style={{ fontWeight: 300 }}
                                            color="colorTextWeak"
                                            fontSize="fontSize60"
                                            key={detail}
                                            as="p"
                                        >
                                            {detail}
                                        </Text>
                                    );
                                })}
                                <Text
                                    as="a"
                                    fontSize="fontSize60"
                                    cursor="pointer"
                                    _hover={{ textDecoration: "underline" }}
                                    style={{ fontWeight: 300 }}
                                    color="colorTextLink"
                                >
                                    1640 Van Ness Ave, San Francisco, CA 94109
                                </Text>
                            </Box>
                        </Box>
                        <Box marginY="space80" paddingTop="space30">
                            <Text fontSize="fontSize60" lineHeight="lineHeight40" style={{ fontWeight: 300 }} as="p">
                                I&apos;m John, and I&apos;m dedicated to helping people find the home loan that
                                comfortably fits their needs in the San Francisco area. As a President&apos;s Club
                                member and a trusted partner to many people in this community, I&apos;m here to guide
                                you through every step of the home loan process. Call me today if you&apos;re ready to
                                get started or would like more information.
                            </Text>
                            <Box
                                marginY="space50"
                                onClick={() => setInfoExpanded(!infoExpanded)}
                                as="button"
                                border="none"
                                display="flex"
                                columnGap="space40"
                                backgroundColor="transparent"
                                alignItems="center"
                                cursor="pointer"
                                padding="space0"
                            >
                                <Text fontWeight="fontWeightNormal" fontSize="fontSize60" as="p">
                                    Learn more about me
                                </Text>
                                {infoExpanded ? (
                                    <Box height="10px" as="img" src={chevronUpIcon} />
                                ) : (
                                    <Box height="10px" as="img" src={chevronDownIcon} />
                                )}
                            </Box>
                            {infoExpanded && (
                                <Box marginTop="space100">
                                    <Text fontSize="fontSize60" as="h3">
                                        Awards
                                    </Text>
                                    <Box as="ul">
                                        <Box style={{ fontWeight: 300 }} fontSize="fontSize60" as="li">
                                            President &apos;s Club
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Column>
                    <Column span={5}>
                        <Box paddingX="space100" paddingY="space80" backgroundColor="colorBackgroundPrimaryLightest">
                            <Text as="h3" style={{ fontWeight: 400 }} textAlign="center" fontSize="fontSize60">
                                Many ways to apply
                            </Text>
                            <Grid marginTop="space70" gutter="space30">
                                <Column>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        cursor="pointer"
                                        className="contact-card"
                                    >
                                        <Box marginBottom="space30" maxHeight="24px" as="img" src={iconDme} />
                                        <Box width="100px">
                                            <Text
                                                className="contact-card-item"
                                                fontSize="fontSize40"
                                                textAlign="center"
                                                as="p"
                                            >
                                                Get Started
                                            </Text>
                                        </Box>
                                    </Box>
                                </Column>
                                <Column display="flex">
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        flexDirection="column"
                                        justifyContent="center"
                                        cursor="pointer"
                                        className="contact-card"
                                    >
                                        <Box marginBottom="space30" maxHeight="24px" as="img" src={iconBBa} />
                                        <Box width="100px">
                                            <Text
                                                className="contact-card-item"
                                                fontSize="fontSize40"
                                                textAlign="center"
                                                as="p"
                                            >
                                                Schedule an appointment
                                            </Text>
                                        </Box>
                                    </Box>
                                </Column>
                                <Column>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        flexDirection="column"
                                        justifyContent="center"
                                        cursor="pointer"
                                        className="contact-card"
                                    >
                                        <Box marginBottom="space30" maxHeight="24px" as="img" src={iconContact} />
                                        <Box width="100px">
                                            <Text
                                                className="contact-card-item"
                                                fontSize="fontSize40"
                                                textAlign="center"
                                                as="p"
                                            >
                                                Get a callback from me
                                            </Text>
                                        </Box>
                                    </Box>
                                </Column>
                            </Grid>
                        </Box>
                    </Column>
                </Grid>
            </Box>
        </Box>
    );
};
