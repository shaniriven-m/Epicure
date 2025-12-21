import Image from "next/image";
import clsx from "clsx";

type TextButtonProps = {
    label: string;
    onClick?: () => void;
    iconClassName?: string;
    className?: string;
};

export default function TextButton(props: TextButtonProps) {
    return (
        <button type="button" onClick={props.onClick} className={clsx("flex items-center gap-[12px]", props.className)}>
            <span className="flex-1 text-button text-left whitespace-nowrap overflow-hidden">{props.label}</span>
            <div className={clsx("relative inline-flex items-center justify-center aria-hidden w-[24px] h-[24px]", props.iconClassName)}>
                <Image src="/icons/arrow.svg" alt="arrow" fill className="object-contain" />
            </div>
        </button >
    );
}
