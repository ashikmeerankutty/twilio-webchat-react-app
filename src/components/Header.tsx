import { Box } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";

import { containerStyles, titleStyles } from "./styles/Header.styles";
import OwlIcon from "../assets/owl-icon-inverse.png";

export const Header = ({ customTitle }: { customTitle?: string }) => {
    return (
        <Box as="header" {...containerStyles}>
            <Box as="img" maxWidth="100%" height={20} src={OwlIcon} alt="logo" />
            <Text as="h2" {...titleStyles}>
                {customTitle || "Chat with us"}
            </Text>
        </Box>
    );
};
