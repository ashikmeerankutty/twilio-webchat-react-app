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
import { useScrollSpy } from "../hooks/useScrollSpy";

const navbarItems = [
    {
        display: "Home",
        icon: iconMenuHome,
        iconWhite: iconMenuHomeWhite,
        id: "home"
    },
    {
        display: "Current Mortgage Rates",
        hoverDisabled: true,
        icon: iconMenuRates,
        iconWhite: iconMenuRates
    },
    {
        display: "Mortgage Calculator",
        icon: iconMenuCalculators,
        iconWhite: iconMenuCalculatorsWhite,
        id: "calculators"
    },
    {
        display: "Resources",
        icon: iconMenuResources,
        iconWhite: iconMenuResourcesWhite,
        id: "services"
    },
    {
        display: "Benefits",
        icon: iconMenuBenefits,
        iconWhite: iconMenuBenefitsWhite,
        id: "help"
    },
    {
        display: "Home Outlook",
        icon: iconMenuHomeOutlook,
        iconWhite: iconMenuHomeOutlookWhite,
        id: "whats-new"
    },
    {
        display: "Property Alert",
        icon: iconMenuProperties,
        iconWhite: iconMenuPropertiesWhite
    },
    {
        display: "Real Estate Agent",
        icon: iconMenuAgent,
        hoverDisabled: true,
        iconWhite: iconMenuAgent
    }
];

export const Navbar: FC = () => {
    const activeSection = useScrollSpy({
        activeSectionDefault: "home",
        sectionElements: Array.from(document.getElementsByTagName("section")),
        offsetPx: -112
    });

    const scrollToView = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    return (
        <Box
            style={{ boxShadow: "2px 2px 6px rgb(0 0 0 / 15%)" }}
            position="fixed"
            width="110px"
            display="flex"
            flexDirection="column"
            height="100vh"
            zIndex="zIndex40"
            backgroundColor="colorBackground"
        >
            {navbarItems.map(({ display, icon, iconWhite, id }) => {
                const isActive = id === activeSection;
                return (
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        height="95px"
                        key={display}
                        cursor="pointer"
                        onClick={() => {
                            if (id) {
                                scrollToView(id);
                            }
                        }}
                        backgroundColor={isActive ? "colorBackgroundDestructive" : "colorBackground"}
                    >
                        <Box height="20px" as="img" src={isActive ? iconWhite : icon} />
                        <Box marginTop="space30" maxWidth="95px">
                            <Text
                                textAlign="center"
                                lineHeight="lineHeight10"
                                fontSize="fontSize10"
                                textTransform="uppercase"
                                as="p"
                                color={isActive ? "colorTextBrandInverse" : "colorText"}
                            >
                                {display}
                            </Text>
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
};
