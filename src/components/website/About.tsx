import { Box, Card, Text } from "@twilio-paste/core";
import { FC } from "react";

export const About: FC = () => {
    return (
        <Box paddingBottom="space200">
            <Card>
                <Text as="h3" fontSize="fontSize40">
                    Why Owl Bank?
                </Text>
                <Text marginY="space30" as="p">
                    Owl Bank is pioneering a new way of banking. Built upon years of world class customer service,
                    renowned community service, and novel digital experiences, we welcome you to WISE banking.
                </Text>
                <Text as="h4">No Hidden Fees</Text>
                <Text as="p" marginY="space20">
                    No minimum balances. No monthly fees. No overdraft fees. No surprises. Traditionally, fees are the
                    main source of revenue for traditional banks. However, we at Owl Bank know that WISE banking must be
                    fully transparent. Therefore, we not only will show you every fee but we will also give you a
                    friendly description of what that fee is and why it’s included.
                </Text>
                <Text as="h4">Security and Trust</Text>
                <Text as="p" marginY="space20">
                    Owl Bank uses secures processes to protect your information and help prevent unauthorized use. Rest
                    assured that your financial future is secure with Owl Bank.
                </Text>
            </Card>
        </Box>
    );
};
