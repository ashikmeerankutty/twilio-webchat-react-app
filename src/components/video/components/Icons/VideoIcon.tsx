import { Box, BoxStyleProps } from "@twilio-paste/core";
import { FC } from "react";

export const VideoIcon: FC<BoxStyleProps> = (props) => (
  <Box
    as="span"
    boxSizing="border-box"
    lineHeight="lineHeight0"
    display="block"
    width="1.25rem"
    height="1.25rem"
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  </Box>
);
