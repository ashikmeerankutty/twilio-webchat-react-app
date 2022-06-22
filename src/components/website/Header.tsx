import { Box, Flex, Stack } from "@twilio-paste/core";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { FC, useState } from "react";

import OwlIconImage from "../../assets/owl-icon.png";
import { MenuIcon } from "./MenuIcon";

const navbarItems = [
    {
        key: "savings",
        name: "Savings"
    },
    {
        key: "creditCards",
        name: "Credit Cards"
    },
    {
        key: "autoLoans",
        name: "Auto Loans"
    },
    {
        key: "homeLoans",
        name: "Home Loans"
    },
    {
        key: "buisiness",
        name: "Buisiness"
    },
    {
        key: "investing",
        name: "Investing"
    }
];

export const Header: FC = () => {
    const [showResponsiveMenu, setShowResponsiveMenu] = useState<boolean>(false);
    return (
        <Box as="div" backgroundColor="colorBackgroundPrimary">
            <Flex
                maxWidth={1280}
                marginX="auto"
                hAlignContent="between"
                vAlignContent="center"
                padding="space40"
                height={64}
                width="100%"
            >
                <Box as="img" src={OwlIconImage} alt="logo" height="100%" />
                <Box width="100%" display={["none", "none", "block"]}>
                    <Flex hAlignContent="right" vAlignContent="center">
                        <Flex marginX="space100">
                            {navbarItems.map(({ key, name }) => (
                                <Box
                                    as="button"
                                    paddingX="space60"
                                    paddingY="space50"
                                    key={key}
                                    border="none"
                                    backgroundColor="transparent"
                                    cursor="pointer"
                                    color="colorTextInverse"
                                    opacity="0.7"
                                    textTransform="uppercase"
                                >
                                    {name}
                                </Box>
                            ))}
                        </Flex>
                        <Box
                            backgroundColor="transparent"
                            borderColor="colorBorderInverseStrongest"
                            color="colorTextInverse"
                            as="button"
                            borderWidth="borderWidth10"
                            borderRadius="borderRadius20"
                            padding="space40"
                            borderStyle="solid"
                            cursor="pointer"
                        >
                            SIGN IN
                        </Box>
                    </Flex>
                </Box>
                <Box
                    as="button"
                    cursor="pointer"
                    backgroundColor="transparent"
                    border="none"
                    display={["block", "block", "none"]}
                    onClick={() => setShowResponsiveMenu(!showResponsiveMenu)}
                >
                    {showResponsiveMenu ? (
                        <CloseIcon color="colorTextBrandInverse" decorative={false} title="Close" />
                    ) : (
                        <MenuIcon />
                    )}
                </Box>
                <Box
                    backgroundColor="colorBackgroundPrimary"
                    position="fixed"
                    width="100%"
                    top={64}
                    left={0}
                    height={showResponsiveMenu ? "auto" : 0}
                    overflow="hidden"
                    zIndex="zIndex90"
                >
                    <Stack orientation="vertical" spacing="space30">
                        {navbarItems.map(({ key, name }) => (
                            <Box key={key} textAlign="center">
                                <Box
                                    as="button"
                                    paddingX="space60"
                                    paddingY="space50"
                                    border="none"
                                    backgroundColor="transparent"
                                    cursor="pointer"
                                    color="colorTextInverse"
                                    opacity="0.7"
                                    textAlign="center"
                                    textTransform="uppercase"
                                >
                                    {name}
                                </Box>
                            </Box>
                        ))}
                        <Box textAlign="center" marginBottom="space100">
                            <Box
                                backgroundColor="transparent"
                                as="button"
                                borderWidth="borderWidth10"
                                borderRadius="borderRadius20"
                                padding="space40"
                                borderStyle="solid"
                                cursor="pointer"
                                marginX="space50"
                                borderColor="colorBorderInverseStrongest"
                                color="colorTextInverse"
                            >
                                SIGN IN
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    );
};
