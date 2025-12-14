import { ButtonHTMLAttributes, ReactNode } from "react";

type IconType = ReactNode | { src: string; width?: number; height?: number };

export type ButtonProps = {
    children?: ReactNode;
    icon?: IconType;
    iconPosition?: "left" | "right";
    ariaLabel?: string;
    className?: string;
    href?: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">;
