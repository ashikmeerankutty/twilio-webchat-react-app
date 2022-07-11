import { Box } from "@twilio-paste/core/box";
import { Text } from "@twilio-paste/core/text";
import { Button } from "@twilio-paste/core/button";
import { useDispatch } from "react-redux";

import { sessionDataHandler } from "../sessionDataHandler";
import { changeEngagementPhase } from "../store/actions/genericActions";
import { EngagementPhase } from "../store/definitions";
import { containerStyles, textStyles, titleStyles } from "./styles/ConversationEnded.styles";
import { initSession } from "../store/actions/initActions";

export const ConversationEnded = () => {
    const dispatch = useDispatch();
    const handleClick = async () => {
        sessionDataHandler.clear();
        dispatch(changeEngagementPhase({ phase: EngagementPhase.Loading }));
        const data = await sessionDataHandler.fetchAndStoreNewSession();
        dispatch(initSession({ token: data.token, conversationSid: data.conversationSid }));
    };

    return (
        <Box {...containerStyles}>
            <Text as="h3" {...titleStyles}>
                Thanks for chatting with us!
            </Text>
            <Text as="p" {...textStyles}>
                If you have any more questions, feel free to reach out again.
            </Text>
            <Button variant="primary" data-test="start-new-chat-button" onClick={handleClick}>
                Start new chat
            </Button>
        </Box>
    );
};
