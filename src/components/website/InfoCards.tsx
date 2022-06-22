import { Box, Checkbox, Column, Grid, Input, Label, Select, Stack, Option } from "@twilio-paste/core";
import { FC, useState } from "react";

import { InfoCard } from "./InfoCard";
import OpenAccountImage from "../../assets/open-account.jpg";
import HaveAQuestionImage from "../../assets/have-a-question.jpg";

const discussOptions = [
    {
        key: "open account",
        value: "Open an account"
    },
    {
        key: "general investing",
        value: "General Investing"
    },
    {
        key: "home loans",
        value: "Home loans"
    },
    {
        key: "retirement Planning",
        value: "Retirement Planning"
    },
    {
        key: "credit cards",
        value: "Credit cards"
    },

    {
        key: "college planning",
        value: "College planning"
    }
];

export const InfoCards: FC = () => {
    const [checked, setChecked] = useState<boolean>(true);

    return (
        <Grid  marginBottom="space50" gutter="space30" vertical={[true, true, false]}>
            <Column span={[12, 6, 6]}>
                <InfoCard
                    image={OpenAccountImage}
                    heading="Open your account today"
                    subHeading="Complete to register for an account"
                    primaryCTA="Register Now"
                >
                    <Stack spacing="space50" orientation="vertical">
                        <Box>
                            <Label htmlFor="legal_name" required>
                                Legal name
                            </Label>
                            <Input id="legal_name" name="legal_name" type="text" placeholder="John Doe" required />
                        </Box>
                        <Box>
                            <Label htmlFor="email_address" required>
                                Email address
                            </Label>
                            <Input
                                id="email_address"
                                name="email_address"
                                type="email"
                                placeholder="example@owlbank.com"
                                required
                            />
                        </Box>
                        <Box>
                            <Label htmlFor="phone_number" required>
                                Phone number
                            </Label>
                            <Input
                                id="phone_number"
                                name="phone_number"
                                type="tel"
                                placeholder="+911234689376"
                                required
                            />
                        </Box>
                        <Checkbox
                            checked={checked}
                            id="blm"
                            value="blm"
                            name="blm"
                            onChange={(event) => {
                                setChecked(event.target.checked);
                            }}
                        >
                            I consent to be contacted by email and/ or by phone.
                        </Checkbox>
                        <Box
                            as="button"
                            backgroundColor="colorBackgroundPrimary"
                            color="colorTextBrandInverse"
                            borderRadius="borderRadius20"
                            border="none"
                            padding="space30"
                            cursor="pointer"
                            textTransform="uppercase"
                        >
                            Register
                        </Box>
                    </Stack>
                </InfoCard>
            </Column>
            <Column span={[12, 6, 6]}>
                <InfoCard
                    image={HaveAQuestionImage}
                    heading="Have questions?"
                    subHeading="Talk to an expert"
                    primaryCTA="Schedule an appointment"
                >
                    <Stack spacing="space50" orientation="vertical">
                        <Box>
                            <Label htmlFor="discussion">What would you like to discuss</Label>
                            <Select id="discussion">
                                {discussOptions.map(({ key, value }) => (
                                    <Option key={key} value={key}>
                                        {value}
                                    </Option>
                                ))}
                            </Select>
                        </Box>
                        <Box>
                            <Label htmlFor="appointment_date" required>
                                Appointment Date
                            </Label>
                            <Input id="appointment_date" name="appointment_date" type="date" required />
                        </Box>
                        <Box
                            as="button"
                            backgroundColor="colorBackgroundPrimary"
                            color="colorTextBrandInverse"
                            borderRadius="borderRadius20"
                            border="none"
                            padding="space30"
                            cursor="pointer"
                            textTransform="uppercase"
                        >
                            Schedule
                        </Box>
                    </Stack>
                </InfoCard>
            </Column>
        </Grid>
    );
};
