import { Box, BoxStyleProps } from "@twilio-paste/core";
import { FC } from "react";

export const RecordStartIcon: FC<BoxStyleProps> = (props) => (
  <Box
    as="span"
    {...props}
    boxSizing="border-box"
    lineHeight="lineHeight0"
    display="block"
    width="1.25rem"
    height="1.25rem"
  >
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      enable-background="new 0 0 32 32;"
    >
      <path
        fill="#111918"
        d="M30,6v20l-9-8v-4L30,6z M2,6h18v20H2V6z M6,9h1V8H6V9z M4,9h1V8H4V9z"
      />
    </svg>
  </Box>
);
