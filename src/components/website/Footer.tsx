import { Box, Flex, Text } from "@twilio-paste/core";
import { FC } from "react";

const footerElements = [
    {
        key: "privacy",
        text: "Privacy Policy"
    },
    {
        key: "termsOfService",
        text: "Terms Of Service"
    }
];

export const Footer: FC = () => {
    return (
        <Box position="fixed" bottom="0" width="100%" backgroundColor="colorBackgroundPrimary">
            <Flex
                maxWidth={1280}
                hAlignContent="between"
                height="100%"
                vAlignContent="center"
                paddingX="space40"
                minHeight={64}
                marginX="auto"
            >
                <Box opacity="0.7">
                    <Text color="colorTextInverse" as="p">
                        Owl Bank ©
                    </Text>
                </Box>
                <Flex height="100%" hAlignContent="between" vAlignContent="center">
                    {footerElements.map(({ key, text }) => (
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
                        >
                            {text}
                        </Box>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
};
