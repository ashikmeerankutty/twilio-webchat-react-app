import { FC } from "react";
import { Box, Text } from "@twilio-paste/core";

import iconMenuHome from "../../assets/icon-menu-home.svg";
import iconMenuHomeWhite from "../../assets/icon-menu-home-white.svg";
import iconMenuBenefits from "../../assets/icon-menu-benefits.svg";
import iconMenuBenefitsWhite from "../../assets/icon-menu-benefits-white.svg";
import iconMenuCalculators from "../../assets/icon-menu-calculators.svg";
import iconMenuCalculatorsWhite from "../../assets/icon-menu-calculators-white.svg";
import iconMenuHomeOutlook from "../../assets/icon-menu-homeoutlook.svg";
import iconMenuHomeOutlookWhite from "../../assets/icon-menu-homeoutlook-white.svg";
import iconMenuProperties from "../../assets/icon-menu-properties.svg";
import iconMenuPropertiesWhite from "../../assets/icon-menu-properties-white.svg";
import iconMenuResources from "../../assets/icon-menu-resources.svg";
import iconMenuResourcesWhite from "../../assets/icon-menu-resources-white.svg";
import iconMenuRates from "../../assets/icon-menu-rates.svg";
import iconMenuAgent from "../../assets/icon-menu-agent.svg";

const navbarItems = [
    {
        display: "Home",
        icon: iconMenuHome,
        iconWhite: iconMenuHomeWhite
    },
    {
        display: "Mortgage Calculator",
        icon: iconMenuCalculators,
        iconWhite: iconMenuCalculatorsWhite
    },
    {
        display: "Current Mortgage Rates",
        hoverDisabled: true,
        icon: iconMenuRates,
        iconWhite: iconMenuRates
    },
    {
        display: "Resources",
        icon: iconMenuResources,
        iconWhite: iconMenuResourcesWhite
    },
    {
        display: "Benefits",
        icon: iconMenuBenefits,
        iconWhite: iconMenuBenefitsWhite
    },
    {
        display: "Home Outlook",
        icon: iconMenuHomeOutlook,
        iconWhite: iconMenuHomeOutlookWhite
    },
    {
        display: "Property Alert",
        icon: iconMenuProperties,
        iconWhite: iconMenuPropertiesWhite
    },
    {
        display: "Home Outlook",
        icon: iconMenuHomeOutlook,
        iconWhite: iconMenuHomeOutlookWhite
    },
    {
        display: "Real Estate Agent",
        icon: iconMenuAgent,
        hoverDisabled: true,
        iconWhite: iconMenuAgent
    }
];

export const Navbar: FC = () => {
    return (
        <Box
            style={{ boxShadow: "2px 2px 6px rgb(0 0 0 / 15%)" }}
            position="fixed"
            width="8.32%"
            display="flex"
            flexDirection="column"
            height="100vh"
        >
            {navbarItems.map(({ display, icon, iconWhite }) => (
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="80px"
                    key={display}
                >
                    <Box height="20px" as="img" src={icon} />
                    <Box marginTop="space30" maxWidth="95px">
                        <Text textAlign="center" fontSize="fontSize10" textTransform="uppercase" as="p">
                            {display}
                        </Text>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};
