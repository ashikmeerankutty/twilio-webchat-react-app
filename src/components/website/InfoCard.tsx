import { Box, Button, Card, Text } from "@twilio-paste/core";
import { ChevronDownIcon } from "@twilio-paste/icons/esm/ChevronDownIcon";
import { ChevronUpIcon } from "@twilio-paste/icons/esm/ChevronUpIcon";
import { FC, useState } from "react";

interface InfoCardProps {
    image: string;
    heading: string;
    subHeading: string;
    primaryCTA: string;
}

export const InfoCard: FC<InfoCardProps> = ({ image, heading, subHeading, primaryCTA, children }) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    return (
        <Card padding="space0">
            <Box padding="space50">
                <Text
                    color="colorText"
                    fontWeight="fontWeightNormal"
                    marginBottom="space20"
                    fontSize="fontSize60"
                    as="h3"
                >
                    {heading}
                </Text>
                <Text color="colorTextWeak" fontSize="fontSize20" as="p">
                    {subHeading}
                </Text>
            </Box>
            <Box maxHeight={350} width="100%" as="img" src={image} alt="Open Account" maxWidth="100%" />
            <Box padding="space40">
                <Button variant="link" onClick={() => setExpanded(!expanded)}>
                    {expanded ? (
                        <ChevronUpIcon color="colorTextBrandHighlight" decorative={true} title="Expand register now" />
                    ) : (
                        <ChevronDownIcon
                            color="colorTextBrandHighlight"
                            decorative={true}
                            title="Expand register now"
                        />
                    )}
                    <Text as="p" textTransform="uppercase" color="colorTextBrandHighlight">
                        {primaryCTA}
                    </Text>
                </Button>
                {expanded && (
                    <Box marginTop="space50" aria-expanded={expanded}>
                        {children}
                    </Box>
                )}
            </Box>
        </Card>
    );
};
