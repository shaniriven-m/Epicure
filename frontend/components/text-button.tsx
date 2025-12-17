import Image from "next/image";
import clsx from "clsx";

type TextButtonProps = {
    label: string;
    onClick?: () => void;
};

export default function TextButton({
    label,
    onClick,
}: TextButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex items-center h-[35px] w-[172px] md:w-[226px]"
        >
            <span className="flex-1 text-button text-left whitespace-nowrap overflow-hidden">{label}</span>
            <div className="flex items-center h-[36px] w-[35px] justify-end">
                <Image
                    src="/icons/arrow.svg"
                    alt=""
                    aria-hidden
                    width={24}
                    height={24}
                />
            </div>
        </button>
    );
}
