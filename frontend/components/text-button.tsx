import Image from "next/image";
import clsx from "clsx";

type TextButtonProps = {
    label: string;
    onClick?: () => void;
    iconClassName?: string;
};

export default function TextButton({
    label,
    onClick,
    iconClassName,
}: TextButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex items-center gap-[12px]"
        >
            <span className="flex-1 text-button text-left whitespace-nowrap overflow-hidden">{label}</span>
            <div className={clsx("relative inline-flex items-center justify-center aria-hidden w-[24px] h-[24px]", iconClassName)}>
                <Image
                    src="/icons/arrow.svg"
                    alt="arrow"
                    fill
                    className="object-contain"
                />
            </div>
        </button >
    );
}
