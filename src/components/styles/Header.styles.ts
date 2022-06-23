import { BoxStyleProps } from "@twilio-paste/core/box";
import { TextStyleProps } from "@twilio-paste/core/text";

export const containerStyles: BoxStyleProps = {
    display: "flex",
    alignItems: "center",
    columnGap: "space30",
    backgroundColor: "colorBackgroundStrong",
    paddingX: "space50",
    paddingY: "space50",
    borderTopLeftRadius: "borderRadius20",
    borderTopRightRadius: "borderRadius20"
};

export const titleStyles: TextStyleProps = {
    color: "colorTextNeutral"
};
