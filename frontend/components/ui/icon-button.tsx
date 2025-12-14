import Image from "next/image";
import Link from "next/link";
import { ButtonProps } from "@/types/icons";


export function IconButton({
  children,
  icon,
  iconPosition = "left",
  ariaLabel,
  className = "",
  onClick,
  type = "button",
  href,
}: ButtonProps) {

  const renderIcon = () => {
    if (!icon) return null;
    if (typeof icon === "object" && "src" in icon) {
      const { src, width = 20, height = 20 } = icon;
      return (
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          className="h-6 w-6"
          aria-hidden
        />
      );
    }
    return <span className="h-6 w-6" aria-hidden>{icon}</span>;
  };

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        className={`inline-flex items-center justify-center bg-transparent  text-foreground ${className}`}
      >
        {iconPosition === "left" && renderIcon()}
        {children}
        {iconPosition === "right" && renderIcon()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-flex items-center justify-center bg-transparent p-0 text-foreground ${className}`}
    >
      {iconPosition === "left" && renderIcon()}
      {children}
      {iconPosition === "right" && renderIcon()}
    </button>
  );
}

export default IconButton;