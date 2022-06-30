import { Box, Text } from "@twilio-paste/core";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import { FC } from "react";

import { useVideo } from "../VideoProvider/VideoProvider";

export const EndCallButton: FC = () => {
    const { room } = useVideo();
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box
                onClick={() => room?.disconnect()}
                backgroundColor="colorBackgroundDestructive"
                padding="space30"
                borderRadius="borderRadiusCircle"
                cursor="pointer"
            >
                <CloseIcon color="colorTextBrandInverse" decorative={true} title="Description of icon" />
            </Box>
            <Text as="p">End Call</Text>
        </Box>
    );
};
