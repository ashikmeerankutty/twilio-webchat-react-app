import { Box, Flex, Text } from "@twilio-paste/core";
import { FC } from "react";

import HeroImage from "../../assets/hero-background.jpg";

export const Hero: FC = () => {
    return (
        <Box
            as="div"
            backgroundImage={`linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.6)
              ), url(${HeroImage})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            position="relative"
            color="colorTextInverse"
            minHeight={260}
            marginY="space50"
            display="flex"
            alignItems="center"
        >
            <Flex padding="space100" hAlignContent="left" height="100%" vAlignContent="center" vertical>
                <Text
                    lineHeight="lineHeight100"
                    color="inherit"
                    as="h3"
                    fontSize="fontSize110"
                    fontWeight="fontWeightNormal"
                >
                    Expect more from your bank
                </Text>
                <Box marginTop="space50" maxWidth="50ch">
                    <Text as="p" lineHeight="lineHeight40" fontSize="fontSize50" color="inherit">
                        Welcome to a new way of banking. From finding your dream home to fostering your financial
                        independence we here to serve all of your financial needs.
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};
