import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { ACTION_BUTTONS_CONFIG, HeaderActionButtons } from "./header";


type ButtonProps = {
  icon: HeaderActionButtons;
  children?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  iconClassName?: string;
  href?: string;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type">;

export function IconButton({ iconPosition = "left", ...props }: ButtonProps) {
  const action_button = ACTION_BUTTONS_CONFIG[props.icon];

  const renderIcon = () => {
    return (
      <div
        className={clsx(
          "relative inline-flex items-center justify-center aria-hidden w-[16px] h-[16px]",
          props.iconClassName,
        )}
      >
        <Image
          src={action_button.src}
          alt={action_button.ariaLabel}
          fill
          className="object-contain"
        />
      </div>
    );
  };

  if (props.href) {
    return (
      <Link
        href={props.href}
        aria-label={action_button.ariaLabel}
        className={clsx("inline-flex items-center justify-center bg-transparent gap-[16px]", props.className)}
      >
        {iconPosition === "left" && renderIcon()}
        {props.children}
        {iconPosition === "right" && renderIcon()}
      </Link>
    );
  }

  return (
    <button
      type={props.type}
      aria-label={action_button.ariaLabel}
      onClick={props.onClick}
      className={clsx("inline-flex items-center justify-center bg-transparent gap-[16px]", props.className,)}
    >
      {iconPosition === "left" && renderIcon()}
      {props.children}
      {iconPosition === "right" && renderIcon()}
    </button>
  );
}

export default IconButton;