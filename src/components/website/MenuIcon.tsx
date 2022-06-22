import { FC } from "react";

interface MenuIconProps {
    width?: number;
    height?: number;
    color?: string;
}

export const MenuIcon: FC<MenuIconProps> = ({ width = 24, height = 24, color = "#fff" }) => (
    <svg
        fill="none"
        width={width}
        height={height}
        stroke={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);
