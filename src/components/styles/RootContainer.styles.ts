import { BoxStyleProps } from "@twilio-paste/core/box";

export const outerContainerStyles: BoxStyleProps = {
    position: "fixed",
    bottom: "space200",
    right: "space60",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    zIndex: "zIndex90"
};

export const innerContainerStyles: BoxStyleProps = {
    boxShadow: "shadow",
    display: "flex",
    flexDirection: "column",
    width: "320px",
    height: "590px",
    marginBottom: "space50",
    borderRadius: "borderRadius30",
    backgroundColor: "colorBackgroundBody"
};
