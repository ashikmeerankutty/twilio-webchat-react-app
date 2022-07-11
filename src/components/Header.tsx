import { Box } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { useDispatch, useSelector } from "react-redux";

import { closeStyles, containerStyles, infoStyles, titleStyles } from "./styles/Header.styles";
import OwlIcon from "../assets/owl-icon-inverse.png";
import { changeEngagementPhase, changeExpandedStatus } from "../store/actions/genericActions";
import { AppState, EngagementPhase } from "../store/definitions";

export const Header = ({ customTitle }: { customTitle?: string }) => {
    const dispatch = useDispatch();
    const { conversation } = useSelector((state: AppState) => ({
        conversation: state.chat.conversation
    }));
    const endConversation = () => {
        if (conversation?.state?.current !== "active") {
            dispatch(changeExpandedStatus({ expanded: false }));
            return;
        }
        dispatch(changeEngagementPhase({ phase: EngagementPhase.EndMessage }));
    };

    return (
        <Box as="header" {...containerStyles}>
            <Box {...infoStyles}>
                <Box as="img" maxWidth="100%" height={20} src={OwlIcon} alt="logo" />
                <Text as="h2" {...titleStyles}>
                    {customTitle || "Chat with us"}
                </Text>
            </Box>
            <Box as="button" {...closeStyles} onClick={endConversation}>
                <CloseIcon decorative={false} title="Close" />
            </Box>
        </Box>
    );
};
