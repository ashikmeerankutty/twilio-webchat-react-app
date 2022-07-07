/* eslint-disable react/jsx-max-depth */
import { Anchor, Box, Column, Grid, Text } from "@twilio-paste/core";
import { FC } from "react";

import profileImage from "../../assets/profile-user.jpeg";
import iconBBa from "../../assets/icon-cta-bba.svg";
import iconDme from "../../assets/icon-cta-dme.svg";
import iconContact from "../../assets/icon-cta-contact.svg";

export const TopHeader: FC = () => {
    return (
        <Box as="section" id="home" width="100%">
            <Box backgroundColor="colorBackgroundBody" position="fixed" top="0" width="100%">
                <Box
                    paddingX="space70"
                    paddingY="space40"
                    backgroundColor="colorBackgroundStrong"
                    display="flex"
                    columnGap="space30"
                    height="44px"
                >
                    <Text as="h4">OWL Bank Coronavirus Resource Center</Text>
                    <Anchor href="#">See Details</Anchor>
                </Box>
                <Box width="calc(100% - 8.332%);" paddingX="space70" paddingY="space70">
                    <Box display="flex" justifyContent="space-between">
                        <Text as="h3">OWL BANK</Text>
                        <Box display="flex" columnGap="space30">
                            <Anchor href="#">Log in</Anchor>
                            <Text as="p">to manage your loan</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box style={{ marginTop: "112px" }} paddingX="space70" paddingY="space40">
                <Grid gutter="space30" paddingY="space40">
                    <Column span={7}>
                        <Box display="flex" columnGap="space80">
                            <Box maxWidth="120px" objectFit="cover" as="img" src={profileImage} />
                            <Box display="flex" flexDirection="column" rowGap="space40">
                                <Text fontWeight="fontWeightNormal" fontSize="fontSize80" as="h1">
                                    Jason Lockhart
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
                                I&apos;m Jason, and I&apos;m dedicated to helping people find the home loan that
                                comfortably fits their needs in the San Francisco area. As a President&apos;s Club
                                member and a trusted partner to many people in this community, I&apos;m here to guide
                                you through every step of the home loan process. Call me today if you&apos;re ready to
                                get started or would like more information.
                            </Text>
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
                                    >
                                        <Box marginBottom="space30" maxHeight="24px" as="img" src={iconDme} />
                                        <Box width="100px">
                                            <Text fontSize="fontSize40" textAlign="center" as="p">
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
                                    >
                                        <Box marginBottom="space30" maxHeight="24px" as="img" src={iconBBa} />
                                        <Box width="100px">
                                            <Text fontSize="fontSize40" textAlign="center" as="p">
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
                                    >
                                        <Box marginBottom="space30" maxHeight="24px" as="img" src={iconContact} />
                                        <Box width="100px">
                                            <Text fontSize="fontSize40" textAlign="center" as="p">
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
